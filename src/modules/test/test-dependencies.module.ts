import { Global, Module } from '@nestjs/common';
import { EmailModule } from '../email/email.module';

@Global()
@Module({
    imports: [
        EmailModule
    ],
    providers: [
        {
            provide: /* REPOSITORY */,
            useClass: /* FAKE REPOSITORY IMPLEMENTATION */,
        },
        // more...
    ],
exports: [/* EXPORT REPOSITORY */],
})
export class TestDependenciesModule {}
