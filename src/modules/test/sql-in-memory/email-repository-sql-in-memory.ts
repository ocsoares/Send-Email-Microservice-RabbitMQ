import { Injectable } from '@nestjs/common';
import { IEmail } from 'src/models/IEmail';
import { EmailRepository } from 'src/repositories/abstracts/EmailRepository';

@Injectable()
export class EmailRepositorySQLInMemory implements EmailRepository {
    private emails: IEmail[] = [];

    async save(data: IEmail): Promise<void> {
        this.emails.push(data);
    }
}
