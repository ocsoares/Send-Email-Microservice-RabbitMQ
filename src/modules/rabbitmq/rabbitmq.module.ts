import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
    imports: [
        RabbitMQModule.forRoot(RabbitMQModule, {
            uri: `amqp://${process.env.RABBITMQ_DEFAULT_USER}:${process.env.RABBITMQ_DEFAULT_PASS}@localhost:5672`,
        }),
    ],
    exports: [RabbitMQModule],
})
export class RabbitmqModule {}
