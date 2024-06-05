import React, { useState, useEffect } from 'react';
import { type Quote, type Response } from '../../lib/types';
import { z } from 'zod';
import { getRandomQuote } from '../../lib/utils';

const mongoIdSchema = z.string().regex(/^[0-9a-f]{24}$/);

const quoteSchema = z.array(
  z.object({
    _id: mongoIdSchema,
    text: z.string().min(1, 'Quote text cannot be empty'),
    author: z.string(),
    tags: z.array(z.string()),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
);

type QuoteOperation = 'add' | 'delete';

export const useQuote = (isInit: boolean, operation?: QuoteOperation) => {
  const [quotes, setQuotes] = useState<Quote[] | null>(null);
  const [quotePool, setQuotePool] = useState<Quote[] | null>(null);
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  const fetchQuotes = async () => {
    fetch('/api/quotes')
      .then((res) => res.json())
      .then((quotes: Response) => {
        const validatedQuotes = quoteSchema.safeParse(quotes.data);

        if (!validatedQuotes.success) {
          console.error(validatedQuotes.error);
          return;
        }

        setQuotes(quotes.data);
      });
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    if (isInit) {
      setQuotePool(quotes);
      setCurrentQuote(getRandomQuote(quotes));
    } else {
      // handle quotePool when a quote is added or deleted
    }
  }, [isInit, quotes]);

  return { quotes, quotePool, setQuotePool, currentQuote, setCurrentQuote };
};
