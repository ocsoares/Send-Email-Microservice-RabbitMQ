import { Body, Controller, Post } from '@nestjs/common';
import { IController, returnHandle } from 'src/interfaces/IController';
import { PublishSendEmailService } from './publish-send-email.service';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { PublishSendEmailDTO } from './dtos/PublishSendEmailDTO';

@Controller('send')
export class PublishSendEmailController implements IController {
    constructor(
        private readonly _sendEmailService: PublishSendEmailService,
        private readonly _amqpConnection: AmqpConnection,
    ) {}

    @Post()
    async handle(@Body() body: PublishSendEmailDTO): Promise<returnHandle> {
        await this._amqpConnection.publish('amq.direct', 'email', body);

        return {
            message: 'Email enviado com sucesso !',
        };
    }
}
