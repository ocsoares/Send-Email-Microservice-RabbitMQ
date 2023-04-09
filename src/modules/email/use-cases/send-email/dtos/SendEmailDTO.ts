import { IsNotEmpty, IsString } from 'class-validator';

export class SendEmailDTO {
    @IsNotEmpty()
    @IsString()
    any: string;
}
