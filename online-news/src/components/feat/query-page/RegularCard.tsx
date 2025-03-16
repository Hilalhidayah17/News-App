import { Calendar, UserRound } from "lucide-react";
import moment from "moment";

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

export const RegularCard = ({ result }: { result: NewsQuery }) => {
  return (
    <article className="bg-white font-serif space-y-4 border-b border-gray-300 rounded-md shadow-sm h-[370px]">
      <div className="overflow-hidden rounded-lg">
        <img
          src={`${baseUrl}${result?.multimedia?.[0]?.url}`}
          alt="images"
          className="w-full h-[200px] object-cover rounded-lg"
        />
      </div>
      <div className="space-y-2 px-4 py-2">
        <h3 className="text-lg font-semibold">{result.headline.main}</h3>
        <div className="flex gap-6 text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 text-gray-400" />
            {moment(result.published_date).format(`LL`)}
          </div>
          <div className="flex items-center gap-1">
            <UserRound className="w-4 text-gray-400" />
            {result.byline?.original || "Unknown"}
          </div>
        </div>
      </div>
    </article>
  );
};
