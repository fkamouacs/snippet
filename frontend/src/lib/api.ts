import type { User, Quote, Response } from '@/lib/types';
import { quoteSchema } from '@/lib/zodSchemas';

export const fetchQuotesByUser = async (user: User) => {
  return fetch(`/api/quotes/${user.email}`)
    .then((res) => res.json())
    .then((quotes: Response) => {
      const validatedQuotes = quoteSchema.safeParse(quotes.data);

      if (!validatedQuotes.success) {
        console.error(validatedQuotes.error);
        return;
      }
      return quotes.data;
    });
};
