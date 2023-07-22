import express, { Router , Request, Response} from 'express'
import Book from '../models/book';

class IndexController {
    public static getIndex = async (req:any,res:Response)=>{
        const user  = req.user;
        const books:any =  await Book.find().sort({createdAt:'desc'}).limit(2).populate('author').exec();
        res.render('index' , {books:books, user:user});
    }
}

export default IndexController;