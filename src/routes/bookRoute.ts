import express, { Router , Request, Response} from 'express'
import BookController from '../controllers/bookController';

const router:Router  = express.Router()

router.get('/', BookController.getBook)

router.post('/', BookController.saveBook)

router.put('/:id', BookController.updateBook)

router.delete('/:id', BookController.deleteBook)


export default router;