'use client';
import {
  ListMusic,
  Music2,
  User,
  Home,
  LibraryBig,
  Quote,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export function SmallSidebar({ source }: { source?: string }) {
  const router = useRouter();
  const className = source == 'navbar' ? '' : 'w-20 hidden lg:flex';

  const pathname = usePathname();

  const generateButtonClassname = (path: string) => {
    return pathname === path
      ? 'pt-4 pb-3 flex w-full flex-col self-center text-xs h-full px-0 bg-accent'
      : 'pt-4 pb-3 flex flex-col w-full self-center h-full text-xs px-0';
  };

  return (
    <ScrollArea className={className}>
      <div>
        <div className="py-6 ">
          <div className="self-center">
            <div className="flex flex-col items-center">
              <Button
                onClick={() => router.push('/app')}
                variant="ghost"
                size="sm"
                className={generateButtonClassname('/app')}
              >
                <Home className="h-6 w-6 mb-1" />
                Home
              </Button>
              <Button
                onClick={() => router.push('/app/quotes')}
                variant="ghost"
                size="sm"
                className={generateButtonClassname('/app/quotes')}
              >
                <Quote className="h-6 w-6 mb-1" />
                Quotes
              </Button>
              <Button
                onClick={() => router.push('/app/collections')}
                variant="ghost"
                size="sm"
                className={generateButtonClassname('/app/collections')}
              >
                <LibraryBig className="h-6 w-6 mb-1" />
                Collections
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
