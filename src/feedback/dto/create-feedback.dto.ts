import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateFeedbackDto {

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
