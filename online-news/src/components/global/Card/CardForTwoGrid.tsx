import { Calendar, UserRound } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export const CardForTwoGrid = ({ results }: { results: news }) => {
  return (
    <article className="bg-white font-serif space-y-4 border-b border-gray-300 rounded-md">
      <Link href={results.url}>
        <div>
          <Image
            src={results.multimedia?.[0].url || "/placeholder.jpg"}
            alt="images"
            width={500}
            height={500}
            className="rounded-lg w-full h-[200px] object-cover"
          />
        </div>
        <div className="space-y-2 px-2">
          <h3 className="text-lg font-semibold">{results.title}</h3>
          <div className="flex gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 text-gray-400" />
              {moment(results.published_date).format(`LL`)}
            </div>
            <div className="flex items-center gap-1">
              <UserRound className="w-4 text-gray-400" />
              {results.byline}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
