import { Body, Controller, Post, UseGuards } from '@nestjs/common';
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
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiTags,
    ApiTooManyRequestsResponse,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@Controller()
export class PublishSendEmailController implements IController {
    constructor(
        private readonly _sendEmailService: PublishSendEmailService,
        private readonly _amqpConnection: AmqpConnection,
    ) {}

    @UseGuards(JwtAuthGuard) // Using this globally was returning error (with APP_GUARD provide in AppModule)
    @ApiTags('send-email')
    @ApiUnauthorizedResponse()
    @ApiBadRequestResponse()
    @ApiCreatedResponse()
    @ApiTooManyRequestsResponse()
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
