'use client';

import { ColumnDef } from '@tanstack/react-table';
import type { Quote } from '../../lib/types';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Quote>[] = [
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
];
