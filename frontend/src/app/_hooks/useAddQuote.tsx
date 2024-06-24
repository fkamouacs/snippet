import React from 'react';
import type { Quote } from '@/lib/types';

const UseAddQuote = () => {
  const addQuote = (quote: Quote): Promise<any> => {
    return fetch('/api/quotes/', {
      method: 'POST',
      body: JSON.stringify(quote),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return { addQuote };
};

export default UseAddQuote;
