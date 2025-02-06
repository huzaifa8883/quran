import React, { useState, useEffect } from "react";
import FeaturesWithIcons from "./Feauturesicons";
import DynamicWelcomeSection from "./Dynamic";
import WhatWeOffer from "./Whatoffer";
import { FaExclamationCircle,FaArrowRight } from 'react-icons/fa';
import Footer from "./Footer"
import Courses from "./Courses";
import IslamicCTA from "./IslamCta";
import {Link} from "react-router-dom"
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
<div className="relative h-[600px] w-full overflow-hidden bg-gradient-to-b from-[#0d1117] to-[#1a1f2c]">
  {/* Image Slider */}
  <div className="absolute inset-0">
    {images.map((image, index) => (
      <div
        key={index}
        className={`absolute inset-0 w-full h-full transition-all duration-1500 ease-out ${
          index === currentIndex 
            ? "opacity-100 scale-100 blur-0" 
            : "opacity-0 scale-110 blur-sm"
        }`}
      >
        <img
          src={image.url}
          alt={image.text}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
    ))}
  </div>

  {/* Content Container */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
    {images.map((image, index) => (
      <div
        key={index}
        className={`absolute w-full transform transition-all duration-1000 ease-out ${
          index === currentIndex
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* Simple Top Divider */}
        <div className="flex justify-center items-center mb-8">
          <div className="w-20 h-[1px] bg-[#c3a45d]/50"></div>
          <div className="mx-4 text-[#c3a45d] text-2xl">●</div>
          <div className="w-20 h-[1px] bg-[#c3a45d]/50"></div>
        </div>

        {/* Title */}
        <h1 
          className="md:text-6xl text-4xl font-normal mb-6 text-white"
          style={{
            fontFamily: "'Amiri', serif",
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          {image.text}
        </h1>

        {/* Description */}
        <p 
          className="md:text-xl text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-white/90"
          style={{
            fontFamily: "'Noto Naskh Arabic', serif"
          }}
        >
          {image.description}
        </p>

<Link to="/contact">
        {/* Elegant Button */}
        <button className="group relative overflow-hidden bg-gradient-to-r from-[#c3a45d] to-[#d4b76e] hover:cursor-pointer text-white px-10 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c3a45d]/20">
          <span className="relative z-10">Find the Courses</span>
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-white opacity-20 group-hover:animate-shine" />
        </button>
        </Link>
        {/* Simple Bottom Divider */}
        <div className="flex justify-center items-center mt-8">
          <div className="w-20 h-[1px] bg-[#c3a45d]/50"></div>
          <div className="mx-4 text-[#c3a45d] text-2xl">●</div>
          <div className="w-20 h-[1px] bg-[#c3a45d]/50"></div>
        </div>
      </div>
    ))}
  </div>

  {/* Simple Navigation */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-30">
    {images.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCurrentIndex(idx)}
        className={`transition-all duration-300 ${
          idx === currentIndex 
            ? 'w-12 bg-[#c3a45d]' 
            : 'w-2 bg-white/50 hover:bg-white/70'
        } h-2 rounded-full`}
      />
    ))}
  </div>
</div>
    <FeaturesWithIcons />
    <DynamicWelcomeSection userType="institute"  />
    <WhatWeOffer />
    <Courses/>
 
<IslamicCTA/>
<Footer/>

    </>
  );
};

export default Home;
