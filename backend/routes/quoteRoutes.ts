import express from 'express';
export const router = express.Router();
const quoteController = require('../controllers/quoteController');

router.get('/', quoteController.getAllQuotes);
router.post('/', quoteController.createQuote);
