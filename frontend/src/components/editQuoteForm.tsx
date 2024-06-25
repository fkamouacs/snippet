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
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';

import { Quote } from '@/lib/types';
import { useSession } from 'next-auth/react';

import { fetchQuotesByUser, editQuote } from '@/lib/api';
import { sortByNewest } from '@/lib/utils';

const FormSchema = z.object({
  quote: z.string().trim().min(1).max(1000, {
    message: 'Quote must not be longer than 1000 characters.',
  }),
  author: z.string().trim().min(1).max(160, {
    message: 'Quote must not be longer than 30 characters.',
  }),
});

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  quote: Quote;
  setQuotes: Dispatch<SetStateAction<Quote[]>>;
};

export const EditQuoteForm = ({ setIsOpen, quote, setQuotes }: Props) => {
  const { data: session, status } = useSession();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      quote: quote.text,
      author: quote.author,
    },
  });
  const { toast } = useToast();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    setIsOpen(false);

    const editedQuote: Quote = {
      _id: quote._id,
      text: data.quote,
      author: data.author,
      creator: session.user.email,
    };

    editQuote(editedQuote).then(() => {
      fetchQuotesByUser(session?.user).then((res) => {
        setQuotes(sortByNewest(res));
      });
    });
    toast({
      description: 'Quote updated',
    });
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
                  defaultValue={quote.text}
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
                <Input defaultValue={quote.author} {...field} />
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
