import { ISendMailData } from './ISendMailData';

export interface IMailerService {
    sendMail(data: ISendMailData): Promise<any>;
}
