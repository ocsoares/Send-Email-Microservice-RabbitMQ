import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaDatabaseModule } from './repositories/implementations/prisma/prisma-database.module';
import { EmailModule } from './modules/email/email.module';
import { RabbitmqModule } from './modules/rabbitmq/rabbitmq.module';
import { NodemailerModule } from './modules/nodemailer/nodemailer.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        PrismaDatabaseModule,
        RabbitmqModule,
        NodemailerModule,
        EmailModule,
    ],
})
export class AppModule {}
