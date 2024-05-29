import express from 'express';
const router = express.Router();
const quoteController = require('../controllers/quoteController');

router.get('/', quoteController.getAllQuotes);
router.post('/', quoteController.createQuote);

module.exports = router;
