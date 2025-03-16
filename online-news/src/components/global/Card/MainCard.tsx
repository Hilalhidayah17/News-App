import { Calendar, UserRound } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export const MainCard = ({ results }: { results: news }) => {
  return (
    <div className="w-full">
      <Link href={results.url}>
        <div className="relative rounded-lg overflow-hidden">
          {/* Overlay Atas */}
          <div className="absolute top-0 w-full h-1/5 bg-gradient-to-b from-black/80 to-transparent"></div>

          {/* Gambar */}
          <Image
            src={results?.multimedia?.[0]?.url || "/placeholder.jpg"}
            alt="images"
            className="w-full h-[250px] sm:h-[350px] md:h-auto object-cover rounded-lg"
          />

          {/* Overlay Bawah */}
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent"></div>

          {/* Teks Overlay */}
          <div className="absolute bottom-0 font-serif space-y-2 px-4 sm:px-6 py-3 sm:py-4">
            <h2 className="text-xl sm:text-3xl md:text-4xl text-white font-bold leading-snug">
              {results.title}
            </h2>
            <p className="text-white text-sm sm:text-md leading-relaxed">
              {results.abstract}
            </p>

            {/* Info Tambahan */}
            <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-1">
                <Calendar className="w-4" />
                {moment(results.published_date).format(`LL`)}
              </div>
              <div className="flex items-center gap-1">
                <UserRound className="w-4" />
                {results.byline}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
