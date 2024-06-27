import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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

import { BookType, Trash } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import type { Collection } from '@/lib/types';

import React from 'react';
import Link from 'next/link';

type Props = {
  collection: Collection;
};

const CollectionCard = ({ collection }: Props) => {
  const displayTags = () => {
    return collection.tags.map((tag, index) => {
      return (
        <Badge
          key={index}
          className="font-normal text-[#A1A1A1]"
          variant="outline"
        >
          {tag}
        </Badge>
      );
    });
  };

  return (
    <Card className=" w-full max-w-[450px] m-2">
      <CardHeader className="m-0 ">
        <CardTitle className="font-medium text-sm flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <BookType className="w-4 h-4" />
            <Link
              href={`/app/collections/${collection._id}`}
              className="cursor-pointer"
            >
              {collection.name}
            </Link>
            <Badge className="font-normal text-[#A1A1A1]" variant="outline">
              {collection.isPublic ? 'Public' : 'Private'}
            </Badge>
          </div>
          <AlertDialog>
            <AlertDialogTrigger>
              <Trash className="cursor-pointer w-4 h-4" />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardTitle>

        <CardDescription className="text-xs">
          {collection.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="text-sm space-x-2 ">{displayTags()}</CardFooter>
    </Card>
  );
};

export default CollectionCard;
