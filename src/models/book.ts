import mongoose, {Document ,Schema} from "mongoose";

export interface IBook {
     title:string,
     description:string,
     publishDate:Date,
     pageCount:number,
     cover:Buffer,
     coverType:String,
     author:mongoose.Schema.Types.ObjectId
};
export interface IBookModel extends IBook , Document {}

const bookSchema: Schema =  new Schema( 
    {
        title:{type:String , required:true},
        description:{type:String , required:true},
        publishDate:{type:Date , required:true},
        pageCount:{type:Number , required:true},
        cover:{type:Buffer , required:true},
        coverType:{type:Buffer , required:true},
        author:{type:mongoose.Schema.Types.ObjectId , required:true , ref:'Author'},
    },
    {timestamps: true}
);

bookSchema.virtual('coverImagePath').get(function():any {
    if(this.cover && this.coverType){
        return `data:${this.coverType};charset=utf-8;base64, ${this.cover.toString('base64')}`
    }
})

export default mongoose.model<IBookModel>('Book', bookSchema);