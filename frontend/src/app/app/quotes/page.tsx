'use client';
import { useState, useEffect } from 'react';
import { columns } from './columns';
import { DataTable } from './data-table';
import { fetchQuotesByUser } from '@/lib/api';
import { useSession } from 'next-auth/react';
import type { Quote } from '@/lib/types';
import { AddQuoteDialog } from '@/components/addQuoteDialog';
import { sortByNewest } from '@/lib/utils';

const Quotes = () => {
  const { data: session, status } = useSession();
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    if (session)
      fetchQuotesByUser(session?.user).then((res) => {
        setQuotes(sortByNewest(res));
      });
  }, [session]);

  const handleAddQuote = () => {};

  return (
    <div className="w-11/12 max-w-6xl py-14">
      <div className="flex justify-between mb-4">
        <h1>Your Quotes</h1>
        <AddQuoteDialog setQuotes={setQuotes} />
      </div>

      {quotes ? <DataTable columns={columns} data={quotes} /> : <></>}
    </div>
  );
};

export default Quotes;
