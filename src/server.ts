import express, { Express } from 'express';
import mongoose, { Connection } from 'mongoose';
import { config } from './config/config';
import indexRouter from './routes/indexRoute'
import authorRouter from './routes/authorRoute'
import bookRouter from './routes/bookRoute'
import userRouter from './routes/userRoute';
import contactRouter from './routes/contactRoute';
import expressEjsLayouts from 'express-ejs-layouts';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import verifyToken from './middleware/verifyToken';
import methodOverride from 'method-override';
import fileupload from 'express-fileupload';
import ErrorHandler from './middleware/errorHandler';
import log4js from './middleware/logger';

const app: Express = express();

const logger = log4js.getLogger('file');

mongoose.connect(config.mongo.url);
const db: Connection = mongoose.connection;
db.on('error', (err: string) => logger.error(err));
db.once('open', (): void => {
    logger.info('database connected successfully.')
    startServer();
});

process.on('uncaughtException', function (err) {
    logger.info(`uncaughtException: ${err}`);
})

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

app.use(express.static('src/public'));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(expressEjsLayouts);
app.use(methodOverride('_method'));
app.use(fileupload());
app.use(express.json());
app.use(cookieParser());

app.use('/user', userRouter);
app.use('/', verifyToken, indexRouter);
app.use('/author', verifyToken, authorRouter);
app.use('/book', verifyToken, bookRouter);
app.use('/contact', verifyToken, contactRouter);
app.all('*', ErrorHandler.handleUnknownUrl);
app.use(ErrorHandler.handleError);

const startServer = (): void => {
    app.listen(config.server.port, (): void => {
        logger.info(`server is running on port : ${process.env.server_port}`);
    })
}