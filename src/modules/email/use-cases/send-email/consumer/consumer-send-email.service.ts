import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { EmailRepository } from 'src/repositories/abstracts/EmailRepository';
import { PublishSendEmailDTO } from '../publish/dtos/PublishSendEmailDTO';
import {
    RABBITMQ_EMAIL_EXCHANGE,
    RABBITMQ_EMAIL_QUEUE,
    RABBITMQ_EMAIL_ROUTINGKEY,
} from 'src/config/rabbitmq';

@Injectable()
export class ConsumerSendEmailService implements IService {
    constructor(
        private readonly _consumerSendEmailRepository: EmailRepository,
        private readonly _mailerService: MailerService,
    ) {}

    @RabbitSubscribe({
        exchange: RABBITMQ_EMAIL_EXCHANGE,
        routingKey: RABBITMQ_EMAIL_ROUTINGKEY,
        queue: RABBITMQ_EMAIL_QUEUE,
    })
    async execute(data: PublishSendEmailDTO): Promise<void> {
        try {
            await this._mailerService.sendMail({
                from: data.email_from,
                to: data.email_to,
                subject: data.subject,
                text: data.text,
            });

            await this._consumerSendEmailRepository.save({
                ...data,
                status_email: 'sent',
                created_at: new Date(),
            });
        } catch (error) {
            await this._consumerSendEmailRepository.save({
                ...data,
                status_email: 'failed',
                created_at: new Date(),
            });
        }
    }
}
