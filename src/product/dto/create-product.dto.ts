import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    readonly seller_id: string;

    @IsString()
    @IsNotEmpty()
    readonly image: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsString()
    @IsNotEmpty()
    readonly vehicle_type: string;

    @IsString()
    @IsNotEmpty()
    readonly load_capacity: string;

    @IsNumber()
    @IsNotEmpty()
    readonly delivery_time: number;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;

    @IsString()
    @IsNotEmpty()
    readonly phone_number: string;

    @IsString()
    @IsNotEmpty()
    readonly product_type: string;

    @IsString()
    @IsNotEmpty()
    readonly location: string;

}
