import express, { Router , Request, Response} from 'express'
import AuthorController from '../controllers/authorController';

const router:Router  = express.Router()

router.get('/', AuthorController.getAuthor)

router.post('/', AuthorController.saveAuthor)

router.put('/:id', AuthorController.updateAuthor)

router.delete('/:id', AuthorController.deleteAuthor)

export default router;