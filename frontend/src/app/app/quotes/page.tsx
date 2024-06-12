'use client';
import React from 'react';
import { columns } from './columns';
import { DataTable } from './data-table';
import { useQuoteByUser } from '../../_hooks/useQuoteByUser';
import { useSession } from 'next-auth/react';

const Quotes = () => {
  const { data: session, status } = useSession();
  const { quotes } = useQuoteByUser(session?.user);

  return (
    <div className="w-11/12 max-w-6xl py-14">
      {quotes ? <DataTable columns={columns} data={quotes} /> : <></>}
    </div>
  );
};

export default Quotes;
