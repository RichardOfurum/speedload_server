import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsEmail()
    @IsOptional()
    readonly email: string;

    @IsString()
    @IsOptional()
    readonly password: string;

    @IsOptional()
    @IsBoolean()
    readonly type: string;

    @IsOptional()
    @IsBoolean()
    readonly isVerified: boolean;
}
