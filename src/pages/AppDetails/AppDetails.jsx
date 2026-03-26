import React, { useState } from "react";
import { useParams } from "react-router-dom";
import appsData from "../../data/appsData.json";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import downloads from "../../assets/icon-downloads.png"
import rating from "../../assets/icon-ratings.png"
import review from "../../assets/icon-review.png"
const AppDetails = () => {
  const { id } = useParams();
  const app = appsData.find((app) => app.id === parseInt(id));
  const [isInstalled, setIsInstalled] = useState(false);

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">App Not Found</h2>
        <p className="text-gray-500">The application you are looking for does not exist or has been removed.</p>
      </div>
    );
  }

  const handleInstall = () => {
    setIsInstalled(true);
    toast.success(`${app.title} installed successfully!`, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  // Recharts displays

  const chartData = [...app.ratings].reverse();

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 px-4">
      <ToastContainer />
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">

        {/* App Information Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start border-b border-gray-100 pb-10">

          {/* App Image */}
          <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-200">
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/200?text=No+Image";
              }}
            />
          </div>

          {/* Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 w-full">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{app.title}</h1>
            <p className="text-[#8B5CF6] font-medium mb-6">Developed by {app.companyName.toLowerCase().replace(/ /g, "")}.io</p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-8 w-full">
              <div className="flex flex-col items-center md:items-start">
                <img src={downloads} alt="downloads" className="text-green-500 text-xl mb-2" />
                <span className="text-gray-500 text-sm">Downloads</span>
                <span className="text-2xl font-bold text-gray-900">
                  {app.downloads >= 1000000 ? `${app.downloads / 1000000}M` : `${app.downloads / 1000}K`}
                </span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <img src={rating} alt="rating" className="text-orange-400 text-xl mb-2" />
                <span className="text-gray-500 text-sm">Average Ratings</span>
                <span className="text-2xl font-bold text-gray-900">{app.ratingAvg}</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <img src={review} alt="review" className="text-[#8B5CF6] text-xl mb-2" />
                <span className="text-gray-500 text-sm">Total Reviews</span>
                <span className="text-2xl font-bold text-gray-900">
                  {app.reviews >= 1000 ? `${app.reviews / 1000}K` : app.reviews}
                </span>
              </div>
            </div>

            {/* Install Button */}
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`px-8 py-3 rounded-md font-medium text-white transition-colors duration-300 w-full md:w-auto ${isInstalled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00D99A] hover:bg-[#00B983]"
                }`}
            >
              {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>

        {/* Ratings Chart Section */}
        <div className="py-10 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-8">Ratings</h3>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 14 }}
                />
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar
                  dataKey="count"
                  fill="#F97316"
                  radius={[0, 4, 4, 0]}
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Description Section */}
        <div className="pt-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {app.description}
            {"\n\n"}
            This app takes the proven techniques and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm.
            {"\n\n"}
            A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific session, making your schedule more structured. The built-in analytics show not only how much time you've worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AppDetails;


