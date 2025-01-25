import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-200 bg-gray-800 title">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
          <div className="flex items-center px-4 mb-4 sm:px-10">
          <img
            src="https://themazine.com/newwp/alquran/wp-content/uploads/2023/12/logo.svg"
            className="h-7 w-auto max-w-full"
            alt="Logo"
          />
        </div>
            <p className="text-gray-400 mb-2">58 Howard Street #2, Cairo.</p>
            <p className="text-gray-400 mb-2">CA 941</p>
            <p className="text-gray-400 mb-4">(+88) 311-2121101</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-teal-500 text-gray-800 rounded-full hover:bg-teal-400"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-3 bg-teal-500 text-gray-800 rounded-full hover:bg-teal-400"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-3 bg-teal-500 text-gray-800 rounded-full hover:bg-teal-400"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-3 bg-teal-500 text-gray-800 rounded-full hover:bg-teal-400"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-teal-400">Links</h2>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-teal-300">About Us</li>
              <li className="text-gray-400 hover:text-teal-300">Faq’s</li>
              <li className="text-gray-400 hover:text-teal-300">Events</li>
              <li className="text-gray-400 hover:text-teal-300">Courses</li>
              <li className="text-gray-400 hover:text-teal-300">Blog Classic</li>
              <li className="text-gray-400 hover:text-teal-300">Contact</li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-teal-400">
              Other Links
            </h2>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-teal-300">Services</li>
              <li className="text-gray-400 hover:text-teal-300">Scholars</li>
              <li className="text-gray-400 hover:text-teal-300">Price</li>
              <li className="text-gray-400 hover:text-teal-300">Prayer Time</li>
              <li className="text-gray-400 hover:text-teal-300">Record Class</li>
              <li className="text-gray-400 hover:text-teal-300">Our Blog</li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-gray-400 text-lg">
            Don’t miss updates from us. Subscribe to our newsletter.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-l-lg text-gray-800 bg-gray-200 border border-gray-400 focus:outline-none"
            />
            <button className="p-3 bg-teal-500 text-gray-800 font-semibold rounded-r-lg hover:bg-teal-400">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            All rights reserved 2024 © TheMazine
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:underline text-teal-400">
              ABOUT US
            </a>
            <a href="#" className="hover:underline text-teal-400">
              FAQ’S
            </a>
            <a href="#" className="hover:underline text-teal-400">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
