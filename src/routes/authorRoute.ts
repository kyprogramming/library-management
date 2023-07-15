import express, { Router , Request, Response} from 'express'
import AuthorController from '../controllers/authorController';

const router:Router  = express.Router()

router.get('/new', AuthorController.newAuthor);
router.get('/', AuthorController.viewAuthors)
router.get('/:id/edit', AuthorController.editAuthor);

router.post('/', AuthorController.saveAuthor)
router.post('/:id', AuthorController.updateAuthor)
router.delete('/:id', AuthorController.deleteAuthor)

export default router;