import express, { Router , Request, Response} from 'express'

class BookController {
    public static getBook = (req:Request,res:Response)=>{
        res.send("this is book get response");
    }
    public static saveBook = (req:Request,res:Response)=>{
        res.send("this is book post response");
    }
    public static updateBook = (req:Request,res:Response)=>{
        res.send("this is book update response");
    }
    public static deleteBook = (req:Request,res:Response)=>{
        res.send("this is book delete response");
    }
}

export default BookController;