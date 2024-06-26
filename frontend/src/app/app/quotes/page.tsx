'use client';
import { useState, useEffect, useContext } from 'react';
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
    <div className=" flex self-center justify-center w-full h-full">
      <div className="w-11/12 max-w-6xl py-14">
        <div className="flex justify-between mb-4 items-end">
          <div>
            <h1 className="text-4xl mb-2">Quotes</h1>
            <h2>Manage your quotes</h2>
          </div>

          <AddQuoteDialog setQuotes={setQuotes} />
        </div>

        {quotes ? (
          <DataTable columns={columns} data={quotes} setQuotes={setQuotes} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Quotes;
