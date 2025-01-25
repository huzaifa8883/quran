import React from "react";
import { IoSchoolOutline, IoEarthOutline, IoPeopleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const FeaturesWithIcons = () => {
  const features = [
    {
      icon: <IoSchoolOutline className="text-5xl text-teal-600" />,
      text: "Learn Quick Quran Classes",
      bgColor: "bg-teal-100",
    },
    {
      icon: <IoEarthOutline className="text-5xl text-emerald-600" />,
      text: "Online Arabic",
      bgColor: "bg-emerald-100",
    },
    {
      icon: <IoPeopleOutline className="text-5xl text-pink-500" />,
      text: "Classes for Kids",
      bgColor: "bg-pink-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animation triggers when 20% of the component is in view
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className={`flex flex-col items-center justify-center ${feature.bgColor} p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105`}
          variants={itemVariants}
        >
          <div className="mb-4 p-4 rounded-full bg-white shadow-md">
            {feature.icon}
          </div>
          <h3 className="text-lg font-medium text-gray-800 text-center mt-4">
            {feature.text}
          </h3>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeaturesWithIcons;
