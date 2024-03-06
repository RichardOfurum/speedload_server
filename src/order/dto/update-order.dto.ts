import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    @IsString()
    readonly seller_id: string;

    @IsString()
    readonly buyer_id: string;

    @IsString()
    readonly product_id: string;

    @IsNumber()
    readonly price: number;

    @IsString()
    readonly payment_status: string;

    @IsString()
    readonly order_status: string;

    @IsString()
    readonly location: string;


    @IsEmail()
    readonly buyer_email: string;

    @IsString()
    readonly buyer_town: string;

    @IsString()
    readonly buyer_phone_number: string;

    @IsString()
    readonly buyer_first_name: string;

    @IsString()

    readonly buyer_last_name: string;

    @IsString()
    readonly buyer_address: string;
}
