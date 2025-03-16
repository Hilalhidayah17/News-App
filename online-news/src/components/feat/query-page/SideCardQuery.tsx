import { Calendar } from "lucide-react";
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
export const SideCardQuery = ({ result }: { result: NewsQuery }) => {
  return (
    <Link href={result.web_url}>
      <div className="flex gap-6 font-roboto text-[14px] border border-gray-300 p-0.5  rounded-lg">
        <div className="w-[120px] h-[90px] min-w-[120px] min-h-[90px] overflow-hidden rounded-lg aspect-[3/2]">
          <Image
            src={`${baseUrl}${result?.multimedia?.[0]?.url}`}
            alt="images"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-1 text-[12px] text-gray-500">
            <Calendar className="w-4 text-gray-400" />
            {moment(result.published_date).format(`LL`)}
          </div>
          <div className="font-medium  text-gray-800 leading-tight">
            {result.headline.main}
          </div>
        </div>
      </div>
    </Link>
  );
};
