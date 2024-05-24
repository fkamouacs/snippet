const db = require("../models");

exports.getAllQuotes = async (req, res) => {
  try {
    const quotes = await db.Quote.findAll();
    res.status(200).json(quotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createQuote = async (req, res) => {
  try {
    const newQuote = await db.Quote.create(req.body);
    res.status(201).json(newQuote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
