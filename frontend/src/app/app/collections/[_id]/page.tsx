'use client';
import { useState, useEffect } from 'react';

import { usePathname } from 'next/navigation';
import { fetchCollectionsByID } from '@/lib/api';

const Collection = () => {
  const [collection, setCollection] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    fetchCollectionsByID(getURLID()).then((res) => {
      setCollection(res);
    });
  }, []);

  const getURLID = () => {
    let pathSplitArr = pathname.split('/');
    return pathSplitArr[pathSplitArr.length - 1];
  };

  return <div>{getURLID()}</div>;
};

export default Collection;
