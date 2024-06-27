import type { User, Quote, Collection, Response } from '@/lib/types';
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

export const fetchQuotesById = async (quotes: Quote[]) => {
  const fetchPromises = quotes.map(async (id) => {
    return fetch('/api/quotes/id/', {
      method: 'POST',
      body: JSON.stringify(id),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((quote: Response) => {
        return quote.data;
      });
  });

  const results = await Promise.all(fetchPromises);

  return results;
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

export const deleteQuote = async (quote: Quote) => {
  return fetch('/api/quotes/', {
    method: 'DELETE',
    body: JSON.stringify(quote),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

export const fetchCollectionsByUser = async (user: User) => {
  return fetch(`/api/collections/${user.email}`)
    .then((res) => res.json())
    .then((collections: Response) => {
      return collections.data;
    });
};

export const fetchCollectionsByID = async (collectionID) => {
  return fetch(`/api/collections/id/${collectionID}`)
    .then((res) => res.json())
    .then((collections: Response) => {
      return collections.data;
    });
};

export const addCollection = async (collection: Collection) => {
  return fetch('/api/collections/', {
    method: 'POST',
    body: JSON.stringify(collection),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
