'use client';
import React from 'react';
import { Quote } from '../../../lib/types';
import { columns } from './columns';
import { DataTable } from './data-table';

import { useQuote } from '../../_hooks/useQuote';

const Quotes = () => {
  const { quotes } = useQuote(true);

  return (
    <div className="w-11/12 max-w-6xl py-14">
      {quotes ? <DataTable columns={columns} data={quotes} /> : <></>}
    </div>
  );
};

export default Quotes;
