import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma-client.service';
import { EmailRepository } from 'src/repositories/abstracts/EmailRepository';
import { PrismaEmailRepository } from './transaction/PrismaEmailRepository';

@Global()
@Module({
    providers: [
        PrismaService,
        {
            provide: EmailRepository,
            useClass: PrismaEmailRepository,
        },
    ],
    exports: [EmailRepository],
})
export class PrismaDatabaseModule {}
