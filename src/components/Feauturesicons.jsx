import React from "react";
import { IoSchoolOutline, IoEarthOutline, IoPeopleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaQuran, FaStar, FaClock } from 'react-icons/fa';

const FeaturesWithIcons = () => {
  const features = [
    {
      icon: <IoSchoolOutline className="text-6xl" />,
      text: "Learn Quick Quran Classes",
      description: "Master Quran recitation with expert teachers",
      stats: "1000+ Students",
      benefits: ["Expert Teachers", "Flexible Timings", "Personal Attention"],
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      hoverBg: "hover:bg-emerald-600",
    },
    {
      icon: <IoEarthOutline className="text-6xl" />,
      text: "Online Arabic Classes",
      description: "Learn Arabic from native speakers",
      stats: "500+ Active Learners",
      benefits: ["Native Speakers", "Modern Methods", "Practice Sessions"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      hoverBg: "hover:bg-blue-600",
    },
    {
      icon: <IoPeopleOutline className="text-6xl" />,
      text: "Classes for Kids",
      description: "Interactive learning for children",
      stats: "800+ Happy Parents",
      benefits: ["Interactive Learning", "Fun Activities", "Regular Progress"],
      color: "text-violet-600",
      bgColor: "bg-violet-50",
      hoverBg: "hover:bg-violet-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 py-24 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <FaQuran className="text-6xl text-emerald-600 mx-auto mb-8 transform hover:scale-110 transition-transform duration-300" />
          <h2 className="text-4xl font-bold text-slate-800 mb-6 font-arabic">
            Our Learning Programs
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Embark on your journey of Islamic education with our comprehensive learning programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`
                bg-white p-8 rounded-xl border border-slate-100
                shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]
                hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)]
                transition-all duration-300 group
              `}
            >
              <div className={`
                flex items-center justify-center w-20 h-20 mx-auto mb-8
                ${feature.bgColor} ${feature.color} rounded-xl
                group-hover:scale-110 transition-transform duration-300
                shadow-lg
              `}>
                {feature.icon}
              </div>
              
              <h3 className={`text-2xl font-bold text-slate-800 text-center mb-4 ${feature.color}`}>
                {feature.text}
              </h3>
              <p className="text-slate-600 text-center mb-8 text-base leading-relaxed">
                {feature.description}
              </p>

              <div className="space-y-4 mb-8">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-slate-600 text-base group-hover:translate-x-2 transition-transform duration-300">
                    <FaStar className={`${feature.color} mr-3`} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="text-center text-slate-600 mb-8">
                <FaClock className={`inline mr-2 ${feature.color}`} />
                {feature.stats}
              </div>

              <button className={`
                w-full py-3 px-6 text-base font-semibold text-white
                bg-slate-700 rounded-lg
                ${feature.hoverBg}
                transition-colors duration-300
                transform hover:-translate-y-0.5
                shadow-md hover:shadow-xl
              `}>
                Start Learning
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesWithIcons;