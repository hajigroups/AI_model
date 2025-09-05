import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Intro */}
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
            <span>🏡</span>
            <span>House Price AI</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Predict your house price with AI.  
            Making property buying & selling easier, faster, and more accurate.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="/predictor" className="hover:text-blue-400 transition">Predictor</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">📍 D.I.Khan, Pakistan</p>
          <p className="text-gray-400 text-sm">📧 support@housepriceai.com</p>
          <p className="text-gray-400 text-sm">📞 +92 3489486246</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-blue-400">🌐</a>
            <a href="#" className="hover:text-blue-400">🐦</a>
            <a href="#" className="hover:text-blue-400">📘</a>
            <a href="#" className="hover:text-blue-400">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} House Price AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
