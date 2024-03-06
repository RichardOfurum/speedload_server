import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrderDto {

    @IsString()
    @IsNotEmpty()
    readonly seller_id: string;

    @IsString()
    @IsNotEmpty()
    readonly buyer_id: string;

    @IsString()
    @IsNotEmpty()
    readonly product_id: string;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;

    @IsString()
    @IsNotEmpty()
    readonly payment_status: string;

    @IsString()
    @IsNotEmpty()
    readonly order_status: string;

    @IsString()
    @IsNotEmpty()
    readonly location: string;

    @IsEmail()
    @IsNotEmpty()
    readonly buyer_email: string;

    @IsString()
    @IsNotEmpty()
    readonly buyer_town: string;

    @IsString()
    @IsNotEmpty()
    readonly buyer_phone_number: string;

    @IsString()
    @IsNotEmpty()
    readonly buyer_first_name: string;

    @IsString()
    @IsNotEmpty()
    readonly buyer_last_name: string;

    @IsString()
    @IsNotEmpty()
    readonly buyer_address: string;
}
