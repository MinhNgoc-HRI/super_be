import { Router } from 'express';
import MainController from '@src/controllers/main.controller'
const router = Router();
router.get('/', MainController.index);


export default router