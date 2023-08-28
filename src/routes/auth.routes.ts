
import { Router } from 'express';
import AuthController from '@src/controllers/auth.controller'
const router = Router();
router.get('/', AuthController.login);


export default router