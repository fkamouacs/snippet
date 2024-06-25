'use client';
import { useState, useEffect } from 'react';
import { DataTable } from './data-table';
import { fetchQuotesByUser } from '@/lib/api';
import { useSession } from 'next-auth/react';
import type { Quote } from '@/lib/types';
import { AddQuoteDialog } from '@/components/addQuoteDialog';
import { sortByNewest } from '@/lib/utils';

import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';

import { EditQuoteDialog } from '@/components/editQuoteDialog';

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

  const columns: ColumnDef<Quote>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },

    {
      accessorKey: 'text',
      header: 'Text',
    },
    {
      accessorKey: 'author',
      header: 'Author',
    },
    {
      accessorKey: 'tags',
      header: 'Tags',
    },

    {
      id: 'actions',
      cell: ({ row }) => {
        return <EditQuoteDialog row={row} setQuotes={setQuotes} />;
      },
    },
  ];

  return (
    <div className="w-11/12 max-w-6xl py-14">
      <div className="flex justify-between mb-4">
        <h1>Your Quotes</h1>
        <AddQuoteDialog setQuotes={setQuotes} />
      </div>

      {quotes ? (
        <DataTable columns={columns} data={quotes} setQuotes={setQuotes} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Quotes;
