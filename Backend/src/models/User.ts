import type { User } from "@clerk/express";
import mongoose, { Schema, type Document } from "mongoose"; //better to type even tho it's known 
//it's also helpful when we do tree shaking ( basically removing the unused code)

export interface IUser extends Document {
    clerkId: string;
    name: string;
    email: string;
    avatar?: string;
    createdAt: Date;
    updateAt: Date;
}
const UserSchema = new Schema<IUser>({
    clerkId: { type: String, required: true, unique: true },
    name: {
        type: String, required: true,
        trim:true //remove the extra spaces 
        },
    email: {
        type: String, required: true, unique: true,
        lowercase: true, //converts the email into lowercase
        trim: true
    },
    avatar: { type: String, default: "" },
}, {
    timestamps: true,
})

export const UserModel = mongoose.model<IUser>("User", UserSchema);
//it will be used as users in the db but as User in the code