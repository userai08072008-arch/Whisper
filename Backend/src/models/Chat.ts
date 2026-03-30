import mongoose, { Schema, type Document } from "mongoose";

export interface IChat extends Document {
    participants: mongoose.Types.ObjectId[]; //participants will be stored as an array in the db
    lastMessage?: mongoose.Types.ObjectId; //lastMessage will be stored as an ObjectId in the db
    lastMessageAt?: Date;
    content: string;
    createdAt: Date;
    updateAt: Date;
}

const ChatSchema = new Schema<IChat>({
    participants: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    lastMessage: { type: Schema.Types.ObjectId, ref: "Message", default: null },
    lastMessageAt: { type: Date, default: Date.now },
}, { timestamps: true }
);

export const Chat = mongoose.model<IChat>("Chat", ChatSchema);