import { FaBookmark, FaEye, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { GoBookmark } from "react-icons/go";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    rating,
    total_view,
    details,
    tags,
  } = news;

  return (
    <div className="bg-white rounded shadow-md overflow-hidden transition hover:shadow-lg duration-300 border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-base-300">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        <button className="text-gray-700 flex gap-3 cursor-pointer">
          <GoBookmark size={22} />
          <FaShareAlt size={18} />
        </button>
      </div>

      {/* Title */}
      <div className="px-5 mt-3">
        <h2 className="font-bold text-xl text-gray-900 leading-relaxed hover:text-blue-600 cursor-pointer">
          {title}
        </h2>
      </div>

      {/* Image */}
      <div className="px-5 mt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="px-5 mt-4 text-gray-600 text-base leading-relaxed">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <button className="text-orange-600 font-semibold ml-1 hover:underline">
              Read More
            </button>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="px-5">
        <div className="flex items-center justify-between py-4 border-t border-gray-300 mt-4">
        <div className="flex items-center gap-1 text-orange-500">
          {Array.from({ length: 5 }, (_, i) => (
            <AiFillStar
              key={i}
              className={i < rating.number ? "text-orange-500" : "text-gray-300"}
            />
          ))}
          <span className="ml-2 text-gray-700 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NewsCard;
