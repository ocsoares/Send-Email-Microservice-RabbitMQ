import { Module } from '@nestjs/common';
import { SendEmailService } from './use-cases/send-email/send-email.service';
import { SendEmailController } from './use-cases/send-email/send-email.controller';

@Module({
    providers: [SendEmailService],
    controllers: [SendEmailController],
})
export class EmailModule {}
