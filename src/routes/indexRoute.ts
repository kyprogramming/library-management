import express, { Router , Request, Response} from 'express'
import IndexController from '../controllers/indexController';

const router:Router  = express.Router()

router.get('/', IndexController.getIndex)

export default router;