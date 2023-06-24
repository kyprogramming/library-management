import express , {Express} from 'express';
import mongoose, { Connection } from 'mongoose';
import {config} from './config/config';
import indexRouter from './routes/indexRoute'
import authorRouter from './routes/authorRoute'
import bookRouter from './routes/bookRoute'
 
const app:Express   = express();

mongoose.connect(config.mongo.url);
const db:Connection = mongoose.connection;
db.on('error', (err:string)=> console.log(err));
db.once('open', ():void=>{
    console.log('database connected successfully.')
    startServer();
})

app.use('/', indexRouter);
app.use('/author', authorRouter);
app.use('/book', bookRouter);

const startServer = ():void=>{
    app.listen(config.server.port, ():void=>{
        console.log(`server is running on port : ${process.env.server_port}`); 
    })
}