'use client';

import { ColumnDef } from '@tanstack/react-table';
import type { Quote } from '../../../lib/types';
import { Checkbox } from '@/components/ui/checkbox';

import { EditQuoteDialog } from '@/components/editQuoteDialog';

export const columns: ColumnDef<Quote>[] = [
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
      return <EditQuoteDialog row={row} />;
    },
  },
];
