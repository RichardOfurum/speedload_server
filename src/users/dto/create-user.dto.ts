import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    // @IsString()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string

    @IsOptional()
    @IsBoolean()
    readonly type: string;

    @IsOptional()
    @IsBoolean()
    readonly isVerified: boolean;

}
