import mongoose, { Document, Schema } from "mongoose";

export interface IUser { name: string };
export interface IUserModel extends IUser, Document { }

const authorSchema: Schema = new Schema(
    {
        email: { type: String, required: true, index: true, unique: true },
        password: { type: String, required: true },
        phone: { type: String },
        role: { type: String, default: 'user' }
    },
    { timestamps: true }
);

export default mongoose.model<IUserModel>('User', authorSchema);