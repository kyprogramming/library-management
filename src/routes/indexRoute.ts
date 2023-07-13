import express, { Router , Request, Response} from 'express'
import IndexController from '../controllers/indexController';
import verifyToken from '../middleware/verifyToken';

const router:Router  = express.Router()

router.get('/', verifyToken , IndexController.getIndex)

export default router;