import mongoose, {Document ,Schema} from "mongoose";

export interface IBook {
     title:string,
     description:string,
     publishDate:Date,
     pageCount:number,
     coverImage:Buffer,
     author:mongoose.Schema.Types.ObjectId
};
export interface IBookModel extends IBook , Document {}

const bookSchema: Schema =  new Schema( 
    {
        title:{type:String , required:true},
        description:{type:String , required:true},
        publishDate:{type:Date , required:true},
        pageCount:{type:Number , required:true},
        coverImage:{type:Buffer , required:true},
        author:{type:mongoose.Schema.Types.ObjectId , required:true , ref:'Author'},
    },
    {timestamps: true}
);

export default mongoose.model<IBookModel>('Book', bookSchema);