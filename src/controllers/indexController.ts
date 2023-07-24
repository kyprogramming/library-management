import express, { Router , Request, Response} from 'express'
import Book from '../models/book';

class IndexController {
    public static getIndex = async (req:any,res:Response)=>{
        const user  = req.user;
        const books:any =  await Book.find().sort({createdAt:'desc'}).limit(2).populate('author').exec();
        res.render('index' , {books:books, user:user});
    }

    public static getIcon = async (req:any,res:Response)=>{
        res.sendFile('favicon.ico');
    }
}

export default IndexController;