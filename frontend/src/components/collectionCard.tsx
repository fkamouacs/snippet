import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BookType } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import type { Collection } from '@/lib/types';

import React from 'react';

type Props = {
  collection: Collection;
};

const CollectionCard = () => {
  return (
    <Card className=" w-full max-w-[450px]">
      <CardHeader className="m-0 ">
        <CardTitle className="font-medium text-sm flex items-center space-x-2">
          <BookType className="w-4 h-4" />
          <div>Collection name</div>
          <Badge className="font-normal text-[#A1A1A1]" variant="outline">
            Public
          </Badge>
        </CardTitle>
        <CardDescription className="text-xs">
          Collection Description
        </CardDescription>
      </CardHeader>

      <CardFooter className="text-sm space-x-2 ">
        <Badge className="font-normal text-[#A1A1A1]" variant="outline">
          Tag
        </Badge>
        <Badge className="font-normal text-[#A1A1A1]" variant="outline">
          Tag
        </Badge>
        <Badge className="font-normal text-[#A1A1A1]" variant="outline">
          Tag
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default CollectionCard;
