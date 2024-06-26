'use client';

import { useState, useEffect } from 'react';
import Quote from './quote';
import type { Quote as TQuote } from '../../lib/types';
import { useQuote } from '../_hooks/useQuote';
import useKeyPress from '../_hooks/useKeyPress';
import { getRandomQuote } from '../../lib/utils';
import { SkeletonQuote } from '../../components/skeletonQuote';
import { useSession } from 'next-auth/react';
import useTouch from '../_hooks/useTouch';

export default function Home() {
  const { data: session, status } = useSession();

  const { quotes, quotePool, setQuotePool, currentQuote, setCurrentQuote } =
    useQuote(true, session?.user);

  const [layoverQuote, setLayoverQuote] = useState<TQuote | null>(null);

  const getQuote = () => {
    if (!layoverQuote) {
      if (quotes && quotePool && quotePool.length === 1 && quotes.length != 1) {
        const notCurrentQuote = quotes.filter((q) => q._id != quotePool[0]._id);
        setLayoverQuote(getRandomQuote(notCurrentQuote));
      }

      setCurrentQuote(getRandomQuote(quotePool));
    } else {
      setCurrentQuote(layoverQuote);
      setLayoverQuote(null);
    }
  };

  useKeyPress('Space', getQuote);
  useTouch('touchend', getQuote);

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
  }, [currentQuote, layoverQuote]);

  return (
    <div className=" flex self-center justify-center w-full h-full">
      <main className="flex max-w-3xl  flex-col items-center justify-center p-5 ">
        {currentQuote === null ? (
          <SkeletonQuote />
        ) : (
          <div className="flex flex-col items-center">
            <Quote currentQuote={currentQuote} />
            <div className="p-5  text-sm">Press Space</div>
          </div>
        )}
      </main>
    </div>
  );
}
