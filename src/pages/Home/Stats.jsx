const Stats = () => {
  return (
    <section className="bg-[#8B5CF6] py-16 px-4 pb-20 mt-0 w-full text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Trusted By Millions, Built For You</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
        
        {/* Stat 1 */}
        <div className="flex flex-col items-center pt-8 md:pt-0 px-4">
          <p className="text-sm text-white/80 mb-2 font-medium">Total Downloads</p>
          <h3 className="text-5xl md:text-6xl font-bold mb-3">29.6M</h3>
          <p className="text-xs text-white/70">21% More Than Last Month</p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center pt-8 md:pt-0 px-4">
          <p className="text-sm text-white/80 mb-2 font-medium">Total Reviews</p>
          <h3 className="text-5xl md:text-6xl font-bold mb-3">906K</h3>
          <p className="text-xs text-white/70">46% More Than Last Month</p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center pt-8 md:pt-0 px-4">
          <p className="text-sm text-white/80 mb-2 font-medium">Active Apps</p>
          <h3 className="text-5xl md:text-6xl font-bold mb-3">132+</h3>
          <p className="text-xs text-white/70">31 More Will Launch</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;
