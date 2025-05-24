import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaShoppingBag,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 px-8 md:px-24 overflow-hidden">
      {/* Soft floating circles */}
      <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-gradient-to-tr from-purple-700 via-pink-600 to-red-500 opacity-30 blur-3xl animate-floatSlow"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-gradient-to-br from-blue-600 via-cyan-400 to-green-400 opacity-25 blur-3xl animate-floatSlow animation-delay-3000"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
        {/* Branding + text */}
        <div className="max-w-lg text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-extrabold tracking-wide mb-4">
            Zala Footwear
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Elevate your every step with shoes designed for comfort and style —
            perfect for workdays, weddings, beach days, and cozy nights at
            home. Explore the finest craftsmanship and latest trends, all in
            one place.
          </p>
        </div>

        {/* Shop Now Button */}
        <a
          href="https://example-ecommerce.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <FaShoppingBag className="mr-3 text-xl" />
          Shop Now
        </a>

        {/* Social Icons */}
        <div className="flex space-x-8 mt-8 md:mt-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="Social link"
              className="text-gray-300 hover:text-white text-2xl transition-colors"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(20px);
          }
        }
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
