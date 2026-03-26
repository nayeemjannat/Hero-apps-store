import { Link } from "react-router-dom";
import { FaStar, FaDownload } from "react-icons/fa";

const AppCard = ({ app }) => {
  return (
    <Link
      to={`/app-details/${app.id}`}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col items-center hover:shadow-md transition-shadow duration-300 group"
    >
      {/* App Image */}
      <div className="w-full aspect-square bg-gray-200 rounded-xl mb-4 overflow-hidden flex items-center justify-center relative">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/200?text=No+Image";
          }}
        />
      </div>

      {/* App Title */}
      <h3 className="text-[15px] font-bold text-gray-800 text-center line-clamp-1 mb-3 w-full">
        {app.title}
      </h3>

      {/* Downloads & Rating */}
      <div className="flex justify-between items-center w-full gap-2">
        {/* Downloads */}
        <div className="flex items-center gap-1.5 bg-green-50 text-green-600 px-3 py-1.5 rounded-lg font-medium text-xs">
          <FaDownload />
          <span>{app.downloads >= 1000000 ? `${app.downloads / 1000000}M` : `${app.downloads / 1000}K`}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 bg-orange-50 text-orange-500 px-3 py-1.5 rounded-lg font-medium text-xs">
          <FaStar />
          <span>{app.ratingAvg}</span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
