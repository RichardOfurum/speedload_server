import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {

    @IsString()
    @IsOptional()
    readonly seller_id: string;

    @IsString()
    @IsOptional()
    readonly image: string;

    @IsString()
    @IsOptional()
    readonly description: string;

    @IsString()
    @IsOptional()
    readonly vehicle_type: string;

    @IsString()
    @IsOptional()
    readonly load_capacity: string;

    @IsNumber()
    @IsOptional()
    readonly delivery_time: number;

    @IsNumber()
    @IsOptional()
    readonly price: number;

    @IsString()
    @IsOptional()
    readonly phone_number: string;

    @IsString()
    @IsOptional()
    readonly product_type: string;

    @IsString()
    readonly location: string;
}
