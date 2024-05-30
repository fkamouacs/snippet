'use client';

import { useState, useEffect } from 'react';
import Quote from './quote';
import { type Quote as TQuote } from '../../lib/types';
import { useQuote } from './_hooks/useQuote';
import { getRandomQuote } from '../../lib/utils';

export default function Home() {
  const { quotes } = useQuote();
  const [currentQuote, setCurrentQuote] = useState<TQuote | null>(null);

  useEffect(() => {
    setCurrentQuote(getRandomQuote(quotes));
  }, [quotes]);

  return (
    <main className="flex self-center max-w-3xl min-h-screen flex-col items-center justify-center p-5 bg-offwhite text-offblack">
      <Quote currentQuote={currentQuote} />
    </main>
  );
}
