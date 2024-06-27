'use client';
import { useState, useEffect } from 'react';

import { DataTable } from '../../quotes/data-table';
import { usePathname } from 'next/navigation';
import { fetchCollectionsByID, fetchQuotesById } from '@/lib/api';
import { ColumnDef } from '@tanstack/react-table';
import type { Quote } from '@/lib/types';
import { Checkbox } from '@/components/ui/checkbox';

import { EditQuoteDialog } from '@/components/editQuoteDialog';

const Collection = () => {
  const [collection, setCollection] = useState(null);
  const [quotes, setQuotes] = useState([]);

  const pathname = usePathname();

  useEffect(() => {
    fetchCollectionsByID(getURLID()).then((res) => {
      setCollection(res);
      fetchQuotesById(res.quotes).then((res) => {
        console.log(res);
        setQuotes(res);
      });
    });
  }, []);

  const getURLID = () => {
    let pathSplitArr = pathname.split('/');
    return pathSplitArr[pathSplitArr.length - 1];
  };
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
        // return <EditQuoteDialog row={row} setQuotes={setQuotes} />;
      },
    },
  ];
  console.log(quotes);

  return (
    <div className=" flex self-center justify-center w-full h-full">
      <div className="w-11/12 max-w-6xl py-14">
        <div className="flex justify-between mb-4 items-end">
          <div>
            <h1 className="text-4xl mb-2">{collection?.name}</h1>
            <h2>Manage your collection</h2>
          </div>
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

export default Collection;
