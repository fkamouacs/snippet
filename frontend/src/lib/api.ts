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

export const editQuote = async (quote: Quote) => {
  return fetch('/api/quotes/', {
    method: 'PUT',
    body: JSON.stringify(quote),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
