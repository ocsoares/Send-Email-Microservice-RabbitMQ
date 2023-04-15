import { INestApplication, ValidationPipe } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { TestDependenciesModule } from '../../../../../modules/test/test-dependencies.module';
import * as supertest from 'supertest';
import { PublishSendEmailService } from './publish-send-email.service';
import { PrismaService } from '../../../../../repositories/implementations/prisma/prisma-client.service';
import { TestPrismaService } from '../../../../../repositories/implementations/prisma/test/test-prisma.service';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { ConfigModule } from '@nestjs/config';
import {
    RABBITMQ_EMAIL_EXCHANGE,
    RABBITMQ_EMAIL_ROUTINGKEY,
} from '../../../../../config/rabbitmq';

describe('PublishSendEmailController', () => {
    let app: INestApplication;
    let publishSendEmailService: PublishSendEmailService;
    let amqpConnection: AmqpConnection;
    const route = '/send';

    const publishBody = {
        email_to: 'anyemail2030@gmail.com',
        subject: 'no teste integrado',
        text: 'enviando um email pelo teste integrado',
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [ConfigModule.forRoot(), TestDependenciesModule],
        })
            .overrideProvider(PrismaService)
            .useClass(TestPrismaService)
            .compile();

        app = module.createNestApplication();

        app.useGlobalPipes(
            new ValidationPipe({
                whitelist: true,
                forbidNonWhitelisted: true,
            }),
        );

        publishSendEmailService = module.get<PublishSendEmailService>(
            PublishSendEmailService,
        );

        amqpConnection = module.get<AmqpConnection>(AmqpConnection);

        jest.spyOn(publishSendEmailService, 'execute');
        jest.spyOn(amqpConnection, 'publish');

        await app.init();
    });

    afterEach(async () => {
        await app.close();
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(app).toBeDefined();
        expect(publishSendEmailService).toBeDefined();
    });

    it('should NOT publish email to the queue if body is invalid', async () => {
        const invalidBody = {
            plataform: 'google',
            subject: 123143,
            text: '',
        };

        const response = await supertest(app.getHttpServer())
            .post(route)
            .send(invalidBody)
            .expect(400);

        const { message } = response.body;

        const expectedMessage = [
            'property plataform should not exist',
            'email_to must be an email',
            'email_to should not be empty',
            'subject must be shorter than or equal to 100 characters',
            'subject must be a string',
            'text should not be empty',
        ];

        expect(message).toEqual(expectedMessage);
        expect(amqpConnection.publish).toHaveBeenCalledTimes(0);
    });

    it('should publish email to the queue', async () => {
        jest.spyOn(amqpConnection, 'publish').mockResolvedValue({} as any);

        const response = await supertest(app.getHttpServer())
            .post(route)
            .send(publishBody)
            .expect(201);

        const { message } = response.body;

        expect(message).toBeDefined();
        expect(amqpConnection.publish).toHaveBeenCalledWith(
            RABBITMQ_EMAIL_EXCHANGE,
            RABBITMQ_EMAIL_ROUTINGKEY,
            publishBody,
        );
    });
});
