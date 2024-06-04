'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: 'default' | 'ghost';
    link: string;
  }[];
  user: {
    title: string;
    username: string;
    label?: string;
    icon: LucideIcon;
    variant: 'default' | 'ghost';
  };
}

export function Nav({ links, isCollapsed, user }: NavProps) {
  const pathname = usePathname();
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex py-2 data-[collapsed=true]:py-2 border-0 border-r border-greyborder"
    >
      <nav className="px-2 justify-between flex flex-col items-center group-[[data-collapsed=true]]:px-2 ">
        <div>
          {links.map((link, index) =>
            isCollapsed ? (
              <div key={index} className="m-1">
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link
                        href={link.link}
                        className={cn(
                          buttonVariants({
                            variant: link.variant,
                            size: 'icon',
                          }),
                          'h-9 w-9',
                          link.variant === 'default' &&
                            'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
                          pathname === link.link ? ' bg-slate-200' : ''
                        )}
                      >
                        <link.icon className="h-4 w-4" />

                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="flex items-center gap-4"
                    >
                      {link.title}
                      {link.label && (
                        <span className="ml-auto text-muted-foreground">
                          {link.label}
                        </span>
                      )}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ) : (
              <Link
                key={index}
                href="#"
                className={cn(
                  buttonVariants({ variant: link.variant, size: 'sm' }),
                  link.variant === 'default' &&
                    'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
                  'justify-start'
                )}
              >
                <link.icon className="mr-2 h-4 w-4" />

                {link.title}
                {link.label && (
                  <span
                    className={cn(
                      'ml-auto',
                      link.variant === 'default' &&
                        'text-background dark:text-white'
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </Link>
            )
          )}
        </div>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={cn(
                  buttonVariants({
                    variant: user.variant,
                    size: 'icon',
                  }),
                  'h-9 w-9',
                  user.variant === 'default' &&
                    'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                )}
              >
                <user.icon className="mb-2 h-4 w-4" />
                <span className="sr-only">{user.title}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="flex items-center gap-4">
              {user.title}
              {user.label && (
                <span className="ml-auto text-muted-foreground">
                  {user.label}
                </span>
              )}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </div>
  );
}
