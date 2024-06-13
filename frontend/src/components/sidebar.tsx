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

export function Sidebar({ source }: { source?: string }) {
  const router = useRouter();
  const className = source == 'navbar' ? '' : 'w-72 hidden lg:flex';

  const pathname = usePathname();

  const generateButtonClassname = (path: string) => {
    return pathname === path
      ? 'w-full justify-start text-sm min-h-10 bg-accent'
      : 'w-full justify-start text-sm min-h-10';
  };

  return (
    <ScrollArea className={className}>
      <div>
        <div className="py-3 ">
          <div className="px-3 pb-4">
            <div className="space-y-1 ">
              <Button
                onClick={() => router.push('/app')}
                variant="ghost"
                size="sm"
                className={generateButtonClassname('/app')}
              >
                <Home className="mr-6 h-6 w-6" />
                Home
              </Button>
              <Button
                onClick={() => router.push('/app/quotes')}
                variant="ghost"
                size="sm"
                className={generateButtonClassname('/app/quotes')}
              >
                <Quote className="mr-6 h-6 w-6" />
                Quotes
              </Button>
              <Button
                onClick={() => router.push('/app/collections')}
                variant="ghost"
                size="sm"
                className={generateButtonClassname('/app/collections')}
              >
                <LibraryBig className="mr-6 h-6 w-6" />
                Collections
              </Button>
            </div>
          </div>
          <Separator />
          <div className="px-3 py-4">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
              Collections
            </h2>
            <div className="space-y-1">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-sm min-h-10"
              >
                <ListMusic className="mr-6 h-6 w-6" />
                Playlists
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-sm min-h-10"
              >
                <Music2 className="mr-6 h-6 w-6" />
                Songs
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-sm min-h-10"
              >
                <User className="mr-6 h-6 w-6" />
                Made for You
              </Button>
            </div>
          </div>
          <Separator />
          <div className="px-3 py-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-xs min-h-8"
            >
              <Settings className="mr-5 h-5 w-5" />
              Settings
            </Button>
            <Button
              onClick={() =>
                window.open('https://github.com/fkamouacs/snippet', '_blank')
              }
              variant="ghost"
              size="sm"
              className="w-full justify-start text-xs min-h-10"
            >
              <svg
                className="mr-5 h-5 w-5"
                width="24"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Github
            </Button>
            {/* <ScrollArea className="h-[300px] px-2">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist) => (
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start font-normal"
                >
                  <ListMusic className="mr-2 h-4 w-4" />
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea> */}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
