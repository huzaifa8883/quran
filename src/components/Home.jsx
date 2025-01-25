import React, { useState, useEffect } from "react";
import FeaturesWithIcons from "./Feauturesicons";
import DynamicWelcomeSection from "./Dynamic";
import WhatWeOffer from "./Whatoffer";
import { FaExclamationCircle,FaArrowRight } from 'react-icons/fa';
import Footer from "./Footer"
import Courses from "./Courses";
const Home = () => {
  const images = [
    {
      url: "https://cdn.pixabay.com/photo/2018/05/07/04/41/ramadan-3380068_1280.jpg",
      text: "Learn Quran with Tajweed",
      description:
        "Start your journey to perfect Quran recitation with expert guidance and proper Tajweed rules.",
    },
    {
      url: "https://images.pexels.com/photos/8164742/pexels-photo-8164742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Master Quran Recitation",
      description:
        "Develop fluency in Quran recitation with interactive lessons and practice sessions.",
    },
    {
      url: "https://cdn.pixabay.com/photo/2020/04/20/20/19/prayer-5069713_1280.jpg",
      text: "Interactive Tajweed Lessons",
      description:
        "Engage in lessons designed to make learning Tajweed simple, effective, and fun.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval
  }, [images.length]);

  return (
    <>
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.text}
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}
          </div>
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute transform transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h1 className="md:text-5xl text-4xl font-bold mb-4 drop-shadow-md tracking-wide">
              {image.text}
            </h1>
            <p className="md:text-xl text-[18px] mb-6 drop-shadow-md max-w-3xl leading-relaxed">
              {image.description}
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg transform transition-transform hover:scale-105">
              Find the Courses
            </button>
          </div>
        ))}
      </div>
    </div>
    <FeaturesWithIcons />
    <DynamicWelcomeSection userType="institute"  />
    <WhatWeOffer />
    <Courses/>
    <div className="w-full px-4 md:px-8 py-10  bg-gradient-to-r from-yellow-400 via-teal-500 to-green-400 relative">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-40"></div>

  {/* Content */}
  <div className="relative text-center space-y-4 text-white w-[80%] mx-auto">
    <h2 className="text-4xl md:text-5xl font-semibold">
      Proud to be serving thousands of Muslim
    </h2>
    <p className="text-lg md:text-xl">Families around the World</p>

    {/* Join Now Button */}
    <button
      className="mt-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-3 text-lg rounded-full flex items-center justify-center space-x-3 hover:bg-gradient-to-r hover:from-teal-700 hover:to-teal-800 transition-all duration-300"
    >
      <span>Join Now</span>
      <FaArrowRight className="text-white hover:text-black transition-all duration-300" />
    </button>
  </div>
</div>

<Footer/>

    </>
  );
};

export default Home;
