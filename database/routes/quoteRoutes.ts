import express from 'express';
export const router = express.Router();
import * as quoteController from '../controllers/quoteController.ts';

router.get('/', quoteController.getAllQuotes);
router.post('/', quoteController.createQuote);
