import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export const MAX_SUBJECT_LENGTH = 100;
export const MAX_TEXT_LENGTH = 10000;

export class PublishSendEmailDTO {
    @IsNotEmpty()
    @IsEmail()
    readonly email_from: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email_to: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(MAX_SUBJECT_LENGTH)
    readonly subject: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(MAX_TEXT_LENGTH)
    readonly text: string;
}
