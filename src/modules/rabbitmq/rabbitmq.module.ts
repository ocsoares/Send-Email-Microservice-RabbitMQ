import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
    imports: [
        // Async to allow tests to access .env !
        RabbitMQModule.forRootAsync(RabbitMQModule, {
            useFactory: async () => ({
                uri: `amqp://${process.env.RABBITMQ_DEFAULT_USER}:${process.env.RABBITMQ_DEFAULT_PASS}@localhost:5672`,
            }),
        }),
    ],
    exports: [RabbitMQModule],
})
export class RabbitmqModule {}
