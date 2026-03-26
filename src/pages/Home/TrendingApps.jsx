import { Link } from "react-router-dom";
import AppCard from "../../components/shared/AppCard";
import appsData from "../../data/appsData.json";

const TrendingApps = () => {
  // Get 8 apps for the trending section
  const trendingApps = appsData.slice(0, 8);

  return (
    <section className="py-20 px-4 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Trending Apps</h2>
          <p className="text-gray-500">Explore All Trending Apps on the Market developed by us</p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trendingApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center">
          <Link 
            to="/apps" 
            className="btn bg-[#8B5CF6] hover:bg-[#7C3AED] text-white border-none rounded-md px-10 py-3 h-auto min-h-0 text-base font-medium normal-case"
          >
            Show All
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TrendingApps;
