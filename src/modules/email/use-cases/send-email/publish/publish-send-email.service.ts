import { Injectable } from '@nestjs/common';
import { IEmail } from 'src/models/IEmail';
import { IService } from 'src/interfaces/IService';
import { EmailRepository } from 'src/repositories/abstracts/EmailRepository';

@Injectable()
export class PublishSendEmailService implements IService {
    constructor(private readonly _sendEmailRepository: EmailRepository) {}

    async execute(data?: IEmail): Promise<string> {
        return null;
    }
}
