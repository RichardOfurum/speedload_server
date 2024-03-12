import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Order>

@Schema()
export class Order {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order', require: true })
    order_id: string;

    @Prop({ require: true })
    seller_id: string;

    @Prop({ require: true })
    buyer_id: string;

    @Prop({ require: true })
    product_id: string;

    @Prop({ require: true })
    price: number;

    @Prop({ require: true })
    payment_status: string;

    @Prop({ require: true })
    order_status: string;

    @Prop({ require: true })
    location: string;

    @Prop({ require: true })
    buyer_email: string;

    @Prop({ require: true })
    buyer_town: string;

    @Prop({ require: true })
    buyer_phone_number: string;

    @Prop({ require: true })
    buyer_first_name: string;

    @Prop({ require: true })
    buyer_last_name: string;

    @Prop({ require: true })
    buyer_address: string;

    @Prop({ type: Date, default: Date.now() })
    created_at: Date

    @Prop({ type: Date, default: Date.now() })
    updated_at: Date
}

export const OrderSchema = SchemaFactory.createForClass(Order);