import { Body, Controller, Post } from '@nestjs/common';
import {
    IController,
    returnHandle,
} from '../../../../../interfaces/IController';
import { PublishSendEmailService } from './publish-send-email.service';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { PublishSendEmailDTO } from './dtos/PublishSendEmailDTO';
import {
    RABBITMQ_EMAIL_EXCHANGE,
    RABBITMQ_EMAIL_ROUTINGKEY,
} from '../../../../../config/rabbitmq';
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiTags,
} from '@nestjs/swagger';

@Controller()
export class PublishSendEmailController implements IController {
    constructor(
        private readonly _sendEmailService: PublishSendEmailService,
        private readonly _amqpConnection: AmqpConnection,
    ) {}

    @ApiTags('send-email')
    @ApiBadRequestResponse()
    @ApiCreatedResponse()
    @Post('send')
    async handle(@Body() body: PublishSendEmailDTO): Promise<returnHandle> {
        await this._amqpConnection.publish(
            RABBITMQ_EMAIL_EXCHANGE,
            RABBITMQ_EMAIL_ROUTINGKEY,
            body,
        );

        return {
            message: `Email enviado com sucesso para o destinatário: ${body.email_to} !`,
        };
    }
}
