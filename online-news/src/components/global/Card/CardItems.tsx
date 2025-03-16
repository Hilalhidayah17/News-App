import moment from "moment";
import Link from "next/link";

const CardItems = ({ items }: { items: news }) => {
  return (
    <Link href={items.url}>
      <article className="border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white h-[400px]">
        <div className="relative w-full h-[200px] overflow-hidden">
          <img
            src={items?.multimedia?.[0]?.url || "/placeholder.jpg"}
            alt="image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        <div className="p-4 ">
          <p className="text-sm text-gray-500">
            {moment(items.published_date).format("LL")}
          </p>

          <h3 className="text-lg font-bold text-gray-800  transition-all">
            {items.title}
          </h3>

          {items.abstract && (
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {items.abstract}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
};

export default CardItems;
