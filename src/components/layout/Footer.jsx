import { FaFacebook, FaLinkedin, FaDribbble, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B1E36] text-white pt-16 pb-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700 pb-12 mb-8">
          
          {/* Column 1: Logo & About */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold tracking-tight">HERO.IO</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building the future of digital experiences with precision and passion. Join us on our journey to excellence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-white font-semibold mb-5">Support</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 4: Socials & Newsletter */}
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-all">
                  <FaDribbble className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 transition-all">
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 transition-all">
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-sky-400 transition-all">
                  <FaTwitter className="w-4 h-4" />
                </a>
              </div>
            </div>
            {/* Simple Newsletter field for aesthetic look */}
            <div className="relative">
                <input 
                    type="email" 
                    placeholder="Subscribe to newsletter" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-xs focus:outline-none focus:border-blue-500 transition-all"
                />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>Copyright © 2026 - All right reserved by <span className="text-white font-medium">HERO.IO</span></p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;