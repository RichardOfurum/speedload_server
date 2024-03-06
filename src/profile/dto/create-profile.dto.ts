import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateProfileDto {

    @IsString()
    @IsNotEmpty()
    readonly user_id: string;

    @IsString()
    @IsNotEmpty()
    readonly first_name: string;

    @IsString()
    @IsNotEmpty()
    readonly last_name: string;

    @IsString()
    @IsNotEmpty()
    readonly phone_number: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly photo: string;

    @IsString()
    @IsNotEmpty()
    readonly id_card: string;

    @IsNumber()
    @IsNotEmpty()
    readonly ballance: number;


}
