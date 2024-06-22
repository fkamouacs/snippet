'use client';
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iEOJ3UhOd4C
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { SquareScissors } from 'lucide-react';

import { redirect, useRouter } from 'next/navigation';

import type { User } from '@/lib/types';
import { UserNav } from '@/components/userNav';
import { Sidebar } from '@/components/sidebar';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  user?: User | null;
  setDisplaySmallNav: Dispatch<SetStateAction<boolean>>;
  displaySmallNav: boolean;
}

export default function Component({
  user,
  setDisplaySmallNav,
  displaySmallNav,
}: IProps) {
  const router = useRouter();
  return (
    <header className="flex h-14 w-full shrink-0 items-center px-4  justify-between">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="lg:hidden mr-6">
              <MenuIcon />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Sidebar source="navbar" />
          </SheetContent>
        </Sheet>

        <Button
          onClick={() => setDisplaySmallNav(!displaySmallNav)}
          variant="ghost"
          size="icon"
          className="mr-6 hidden lg:flex"
        >
          <MenuIcon />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
        <Link href="/" className="mr-6 lg:flex" prefetch={false}>
          <SquareScissors />
          <span className="sr-only">Snippet</span>
        </Link>
      </div>

      {user ? (
        <UserNav user={user} />
      ) : (
        <Button onClick={() => router.push('/login')}>Sign In</Button>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
