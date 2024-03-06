import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type feedbackDocument = HydratedDocument<Feedback>

@Schema()
export class Feedback {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Feedback', require: true })
    feedback_id: string;

    @Prop({ required: false })
    phone_number: string;

    @Prop({ required: false })
    email: string;

    @Prop({ required: true })
    message: string;

    @Prop({ type: Date, default: Date.now() })
    created_at: Date

    @Prop({ type: Date, default: Date.now() })
    updated_at: Date
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback)