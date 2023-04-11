import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { EmailRepository } from 'src/repositories/abstracts/EmailRepository';

@Injectable()
export class PublishSendEmailService implements IService {
    constructor(private readonly _sendEmailRepository: EmailRepository) {}

    @RabbitSubscribe({
        exchange: 'amq.direct',
        routingKey: 'email',
        queue: 'send-email',
    })
    async execute(data?: string | object): Promise<string | object> {
        console.log('DATA DO RABBIT:', data);

        return data;
    }
}
