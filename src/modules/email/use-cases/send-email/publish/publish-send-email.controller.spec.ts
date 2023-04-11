import { Test, TestingModule } from '@nestjs/testing';
import { PublishSendEmailController } from './publish-send-email.controller';

describe('PublishSendEmailController', () => {
    let controller: PublishSendEmailController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PublishSendEmailController],
        }).compile();

        controller = module.get<PublishSendEmailController>(
            PublishSendEmailController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
