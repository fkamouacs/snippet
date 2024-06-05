import React, { useState, useEffect } from 'react';
import { type Quote } from '../../lib/types';
import { z } from 'zod';
import { getRandomQuote } from '../../lib/utils';

const quoteSchema = z.array(
  z.object({
    text: z.string(),
    author: z.string(),
  })
);

type QuoteOperation = 'add' | 'delete';

export const useQuote = (isInit: boolean, operation?: QuoteOperation) => {
  const [quotes, setQuotes] = useState<Quote[] | null>(null);
  const [quotePool, setQuotePool] = useState<Quote[] | null>(null);
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  const apiURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

  const fetchQuotes = async () => {
    fetch(`${apiURL}/api/quotes`)
      .then((res) => res.json())
      .then((quotes: Quote[]) => {
        const validatedQuotes = quoteSchema.safeParse(quotes);

        if (!validatedQuotes.success) {
          console.error(validatedQuotes.error);
          return;
        }

        setQuotes(quotes);
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
