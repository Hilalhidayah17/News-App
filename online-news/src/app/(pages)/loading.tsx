import React from "react";
export default function Loading() {
  return (
    <>
      <header className="pt-6 pb-3">
        <div className="h-8 w-1/2 bg-gray-200 animate-pulse mx-auto rounded"></div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* SECTION: Featured Story Skeleton */}
        <section className="flex flex-col lg:flex-row gap-8">
          {/* Skeleton untuk MainCardQuery */}
          <div className="relative rounded-lg overflow-hidden w-full lg:w-3/4">
            <div className="w-full h-[300px] bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent"></div>
            <div className="absolute bottom-0 font-serif space-y-3 px-6 py-4">
              <div className="h-6 w-3/4 bg-gray-300 animate-pulse rounded"></div>
              <div className="h-4 w-1/2 bg-gray-300 animate-pulse rounded"></div>
              <div className="flex gap-6 text-sm">
                <div className="h-4 w-20 bg-gray-300 animate-pulse rounded"></div>
                <div className="h-4 w-32 bg-gray-300 animate-pulse rounded"></div>
              </div>
            </div>
          </div>

          {/* Skeleton untuk SideCardQuery */}
          <div className="w-full lg:w-2/4 flex flex-col gap-[20px]">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex gap-6 border border-gray-300 p-2 rounded-lg"
              >
                <div className="w-[120px] h-[90px] bg-gray-200 animate-pulse rounded-lg"></div>
                <div className="flex flex-col space-y-2 w-full">
                  <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded"></div>
                  <div className="h-3 w-1/2 bg-gray-200 animate-pulse rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: Other Stories Skeleton */}
        <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white border-b border-gray-300 rounded-md shadow-sm h-[370px]"
            >
              <div className="w-full h-[200px] bg-gray-200 animate-pulse rounded-lg"></div>
              <div className="space-y-2 px-4 py-2">
                <div className="h-5 w-3/4 bg-gray-200 animate-pulse rounded"></div>
                <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded"></div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
