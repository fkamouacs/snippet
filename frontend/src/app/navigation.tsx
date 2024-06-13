'use client';
import React from 'react';
import { Sidebar } from '@/components/sidebar';
import { SmallSidebar } from '@/components/smallSidebar';
import Navbar from '../components/navbar';
import type { User } from '@/lib/types';
import { useState } from 'react';

interface IProps {
  children: React.ReactNode;
  user: User;
}

export default function Navigation({ children, user }: IProps) {
  const [displaySmallNav, setDisplaySmallNav] = useState(false);

  return (
    <>
      <Navbar
        user={user}
        displaySmallNav={displaySmallNav}
        setDisplaySmallNav={setDisplaySmallNav}
      />
      <div className="flex h-full overflow-auto">
        {displaySmallNav ? <SmallSidebar /> : <Sidebar />}
        <div className=" flex self-center justify-center w-full h-full">
          {children}
        </div>
      </div>
    </>
  );
}
