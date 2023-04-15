import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
    imports: [
        // Async to allow tests to access .env !
        RabbitMQModule.forRootAsync(RabbitMQModule, {
            useFactory: async () => ({
                uri: process.env.RABBITMQ_URI,
            }),
        }),
    ],
    exports: [RabbitMQModule],
})
export class RabbitmqModule {}
