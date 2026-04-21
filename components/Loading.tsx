'use client';

import LoadingBar from './LoadingBar';
import { useLoading } from '@/components/LoadingProvider';

export default function Loading() {
  const { setIsLoading } = useLoading();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <LoadingBar
        duration={2200}
        target={100}
        onComplete={() => setIsLoading(false)}
      />
    </div>
  );
}