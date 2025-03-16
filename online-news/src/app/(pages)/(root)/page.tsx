import CardItems from "@/components/global/Card/CardItems";
import { fetchNews } from "../../services/NYApiHome";
import { MainCard } from "@/components/global/Card/MainCard";
import { LeftImageCard } from "@/components/global/Card/LeftImageCard";
import { CardForTwoGrid } from "@/components/global/Card/CardForTwoGrid";
import { RightImageCard } from "@/components/global/Card/RightImageCard";

export default async function Home() {
  const { results }: { results: news[] } = await fetchNews("home");

  return (
    <main className="container mx-auto px-4 py-6">
      {/* SECTION: Featured News */}
      <section className="flex flex-col lg:flex-row gap-8">
        <MainCard results={results[0]} />

        {/* SECTION: Top Stories */}
        <div className="w-full lg:w-2/4 flex flex-col gap-[15px]">
          {results.slice(1, 5).map((news, i) => (
            <LeftImageCard results={news} key={i} />
          ))}
        </div>
      </section>

      {/* SECTION: You Need to Know */}
      <section className="mt-10 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold">
            You Need to Know
          </h2>
          <p className="font-serif text-sm md:text-md text-gray-600">
            Stay updated with our Top News, bringing you the latest trends,
            insights, and developments from around the world.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.slice(6, 12).map((news, i) => (
            <CardItems key={i} items={news} />
          ))}
        </div>
      </section>

      {/* SECTION: Editor's Choice */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-10 border-b border-gray-300 pb-2">
        Editor's Choice
      </h2>
      <section className="flex flex-col lg:flex-row gap-8 mt-6">
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {results.slice(13, 19).map((news, i) => (
              <CardForTwoGrid results={news} key={i} />
            ))}
          </div>
        </div>

        {/* SECTION: For You */}
        <div className="w-full lg:w-2/4 space-y-4 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-semibold pb-4 border-b border-gray-400">
            For You
          </h2>
          {results.slice(20, 25).map((news, i) => (
            <RightImageCard results={news} key={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
