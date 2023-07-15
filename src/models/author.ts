import mongoose, { Document, Schema, mongo } from "mongoose";

export interface IAuthor { name: string };
export interface IAuthorModel extends IAuthor, Document { }

const authorSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true }
    },
    { timestamps: true }
);

export default mongoose.model<IAuthorModel>('Author', authorSchema);