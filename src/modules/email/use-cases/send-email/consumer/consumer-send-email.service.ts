import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { IService } from '../../../../../interfaces/IService';
import { EmailRepository } from '../../../../../repositories/abstracts/EmailRepository';
import { PublishSendEmailDTO } from '../publish/dtos/PublishSendEmailDTO';
import {
    RABBITMQ_EMAIL_EXCHANGE,
    RABBITMQ_EMAIL_QUEUE,
    RABBITMQ_EMAIL_ROUTINGKEY,
} from '../../../../../config/rabbitmq';
import { MailerService } from 'src/modules/nodemailer/mailer.service';

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
                from: process.env.NODEMAILER_USER,
                to: data.email_to,
                subject: data.subject,
                text: data.text,
            });

            await this._consumerSendEmailRepository.save({
                ...data,
                email_from: process.env.NODEMAILER_USER,
                status_email: 'sent',
                created_at: new Date(),
            });
        } catch (error) {
            await this._consumerSendEmailRepository.save({
                ...data,
                email_from: process.env.NODEMAILER_USER,
                status_email: 'failed',
                created_at: new Date(),
            });
        }
    }
}
