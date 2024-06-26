'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
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
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';

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
  name: z.string().trim().min(1).max(160, {
    message: 'Collection name must not be longer than 30 characters.',
  }),
  description: z.string().optional(),
});

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const CreateCollectionForm = ({ setIsOpen }: Props) => {
  const { data: session, status } = useSession();
  const [currentQuotes, setCurrentQuotes] = useState<Quote[]>([]);
  const [isPublic, setIsPublic] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { toast } = useToast();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    console.log(currentQuotes);
    console.log(isPublic);
    setIsOpen(false);

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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full space-y-6 "
      >
        <div className="self-end">
          <FormField
            name="isPublic"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mr-2">Public</FormLabel>
                <FormControl>
                  <Switch
                    checked={isPublic}
                    onCheckedChange={() => setIsPublic(!isPublic)}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="quotes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Quotes</FormLabel>
              <FormControl>
                <CommandQuotes
                  currentQuotes={currentQuotes}
                  setCurrentQuotes={setCurrentQuotes}
                />
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
