import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerSendEmailService } from './consumer-send-email.service';

describe('ConsumerSendEmailService', () => {
    let service: ConsumerSendEmailService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ConsumerSendEmailService],
        }).compile();

        service = module.get<ConsumerSendEmailService>(
            ConsumerSendEmailService,
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
