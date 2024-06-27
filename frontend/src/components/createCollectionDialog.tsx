import { useState, Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { CreateCollectionForm } from '@/components/createCollectionForm';
import { Quote } from '@/lib/types';

type Props = {
  setCollections: Dispatch<SetStateAction<any[]>>;
};

export function CreateCollectionDialog({ setCollections }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleAddQuote = () => {};

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          <Plus className="mr-1 h-4 w-4" /> Create Collection
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[325px] md:max-w-[525px] ">
        <DialogHeader className="w-full">
          <DialogTitle>Create Collection</DialogTitle>
        </DialogHeader>

        <CreateCollectionForm
          setIsOpen={setIsOpen}
          setCollections={setCollections}
        />
      </DialogContent>
    </Dialog>
  );
}
