'use client';
import React from 'react';

import CollectionCard from '@/components/collectionCard';
import { CreateCollectionDialog } from '@/components/createCollectionDialog';

const Collections = () => {
  const displayCollections = () => {
    return <CollectionCard />;
  };
  return (
    <div className="w-full flex flex-col items-center m-4">
      <div className="max-w-[1150px] w-full">
        <div className="flex justify-between">
          <h1>Your Collections</h1>
          <CreateCollectionDialog />
        </div>

        <div className="mt-2">{displayCollections()}</div>
      </div>
    </div>
  );
};

export default Collections;
