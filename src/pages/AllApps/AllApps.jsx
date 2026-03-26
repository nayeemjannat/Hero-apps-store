import React, { useState, useEffect } from "react";
import AppCard from "../../components/shared/AppCard";
import appsData from "../../data/appsData.json";
import { FiSearch } from "react-icons/fi";
import Loader from "../../components/shared/Loader";

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredApps, setFilteredApps] = useState(appsData);

  useEffect(() => {
    setIsSearching(true);
    const delayDebounceFn = setTimeout(() => {
      const results = appsData.filter((app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApps(results);
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our All Applications
          </h2>
          <p className="text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Search and States */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h3 className="text-lg font-bold text-gray-800">
            ({filteredApps.length}) Apps Found
          </h3>
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] transition-colors text-black"
              placeholder="Search Apps"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* App Section */}
        {isSearching ? (
          <div className="w-full flex justify-center py-20">
            <Loader />
          </div>
        ) : filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-2xl font-semibold text-gray-600 mb-2">No App Found</p>
            <p className="text-gray-400">Try adjusting your search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;


