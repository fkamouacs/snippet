import React, { Dispatch, SetStateAction } from 'react';
import { X } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Badge } from '@/components/ui/badge';
import type { Quote } from '@/lib/types';

type Props = {
  quote: Quote;
  currentQuotes: Quote[];
  setCurrentQuotes: Dispatch<SetStateAction<Quote[]>>;
};

const QuoteBadge = ({ quote, currentQuotes, setCurrentQuotes }: Props) => {
  const handleDelete = () => {
    const updatedQuotes = currentQuotes.filter((q) => q._id !== quote._id);
    setCurrentQuotes(updatedQuotes);
  };
  return (
    <div>
      <Badge className="pr-1">
        <HoverCard>
          <HoverCardTrigger>{quote.author}</HoverCardTrigger>
          <HoverCardContent>{quote.text}</HoverCardContent>
          <X
            onClick={() => handleDelete()}
            className="cursor-pointer ml-1 w-4 h-4"
          />
        </HoverCard>
      </Badge>
    </div>
  );
};

export default QuoteBadge;
