import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBook, FaChalkboardTeacher, FaHandsHelping, FaArrowRight } from 'react-icons/fa';

const WhatWeOffer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  const offerings = [
    {
      title: "Online Quran Classes",
      description: "Focused on Qur’an memorisation and revision of surahs that have already been taught.",
      icon: <FaBook className="text-5xl text-teal-600 mr-4" />,
      image: "https://cdn.pixabay.com/photo/2016/03/27/18/31/book-1283468_1280.jpg",
    },
    {
      title: "Tafseer Course",
      description: "This class focuses mainly on Qur’an memorisation and revision of surahs that have already been taught.",
      icon: <FaChalkboardTeacher className="text-5xl text-teal-600 mr-4" />,
      image: "https://cdn.pixabay.com/photo/2021/12/11/09/19/quran-6862296_960_720.jpg",
    },
    {
      title: "We Value Our Students",
      description: "We nurture an environment of growth, respect, and dedication in every class.",
      icon: <FaHandsHelping className="text-5xl text-teal-600 mr-4" />,
      image: "https://cdn.pixabay.com/photo/2019/04/01/14/14/quran-4095475_1280.jpg",
    },
  ];

  return (
    <section className="py-20 px-8 bg-[#121d18] shadow-2xl" ref={ref}>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-extrabold text-white mb-6 transform hover:scale-110 transition-all duration-300 ease-in-out">
          WHAT WE OFFER
        </h2>
        <p className="text-xl text-white opacity-90 mb-8">
          Bringing you the best in Arabic & Quran Services
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {offerings.map((offering, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-b from-teal-200 to-teal-500 rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
          >
            <div className="relative p-6 bg-white rounded-3xl transition-all duration-300 shadow-lg hover:shadow-2xl">
              <img
                src={offering.image}
                alt={offering.title}
                className="w-full h-48 object-cover rounded-lg shadow-md mb-6 transition-all duration-500 ease-in-out transform hover:scale-105"
              />
              <div className="flex items-center mb-4">
                {offering.icon}
                <h3 className="text-3xl title font-semibold text-gray-800 hover:text-teal-700 transition-all duration-300">
                  {offering.title}
                </h3>
              </div>
              <p className="text-md text-gray-600 mb-6 fonti">{offering.description}</p>
              <button className="flex items-center fonti text-lg text-white bg-teal-600 hover:bg-teal-700 font-semibold py-2 px-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                <span>Learn More</span>
                <FaArrowRight className="ml-2 text-xl" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
