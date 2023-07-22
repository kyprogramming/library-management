import express, { Router, Request, Response } from 'express'
import contactController from '../controllers/contactController';

const router: Router = express.Router()

router.get('/', contactController.getContact);
router.post('/', contactController.saveContact);

export default router;