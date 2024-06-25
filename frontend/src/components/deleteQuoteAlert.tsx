import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Row } from '@tanstack/react-table';
import React from 'react';
import { deleteQuote } from '@/lib/api';
import { useToast } from '@/components/ui/use-toast';
import type { Quote } from '@/lib/types';
import { Dispatch, SetStateAction } from 'react';
import { fetchQuotesByUser } from '@/lib/api';
import { sortByNewest } from '@/lib/utils';
import { useSession } from 'next-auth/react';

type Props = {
  selectedRows: Row<any>[];
  setQuotes: Dispatch<SetStateAction<Quote[]>>;
};

const DeleteQuoteAlert = ({ selectedRows, setQuotes }: Props) => {
  const { data: session, status } = useSession();
  const { toast } = useToast();

  const handleDelete = () => {
    const deleteAll = async () => {
      for (let i = 0; i < selectedRows.length; i++) {
        await deleteQuote(selectedRows[i].original);
      }
    };

    deleteAll().then(() => {
      fetchQuotesByUser(session?.user).then((res) => {
        setQuotes(sortByNewest(res));
      });
      toast({
        description: 'Quote(s) deleted',
      });
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="destructive" className="mr-3">
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will delete all selected quotes.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteQuoteAlert;
