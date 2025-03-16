import { Calendar } from "lucide-react";
import moment from "moment";
import Link from "next/link";

export const LeftImageCard = ({ results }: { results: news }) => {
  return (
    <Link href={results.url ? results.url : results.web_url}>
      <div className="flex gap-6 font-roboto text-[14px] border border-gray-300 p-0.5  rounded-lg">
        <div className="w-[130px] h-[90px] min-w-[130px] min-h-[90px] overflow-hidden rounded-lg aspect-[3/2]">
          <img
            src={results?.multimedia?.[0]?.url}
            alt="images"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-1 text-[12px] text-gray-500">
            <Calendar className="w-4 text-gray-400" />
            {moment(results.published_date).format(`LL`)}
          </div>
          <div className="font-medium text-[12px] text-gray-800 leading-tight">
            {results.title}
          </div>
        </div>
      </div>
    </Link>
  );
};
