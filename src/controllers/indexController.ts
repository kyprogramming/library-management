import express, { Router , Request, Response} from 'express'

class IndexController {
    public static getIndex = (req:Request,res:Response)=>{
        res.send("this is response from index request");
    }
   
}

export default IndexController;