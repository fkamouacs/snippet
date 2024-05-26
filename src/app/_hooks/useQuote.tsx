import React, { useState, useEffect } from 'react';
import { type Quote } from '../../../lib/types';
import { z } from 'zod';

const quoteSchema = z.array(
  z.object({
    text: z.string(),
    author: z.string(),
  })
);

export const useQuote = () => {
  const [quotes, setQuotes] = useState<Quote[] | null>(null);

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

  return { quotes };
};
