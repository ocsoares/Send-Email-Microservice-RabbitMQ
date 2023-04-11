import { Controller, Post } from '@nestjs/common';
import { IController } from 'src/interfaces/IController';
import { PublishSendEmailService } from './publish-send-email.service';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Controller('publish')
export class PublishSendEmailController implements IController {
    constructor(
        private readonly _sendEmailService: PublishSendEmailService,
        private readonly _amqpConnection: AmqpConnection,
    ) {}

    @Post()
    async handle(...args: object[]): Promise<any> {
        await this._amqpConnection.publish(
            'amq.direct',
            'email',
            'mensagem teste',
        );
        const arroz = await this._sendEmailService.execute();

        return arroz;
    }
}
