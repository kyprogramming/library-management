import express, { Router , Request, Response} from 'express'

class IndexController {
    public static getIndex = (req:any,res:Response)=>{
        // res.send("this is response from index request");
        const user  = req.user;
        res.render('index' , {user:user});
    }
   
}

export default IndexController;