import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaDatabaseModule } from './repositories/implementations/prisma/prisma-database.module';
import { EmailModule } from './modules/email/email.module';
import { RabbitmqModule } from './modules/rabbitmq/rabbitmq.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        PrismaDatabaseModule,
        RabbitmqModule,
        EmailModule,
    ],
})
export class AppModule {}
