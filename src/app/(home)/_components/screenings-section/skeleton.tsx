import React from "react";

const SKELETON_CARD_COUNT = 6;

const SkeletonCard = () => (
  <li className="flex flex-col animate-pulse">
    <div className="w-full aspect-2/3 bg-white/5 border border-white/10" />
    <div className="flex flex-col gap-2 pt-4">
      <div className="h-5 w-3/4 bg-white/10 rounded" />
      <div className="h-4 w-1/2 bg-white/5 rounded" />
      <div className="h-4 w-full bg-white/5 rounded" />
    </div>
  </li>
);

const ScreeningsSectionSkeleton = () => (
  <section id="seanse" className="bg-black px-8 py-16 min-h-screen">
    <div className="max-w-[1400px] mx-auto">
      <div className="flex flex-col gap-10">
        {/* Header skeleton */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="h-8 w-48 bg-white/10 rounded animate-pulse" />
            <div className="h-10 w-56 bg-white/5 rounded animate-pulse" />
          </div>

          <div className="flex flex-col gap-3">
            <div className="h-4 w-12 bg-white/10 rounded animate-pulse" />
            <div className="flex gap-2">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="h-10 w-20 bg-white/5 rounded animate-pulse"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="h-4 w-16 bg-white/10 rounded animate-pulse" />
            <div className="flex gap-2 flex-wrap">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-24 bg-white/5 rounded-full animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Cards grid skeleton */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8 list-none">
          {Array.from({ length: SKELETON_CARD_COUNT }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ScreeningsSectionSkeleton;
