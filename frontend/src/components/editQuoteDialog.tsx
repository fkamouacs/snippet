import { useState, Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Pencil } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { EditQuoteForm } from '@/components/editQuoteForm';
import { Quote } from '@/lib/types';
import { Row } from '@tanstack/react-table';

type Props = {
  row: Row<Quote>;
  setQuotes: Dispatch<SetStateAction<Quote[]>>;
};

export function EditQuoteDialog({ row, setQuotes }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleAddQuote = () => {};

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" onClick={() => setIsOpen(true)}>
          <Pencil className=" h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[325px] md:max-w-[525px] ">
        <DialogHeader className="w-full">
          <DialogTitle>Edit Quote</DialogTitle>
        </DialogHeader>

        <EditQuoteForm
          setIsOpen={setIsOpen}
          quote={row.original}
          setQuotes={setQuotes}
        />
      </DialogContent>
    </Dialog>
  );
}
