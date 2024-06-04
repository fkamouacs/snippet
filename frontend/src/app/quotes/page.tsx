'use client';
import React from 'react';

import { useQuote } from '../_hooks/useQuote';

const Quotes = () => {
  const { quotes } = useQuote(true);

  return (
    <div className="w-10/12 py-12">
      <div></div>
    </div>
  );
};

export default Quotes;
