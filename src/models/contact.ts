import mongoose, {Document ,Schema} from "mongoose";

export interface IContact { name:string};
export interface IContactModel extends IContact , Document {}

const contactSchema: Schema =  new Schema( 
    {
        name:{type:String , required:true },
        email:{type:String , required:true},
        subject:{type:String, required:true },
        message:{type:String, required:true }
    },
    {timestamps: true}
);

export default mongoose.model<IContactModel>('Contact', contactSchema);