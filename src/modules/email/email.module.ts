import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PublishSendEmailService } from './use-cases/send-email/publish/publish-send-email.service';
import { ConsumerSendEmailService } from './use-cases/send-email/consumer/consumer-send-email.service';
import { PublishSendEmailController } from './use-cases/send-email/publish/publish-send-email.controller';
import { NodemailerModule } from '../nodemailer/nodemailer.module';
import { rateLimiterMiddleware } from '../auth/middlewares/rate-limiter.middleware';

@Module({
    imports: [NodemailerModule],
    providers: [PublishSendEmailService, ConsumerSendEmailService],
    controllers: [PublishSendEmailController],
})
export class EmailModule implements NestModule {
    // I used this because NestJS Throttler Module doesn't work !!!
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(rateLimiterMiddleware).forRoutes('send');
    }
}
