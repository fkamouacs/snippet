import { useState, useEffect, useRef, createRef } from 'react';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { fetchQuotesByUser } from '@/lib/api';
import type { Quote } from '@/lib/types';
import { useSession } from 'next-auth/react';
import { sortByNewest } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import QuoteBadge from '@/components/quoteBadge';

const CommandQuotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const { data: session, status } = useSession();
  const [currentQuotes, setCurrentQuotes] = useState<Quote[]>([]);
  const checkBoxRef = useRef([]);

  useEffect(() => {
    if (session)
      fetchQuotesByUser(session?.user).then((res) => {
        setQuotes(sortByNewest(res));
      });
  }, [session]);

  useEffect(() => {
    console.log(quotes);
    checkBoxRef.current = quotes.map(() => createRef());
  }, [quotes]);

  const displayQuoteBadges = () => {
    return currentQuotes.map((q) => {
      return (
        <QuoteBadge
          key={q._id.toString()}
          quote={q}
          currentQuotes={currentQuotes}
          setCurrentQuotes={setCurrentQuotes}
        />
      );
    });
  };

  const isChecked = (index) => {
    const hasId = currentQuotes.some(
      (quote) => quote._id.toString() == checkBoxRef.current[index]?.current?.id
    );
    if (hasId) {
      return true;
    }
    return false;
    // const target = e.target as HTMLInputElement;
    // const quote = quotes.find((quote) => quote._id.toString() == target.id);
    // if (quote != undefined) {
    //   return true;
    // }
    // return false;
  };

  const displayQuotes = () => {
    const handleCheckClick = (e) => {
      const target = e.target as HTMLInputElement;
      const quote = quotes.find((quote) => quote._id.toString() == target.id);

      if (target.getAttribute('aria-checked') === 'false') {
        setCurrentQuotes([...currentQuotes, quote]);
      } else {
        const updatedQuotes = currentQuotes.filter((q) => q._id !== quote._id);
        setCurrentQuotes(updatedQuotes);
      }
    };

    return quotes.map((q, index) => {
      return (
        <CommandItem className="my-4 space-x-4" key={q._id.toString()}>
          <Checkbox
            ref={checkBoxRef.current[index]}
            checked={isChecked(index)}
            id={q._id.toString()}
            onClick={(e) => handleCheckClick(e)}
          />
          <div> {`${q.text} - ${q.author}`}</div>
        </CommandItem>
      );
    });
  };

  return (
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      <div className="flex space-x-2">{displayQuoteBadges()}</div>

      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandSeparator />
        <CommandGroup heading="Quotes">{displayQuotes()}</CommandGroup>
      </CommandList>
    </Command>
  );
};

export default CommandQuotes;
