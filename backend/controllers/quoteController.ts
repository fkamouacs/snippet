import type { Request, Response } from 'express';

import { Quote } from '../models/quote';

const getAllQuotes = async (req: Request, res: Response) => {
  try {
    const quotes = await Quote.find({});
    res.json(quotes);
  } catch (err) {
    console.log(err);
  }
};

const createQuote = async (req: Request, res: Response) => {};

module.exports = {
  getAllQuotes,
  createQuote,
};
