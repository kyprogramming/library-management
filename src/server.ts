import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

import {config} from './config/config';
 
dotenv.config()

const app  = express();



mongoose.connect(config.mongo.url);
const db = mongoose.connection;
db.on('error', (err)=> console.log(err));
db.once('open', ()=>{
    console.log('database connected successfully.')
    startServer();
})


const startServer = ()=>{
    app.listen(config.server.port, ()=>{
        console.log(`server is running on port : ${process.env.server_port}`); 
    })
}