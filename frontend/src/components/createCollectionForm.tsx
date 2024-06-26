'use client';
import React, { Dispatch, SetStateAction } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
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

import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import UseAddQuote from '@/app/_hooks/useAddQuote';
import { Quote } from '@/lib/types';
import { useSession } from 'next-auth/react';
import { fetchQuotesByUser } from '@/lib/api';
import { sortByNewest } from '@/lib/utils';
import CommandQuotes from './commandQuotes';

const FormSchema = z.object({
  quote: z.string().trim().min(1).max(1000, {
    message: 'Quote must not be longer than 1000 characters.',
  }),
  author: z.string().trim().min(1).max(160, {
    message: 'Author must not be longer than 30 characters.',
  }),
  quotes: z.array(z.string()),
});

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const CreateCollectionForm = ({ setIsOpen }: Props) => {
  const { data: session, status } = useSession();
  const { addQuote } = UseAddQuote();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { toast } = useToast();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    setIsOpen(false);

    const newQuote: Quote = {
      text: data.quote,
      author: data.author,
      creator: session.user.email,
    };

    // addQuote(newQuote).then(() => {
    //   fetchQuotesByUser(session?.user)
    //     .then((res) => {
    //       setQuotes(sortByNewest(res));
    //     })
    //     .then(() => {
    //       toast({
    //         description: 'Quote added',
    //       });
    //     });
    // });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="quote"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quote</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your quote here"
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quotes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quotes</FormLabel>
              <FormControl>
                <CommandQuotes />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
