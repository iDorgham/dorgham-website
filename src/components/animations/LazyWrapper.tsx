'use client';

import { Suspense, lazy, ReactNode } from 'react';
import Skeleton from './Skeleton';

interface LazyWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
}

export default function LazyWrapper({ 
  children, 
  fallback = <Skeleton height="200px" className="rounded-lg" />,
  className = ''
}: LazyWrapperProps) {
  return (
    <Suspense fallback={fallback}>
      <div className={className}>
        {children}
      </div>
    </Suspense>
  );
}

// Lazy load components
export const LazySoundCloudEmbed = lazy(() => import('../SoundCloudEmbed'));

// Higher-order component for lazy loading
export function withLazyLoading<T extends object>(
  Component: React.ComponentType<T>,
  fallback?: ReactNode
) {
  return function LazyComponent(props: T) {
    return (
      <Suspense fallback={fallback || <Skeleton height="200px" className="rounded-lg" />}>
        <Component {...props} />
      </Suspense>
    );
  };
}
