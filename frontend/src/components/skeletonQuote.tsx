import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonQuote() {
  return (
    <div className="flex flex-col items-center space-y-3">
      <Skeleton className="h-4 w-[450px]" />
      <Skeleton className="h-4 w-[450px]" />
      <div className="space-y-4">
        <Skeleton className="h-4 w-[150px]" />
        <div className="h-4"></div>
      </div>
    </div>
  );
}
