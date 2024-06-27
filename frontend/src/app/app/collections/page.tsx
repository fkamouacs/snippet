'use client';
import { useState, useEffect } from 'react';

import CollectionCard from '@/components/collectionCard';
import { CreateCollectionDialog } from '@/components/createCollectionDialog';
import { fetchCollectionsByUser } from '@/lib/api';
import { useSession } from 'next-auth/react';

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session)
      fetchCollectionsByUser(session?.user).then((res) => {
        setCollections(res);
      });
  }, [session]);

  const displayCollections = () => {
    return collections.map((collection) => {
      return <CollectionCard key={collection._id} collection={collection} />;
    });
  };

  return (
    <div className="w-full flex flex-col items-center m-4">
      <div className="max-w-[1150px] w-full">
        <div className="flex justify-between">
          <h1>Your Collections</h1>

          <CreateCollectionDialog setCollections={setCollections} />
        </div>

        <div className="mt-2 flex flex-wrap justify-center md:justify-normal">
          {displayCollections()}
        </div>
      </div>
    </div>
  );
};

export default Collections;
