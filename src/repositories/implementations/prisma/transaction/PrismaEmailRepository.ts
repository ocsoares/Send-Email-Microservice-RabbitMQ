import { PrismaService } from '../prisma-client.service';
import { Injectable } from '@nestjs/common';
import { EmailRepository } from 'src/repositories/abstracts/EmailRepository';

@Injectable()
export class PrismaEmailRepository implements EmailRepository {
    constructor(private readonly _prismaService: PrismaService) {}

    async any(data: any): Promise<any> {}
}
