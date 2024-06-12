import { useState, useEffect } from 'react';
import type { User, Quote, Response } from '@/lib/types';
import { quoteSchema } from '@/lib/zodSchemas';

export const useQuoteByUser = (user: User) => {
  const [quotes, setQuotes] = useState<Quote[] | null>(null);

  const fetchQuotes = async () => {
    fetch(`/api/quotes/${user.email}`)
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
    if (user) fetchQuotes();
  }, [user]);

  return { quotes };
};
