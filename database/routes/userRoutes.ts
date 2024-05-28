import express from 'express';
export const router = express.Router();
import * as userController from '../controllers/userController.ts';

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
