'use client';

import { useState, useEffect } from 'react';
import Quote from './quote';
import { useQuote } from './_hooks/useQuote';
import useKeyPress from './_hooks/useKeyPress';
import { getRandomQuote } from '../../lib/utils';

export default function Home() {
  const { quotes, quotePool, setQuotePool, currentQuote, setCurrentQuote } =
    useQuote(true);

  const getQuote = () => {
    setCurrentQuote(getRandomQuote(quotePool));
  };

  useKeyPress('Space', getQuote);

  useEffect(() => {
    if (quotePool !== null) {
      console.log(quotePool);
      const updatedPool = quotePool?.filter(
        (quote) => quote._id !== currentQuote?._id
      );
      if (updatedPool.length == 0) {
        setQuotePool(quotes);
      } else {
        setQuotePool(updatedPool);
      }
    }
  }, [currentQuote]);

  return (
    <main className="flex self-center max-w-3xl min-h-screen flex-col items-center justify-center p-5 bg-offwhite text-offblack">
      <Quote currentQuote={currentQuote} />

      <div className="p-5  text-sm">Press Space for Next Quote</div>
    </main>
  );
}
