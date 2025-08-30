import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load heavy components
const WorldMapDemo = lazy(() => import('@/components/ui/world-map-demo').then(module => ({ default: module.WorldMapDemo })));
const Timeline = lazy(() => import('@/components/ui/timeline').then(module => ({ default: module.Timeline })));
const RadialTimelineDemo = lazy(() => import('@/components/ui/radial-timeline-demo'));
const WorldMap = lazy(() => import('@/components/ui/world-map').then(module => ({ default: module.WorldMap })));

// Loading fallbacks
const WorldMapSkeleton = () => (
  <div className="w-full h-[600px] bg-muted animate-pulse rounded-lg flex items-center justify-center">
    <div className="text-center">
      <Skeleton className="h-8 w-48 mx-auto mb-4" />
      <Skeleton className="h-4 w-64 mx-auto" />
    </div>
  </div>
);

const TimelineSkeleton = () => (
  <div className="space-y-8">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="flex gap-4">
        <Skeleton className="h-12 w-12 rounded-full shrink-0" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    ))}
  </div>
);

// Wrapped lazy components with error boundaries
export const LazyWorldMapDemo = () => (
  <Suspense fallback={<WorldMapSkeleton />}>
    <WorldMapDemo />
  </Suspense>
);

export const LazyTimeline = ({ data }: { data: any[] }) => (
  <Suspense fallback={<TimelineSkeleton />}>
    <Timeline data={data} />
  </Suspense>
);

export const LazyRadialTimelineDemo = () => (
  <Suspense fallback={<TimelineSkeleton />}>
    <RadialTimelineDemo />
  </Suspense>
);

export const LazyWorldMap = ({ centralHub, dots }: { centralHub: any; dots: any[] }) => (
  <Suspense fallback={<WorldMapSkeleton />}>
    <WorldMap centralHub={centralHub} dots={dots} />
  </Suspense>
);