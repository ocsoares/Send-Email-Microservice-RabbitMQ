import { Module } from '@nestjs/common';
import { PublishSendEmailService } from './use-cases/send-email/publish/publish-send-email.service';
import { ConsumerSendEmailService } from './use-cases/send-email/consumer/consumer-send-email.service';
import { PublishSendEmailController } from './use-cases/send-email/publish/publish-send-email.controller';

@Module({
    providers: [PublishSendEmailService, ConsumerSendEmailService],
    controllers: [PublishSendEmailController],
})
export class EmailModule {}
