import React from "react";
import { motion } from "framer-motion";

const DynamicWelcomeSection = ({ userType }) => {
  const content = {
    institute: {
      title: "Welcome To Imman Quran Institute",
      description:
        "We welcome our users to Online Quran teaching services, offering a variety of Islamic courses and life reformation programs based on Sharia teachings.",
      additionalText:
        "Our courses cater to all levels, ensuring growth in both knowledge and character.",
      image: "https://cdn.pixabay.com/photo/2023/01/26/23/57/child-7747491_1280.jpg",
      ctaText: "Learn Online at Your Own Pace",
      offer: "High-quality Quranic and Arabic lessons at affordable prices.",
      icon: "📚",
      additionalIcons: ["🎓", "📖"],
    },
  };

  const userContent = content[userType] || content.institute;

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-between py-12 px-6 bg-gray-100 rounded-lg shadow-md"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animation triggers when 20% of the component is in view
    >
      {/* Left Side Image Section */}
      <motion.div
        className="w-full md:w-1/2 max-w-md mb-6 md:mb-0 rounded-lg overflow-hidden shadow-md"
        variants={containerVariants}
      >
        <img
          src={userContent.image}
          alt="Quran Teaching"
          className="w-full h-80 object-cover rounded-lg"
        />
      </motion.div>

      {/* Right Side Text Section */}
      <motion.div
        className="w-full md:w-1/2 md:pl-8 text-center md:text-left"
        variants={containerVariants}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4 title">
          {userContent.icon} {userContent.title}
        </h2>
        <p className="text-lg text-gray-700 mb-4 fonti">{userContent.description}</p>
        <p className="text-md text-gray-600 mb-6 fonti">{userContent.additionalText}</p>

        {/* Additional Icons Section */}
        <div className="flex justify-center md:justify-start space-x-6 mb-6">
          {userContent.additionalIcons.map((icon, index) => (
            <span key={index} className="text-3xl text-gray-600">
              {icon}
            </span>
          ))}
        </div>

        {/* Call to Action Section */}
        <h3 className="text-xl text-gray-800 mb-4 title">{userContent.ctaText}</h3>
        <p className="text-lg text-gray-600 fonti">{userContent.offer}</p>
      </motion.div>
    </motion.section>
  );
};

export default DynamicWelcomeSection;
