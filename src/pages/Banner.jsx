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
          {/* Google Play Icon (SVG) */}
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.383-1.12V2.934c0-.441.139-.844.382-1.12z" />
            <path fill="#EA4335" d="M19.49 10.366l-5.698-3.26L13.792 12l1.626 1.626 4.071-2.33c.633-.362.633-1.568.001-1.93z" />
            <path fill="#FBBC04" d="M3.609 1.814c.245-.278.636-.44 1.082-.44.25 0 .493.056.711.161l8.39 4.798L13.792 12 3.609 1.814z" />
            <path fill="#34A853" d="M3.61 22.186L13.792 12l-2.008-2.008-7.094 4.058a1.96 1.96 0 0 0-.71.162c-.446 0-.837-.162-1.082-.44l.712.414z" />
          </svg>
          Google Play
        </a>

        {/* App Store Button */}
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-white border border-gray-200 shadow-sm hover:border-gray-300 hover:bg-gray-50 rounded-full px-6 flex items-center gap-2 h-12 normal-case text-gray-700 text-base font-semibold"
        >
          {/* Apple Logo Icon (SVG) */}
          <svg viewBox="0 0 384 512" className="w-6 h-6" fill="currentColor">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>
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