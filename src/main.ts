import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config/app';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import { mw } from 'request-ip';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // To obtain the real IP address of the request on a production server !
    app.set('trust proxy', true);

    app.use(helmet());

    app.use(mw());

    app.setGlobalPrefix('api/email');

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );

    const config = new DocumentBuilder()
        .setTitle('Send Email Microservice')
        .setDescription(
            'Um microsserviço de enviar email desenvolvido com sistema de mensageria, usando a ferramenta RabbitMQ',
        )
        .setVersion('1.0')
        .addTag('send-email')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('docs', app, document);

    const server = app.getHttpAdapter();

    server.get('/', (req: Request, res: Response) => {
        res.redirect('/docs');
    });

    app.enableCors({
        origin: process.env.FRONTEND_URL,
        methods: ['GET', 'POST'],
    });

    await app.listen(PORT);
}

bootstrap();
