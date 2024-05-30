import React from 'react';
import { Quote as TQuote } from '../../lib/types';

interface Props {
  currentQuote: TQuote | null;
}

const Quote: React.FC<Props> = ({ currentQuote }) => {
  console.log(currentQuote);
  return (
    <>
      {currentQuote === null ? (
        <></>
      ) : (
        <div className="text-center">
          <div className="text-xl mb-3">{currentQuote?.text}</div>
          <div className="font-bold">{`- ${currentQuote?.author}`}</div>
        </div>
      )}
    </>
  );
};

export default Quote;
