import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { CreateFeedbackDto } from './create-feedback.dto';

export class UpdateFeedbackDto extends PartialType(CreateFeedbackDto) {
    @IsEmail()
    @IsOptional()
    readonly email: string;

    @IsString()
    @IsOptional()
    readonly phone_number: string;

    @IsString()
    @IsNotEmpty()
    readonly message: string;
}
