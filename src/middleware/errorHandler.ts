class ErrorHandler{
    public static handleError = (err:any, req:any, res:any, next:any)=>{
        if(!err) return next();
        console.log("Error log:" , err);
        res.render('error', {message:err.message , status: err.status , code:err.statusCode});
    }

    public static handleUnknownUrl = (req:any, res:any, next:any)=>{
        const err:any = new Error(`Can't find ${req.originalUrl} on the server!`);
        err.status = 'fail';
        err.statusCode = 404;
        next(err);
    }
}

export default ErrorHandler;