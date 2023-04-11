import { Test, TestingModule } from '@nestjs/testing';
import { PublishSendEmailService } from './publish-send-email.service';

describe('PublishSendEmailService', () => {
    let service: PublishSendEmailService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PublishSendEmailService],
        }).compile();

        service = module.get<PublishSendEmailService>(PublishSendEmailService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
