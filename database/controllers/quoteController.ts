import type { Request, Response } from 'express';
import { Quote } from '../models/quote.ts';

export const getAllQuotes = async (req: Request, res: Response) => {
  try {
    const quotes = await Quote.find({});
    res.json(quotes);
  } catch (err) {
    console.log(err);
  }
};

export const createQuote = async (req: Request, res: Response) => {};
