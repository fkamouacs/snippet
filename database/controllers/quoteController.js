const Quote = require('../models/quote');

exports.getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find({});
    res.json(quotes);
  } catch (err) {
    throw new Error('MongoDB getAllQuotes error');
  }
};

exports.createQuote = async (req, res) => {};
