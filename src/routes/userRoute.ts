import express, { Router , Request, Response} from 'express'
import UserController from '../controllers/userController';

const router:Router  = express.Router()

router.get('/register', UserController.register);
router.get('/signin', UserController.signin);

export default router;