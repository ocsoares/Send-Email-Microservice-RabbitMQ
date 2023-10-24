import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Transporter, createTransport } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { IMailerService } from './interfaces/IMailerService';
import { ISendMailData } from './interfaces/ISendMailData';

@Injectable()
export class MailerService implements IMailerService {
    private transporter: Transporter;

    constructor() {
        const transportOptions: SMTPTransport.Options = {
            host: process.env.NODEMAILER_HOST,
            port: Number(process.env.NODEMAILER_PORT),
            secure: true,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASS,
            },
        };

        this.transporter = createTransport(transportOptions);
    }

    async sendMail(data: ISendMailData): Promise<any> {
        try {
            const sentMail = await this.transporter.sendMail(data);

            return sentMail;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}
