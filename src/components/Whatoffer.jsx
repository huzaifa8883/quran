import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBook, FaChalkboardTeacher, FaHandsHelping, FaArrowRight, FaMosque, FaQuran, FaStar, FaGraduationCap } from 'react-icons/fa';

const WhatWeOffer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  const offerings = [
    {
      title: "Online Quran Classes",
      subtitle: "تعليم القرآن",
      description: "Expert-led Qur'an memorization and tajweed classes with personalized attention and flexible scheduling.",
      icon: <FaQuran className="text-4xl" />,
      image: "https://cdn.pixabay.com/photo/2016/03/27/18/31/book-1283468_1280.jpg",
      benefits: ["One-to-One Sessions", "Certified Teachers", "Flexible Timing"],
      color: "emerald"
    },
    {
      title: "Tafseer Course",
      subtitle: "دورة التفسير",
      description: "Deep understanding of Quranic verses through comprehensive tafseer studies and scholarly discussions.",
      icon: <FaChalkboardTeacher className="text-4xl" />,
      image: "https://cdn.pixabay.com/photo/2021/12/11/09/19/quran-6862296_960_720.jpg",
      benefits: ["Detailed Analysis", "Weekly Classes", "Study Materials"],
      color: "blue"
    },
    {
      title: "Islamic Studies",
      subtitle: "الدراسات الإسلامية",
      description: "Comprehensive Islamic education covering Fiqh, Hadith, and character development.",
      icon: <FaMosque className="text-4xl" />,
      image: "https://cdn.pixabay.com/photo/2019/04/01/14/14/quran-4095475_1280.jpg",
      benefits: ["Structured Curriculum", "Expert Guidance", "Regular Assessment"],
      color: "violet"
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0B1120] via-[#0F172A] to-[#1E293B]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-full flex items-center justify-center">
              <FaGraduationCap className="text-4xl text-emerald-400" />
            </div>
          </div>
          
          <h2 className="text-6xl font-bold text-white mb-4 font-arabic tracking-wider">
            ما نقدم
          </h2>
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-6">
            What We Offer
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive Islamic education programs designed to nurture both knowledge and character
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h4 className="text-xl text-emerald-300 font-arabic mb-2">{offering.subtitle}</h4>
                  <h3 className="text-2xl font-bold text-white">{offering.title}</h3>
                </div>
              </div>

              <div className="p-8">
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br from-${offering.color}-500 to-${offering.color}-600 rounded-full -mt-16 mb-6 shadow-lg text-white ring-4 ring-black/5`}>
                  {offering.icon}
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  {offering.description}
                </p>

                <div className="space-y-4 mb-8">
                  {offering.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-300 group/item">
                      <FaStar className={`text-${offering.color}-500 mr-3 text-sm transform group-hover/item:scale-110 transition-transform duration-300`} />
                      <span className="text-sm group-hover/item:text-gray-200 transition-colors duration-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 px-6 bg-gradient-to-r from-${offering.color}-500 to-${offering.color}-600 text-white rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group hover:shadow-lg hover:shadow-${offering.color}-500/20 transform hover:-translate-y-0.5`}>
                  <span>Learn More</span>
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;