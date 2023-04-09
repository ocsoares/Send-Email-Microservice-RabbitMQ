import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaDatabaseModule } from './repositories/implementations/prisma/prisma-database.module';
import { EmailModule } from './modules/email/email.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        PrismaDatabaseModule,
        EmailModule,
    ],
})
export class AppModule {}
