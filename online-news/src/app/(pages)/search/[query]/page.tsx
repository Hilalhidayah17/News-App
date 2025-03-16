import { fetchNewsQuery } from "@/app/services/NYApiSearch";
import { generateMetadataWrapper } from "@/app/utils/generateMetadata";
import { MainCardQuery } from "@/components/feat/query-page/MainCard";
import { RegularCard } from "@/components/feat/query-page/RegularCard";
import { SideCardQuery } from "@/components/feat/query-page/SideCardQuery";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ query: string }>;
};
interface NewsQuery {
  abstract: string;
  multimedia?: { url: string }[];
  published_date?: string;
  headline: { main: string };
  url: string;
  web_url: string;
  section?: string;
  byline?: { original: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { query } = await params;
  return generateMetadataWrapper(query);
}

export default async function query({
  params,
}: {
  params: Promise<{ query: string }>;
}) {
  const { query } = await params;
  const results = await fetchNewsQuery(query);

  return (
    <>
      <header className="pt-6 pb-3">
        <h1 className="font-serif text-3xl container mx-auto px-4 underline-offset-4 underline decoration-pink-500">
          {`Results For: ${query}`}
        </h1>
      </header>
      <main className="container mx-auto px-4 py-6">
        {/* SECTION: Featured Story */}
        <section className="flex flex-col lg:flex-row gap-8">
          <MainCardQuery results={results[0]} />

          {/* SECTION: Top Stories */}
          <div className="w-full lg:w-2/4 flex flex-col gap-5">
            {results.slice(1, 5).map((result: NewsQuery, i: number) => (
              <SideCardQuery result={result} key={i} />
            ))}
          </div>
        </section>

        {/* SECTION: Other Stories */}
        <section className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {results.slice(6, 12).map((result: NewsQuery, i: number) => (
              <Link href={result.web_url} key={i}>
                <RegularCard result={result} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
