import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaQuran,
  FaMosque,
  FaArrowRight,
  FaHeart
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-200">
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/islamic-pattern.png')] opacity-[0.02]"></div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <img
                src="https://themazine.com/newwp/alquran/wp-content/uploads/2023/12/logo.svg"
                className="h-8 w-auto"
                alt="Logo"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Dedicated to spreading Islamic knowledge and understanding through quality education and spiritual guidance.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
                { icon: <FaTwitter />, color: "hover:bg-sky-500" },
                { icon: <FaInstagram />, color: "hover:bg-pink-600" },
                { icon: <FaLinkedinIn />, color: "hover:bg-blue-700" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`p-3 bg-gray-800 text-gray-300 rounded-lg ${social.color} hover:text-white transition-all duration-300 transform hover:-translate-y-1`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <FaQuran className="mr-2 text-emerald-500" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["About", , "Courses", "Contact","Home"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                    <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <FaMosque className="mr-2 text-emerald-500" />
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-emerald-500 mt-1" />
                <span className="text-gray-400">58 Howard Street #2, Cairo, CA 941</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-emerald-500" />
                <span className="text-gray-400">(+88) 311-2121101</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-emerald-500" />
                <span className="text-gray-400">contact@quranacademy.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-6">Subscribe to receive updates and news about our courses.</p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
              />
              <button className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center space-x-2 group">
                <span>Subscribe</span>
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            Made with <FaHeart className="inline-block text-emerald-500 mx-1" /> by TheMazine © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;