import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>

@Schema()
export class Product {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product', require: true })
    product_id: string;

    @Prop({ required: true })
    seller_id: string;

    @Prop({ required: true })
    image: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    vehicle_type: string;

    @Prop({ required: true })
    load_capacity: string;

    @Prop({ required: true })
    delivery_time: number;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    phone_number: string;

    @Prop({ required: true })
    product_type: string;

    @Prop({ required: true })
    location: string;

    @Prop({ type: Date, default: Date.now() })
    created_at: Date

    @Prop({ type: Date, default: Date.now() })
    updated_at: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product);