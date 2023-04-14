import { Injectable } from '@nestjs/common';
import { IEmail } from '../../../../../models/IEmail';
import { IService } from '../../../../../interfaces/IService';
import { EmailRepository } from '../../../../../repositories/abstracts/EmailRepository';

@Injectable()
export class PublishSendEmailService implements IService {
    constructor(private readonly _sendEmailRepository: EmailRepository) {}

    async execute(data?: IEmail): Promise<string> {
        return null;
    }
}
