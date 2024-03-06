import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
// import { Account } from "src/account/entities/account.entity";

export type AccountDocument = HydratedDocument<Account>

@Schema()
export class Account {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Account', require: true }) account_id: string;

    @Prop({ required: true, default: 0 })
    ballance: number;

    @Prop({ required: true, })
    user_id: string;

    @Prop({ type: Date, default: Date.now() })
    created_at: Date

    @Prop({ type: Date, default: Date.now() })
    updated_at: Date
}

export const AccountSchema = SchemaFactory.createForClass(Account)