export interface IEmail {
    readonly id?: string;
    readonly email_from: string;
    readonly email_to: string;
    readonly subject: string;
    readonly text: string;
    readonly status_email: 'sent' | 'failed';
    readonly created_at: Date;
}
