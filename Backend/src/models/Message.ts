import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
    chat: mongoose.Types.ObjectId; //chat will be stored as an ObjectId in the db
    sender: mongoose.Types.ObjectId; //sender will be stored as an ObjectId in the db
    text: string;
    createdAt: Date;
    updatedAt: Date;
}

const MessageSchema = new Schema<IMessage>({
    chat: { type: Schema.Types.ObjectId, ref: "Chat", required: true },
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true, trim: true },
}, { timestamps: true }
);

//indexed are for faster queries

MessageSchema.index({ chat: 1, createdAt: 1 });
// 1-asc
// -1-desc

export const Message = mongoose.model<IMessage>("Message", MessageSchema);