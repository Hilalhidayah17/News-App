import { Calendar, UserRound } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

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

const baseUrl = "https://static01.nyt.com/";
export const MainCardQuery = ({ results }: { results: NewsQuery }) => {
  return (
    <div className="relative rounded-lg overflow-hidden w-full sm:w-3/4 lg:w-3/4">
      <Link href={results.web_url}>
        <div className="absolute top-0 w-full h-1/5 bg-gradient-to-b from-black/80 to-transparent"></div>

        <Image
          src={`${baseUrl}${results?.multimedia?.[0]?.url}`}
          alt="images"
          className="w-full h-auto object-cover rounded-lg"
          width={500}
          height={500}
        />

        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent"></div>

        <div className="absolute bottom-0 font-serif space-y-2 sm:space-y-3 px-4 sm:px-6 py-3 sm:py-4">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight">
            {results.headline.main}
          </h2>

          <p className="text-white text-xs sm:text-sm md:text-md leading-relaxed">
            {results.abstract}
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs sm:text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <Calendar className="w-4" />
              {moment(results.published_date).format(`LL`)}
            </div>

            <div className="flex items-center gap-1">
              <UserRound className="w-4" />
              {results.byline?.original}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
