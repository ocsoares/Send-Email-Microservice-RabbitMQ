import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export const MAX_SUBJECT_LENGTH = 100;
export const MAX_TEXT_LENGTH = 10000;

export class PublishSendEmailDTO {
    @ApiProperty({ type: 'email', example: 'example@gmail.com' })
    @IsNotEmpty()
    @IsEmail()
    readonly email_to: string;

    @ApiProperty({ type: 'string', example: 'my new cake recipe' })
    @IsNotEmpty()
    @IsString()
    @MaxLength(MAX_SUBJECT_LENGTH)
    readonly subject: string;

    @ApiProperty({
        type: 'string',
        example: 'My new cake recipe is delicious and very creamy.',
    })
    @IsNotEmpty()
    @IsString()
    @MaxLength(MAX_TEXT_LENGTH)
    readonly text: string;
}
