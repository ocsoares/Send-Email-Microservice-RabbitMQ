import { Global, Module } from '@nestjs/common';
import { EmailModule } from '../email/email.module';
import { EmailRepository } from '../../repositories/abstracts/EmailRepository';
import { EmailRepositorySQLInMemory } from './sql-in-memory/email-repository-sql-in-memory';
import { NodemailerModule } from '../nodemailer/nodemailer.module';
import { RabbitmqModule } from '../rabbitmq/rabbitmq.module';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
    imports: [
        ConfigModule.forRoot(),
        EmailModule,
        NodemailerModule,
        RabbitmqModule,
    ],
    providers: [
        {
            provide: EmailRepository,
            useClass: EmailRepositorySQLInMemory,
        },
    ],
    exports: [EmailRepository, NodemailerModule, RabbitmqModule],
})
export class TestDependenciesModule {}
