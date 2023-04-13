import { PrismaService } from '../prisma-client.service';
import { Injectable } from '@nestjs/common';
import { IEmail } from 'src/models/IEmail';
import { EmailRepository } from 'src/repositories/abstracts/EmailRepository';

@Injectable()
export class PrismaEmailRepository implements EmailRepository {
    constructor(private readonly _prismaService: PrismaService) {}

    async save(data: IEmail): Promise<void> {
        await this._prismaService.email.create({ data });
    }
}
