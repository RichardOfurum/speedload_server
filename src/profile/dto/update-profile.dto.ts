import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";


export class UpdateProfileDto extends PartialType(CreateProfileDto) {

    @IsString()
    readonly user_id: string;

    @IsString()
    readonly first_name: string;

    @IsString()
    readonly last_name: string;

    @IsString()
    readonly phone_number: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    readonly photo: string;

    @IsString()
    readonly id_card: string;


}
