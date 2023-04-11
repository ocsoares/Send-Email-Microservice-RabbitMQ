import { Global, Module } from '@nestjs/common';
import { EmailModule } from '../email/email.module';
import { EmailRepository } from 'src/repositories/abstracts/EmailRepository';

@Global()
@Module({
    imports: [EmailModule],
    providers: [
        {
            provide: EmailRepository,
            useClass: null, // Fake Repository instead null !!!
        },
        // more...
    ],
    exports: [EmailRepository],
})
export class TestDependenciesModule {}
