import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaDatabaseModule } from './repositories/implementations/prisma/prisma-database.module';
import { EmailModule } from './modules/email/email.module';
import { RabbitmqModule } from './modules/rabbitmq/rabbitmq.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { AuthModule } from './modules/auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        PrismaDatabaseModule,
        RabbitmqModule,
        EmailModule,
        AuthModule,
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
})
export class AppModule {}
