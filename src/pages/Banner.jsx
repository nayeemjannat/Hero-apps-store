const Banner = () => {
  return (
    <section className="pt-16 pb-0 px-4 flex flex-col items-center text-center bg-white">
      {/* 1. Heading Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        We Build <br className="hidden md:block" />
        <span className="text-[#8B5CF6]">Productive</span> Apps
      </h1>

      {/* 2. Description Text */}
      <p className="text-gray-500 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
        Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>

      {/* 3. Buttons Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {/* Google Play Button */}
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-white border border-gray-200 shadow-sm hover:border-gray-300 hover:bg-gray-50 rounded-full px-6 flex items-center gap-2 h-12 normal-case text-gray-700 text-base font-semibold"
        >
          <img src="https://img.icons8.com/color/48/google-play.png" alt="Google Play" className="w-6 h-6" />
          Google Play
        </a>

        {/* App Store Button */}
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-white border border-gray-200 shadow-sm hover:border-gray-300 hover:bg-gray-50 rounded-full px-6 flex items-center gap-2 h-12 normal-case text-gray-700 text-base font-semibold"
        >
          <img src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="App Store" className="w-6 h-6" />
          App Store
        </a>
      </div>
      {/* {mobile image from assets} */}
      <div className="relative max-w-[600px] w-full mx-auto mt-4 px-4">
        <img
          src="./src/assets/hero.png"
          alt="Productive App Mockup"
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Banner;