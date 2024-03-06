import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type ProfileDocument = HydratedDocument<Profile>

@Schema()
export class Profile {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Profile', require: true })
    profile_id: string;

    @Prop({ required: true })
    user_id: string;

    @Prop({ required: true })
    first_name: string;

    @Prop({ required: true })
    last_name: string;

    @Prop({ required: true })
    id_card: string;

    @Prop({ required: true })
    photo: string;

    @Prop({ required: true })
    phone_number: string;

    @Prop({ required: true })
    email: string;

    @Prop({ type: Date, default: Date.now() })
    created_at: Date

    @Prop({ type: Date, default: Date.now() })
    updated_at: Date
}

export const ProfileSchema = SchemaFactory.createForClass(Profile)