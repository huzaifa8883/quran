import React from "react";
import { motion } from "framer-motion";
import { FaQuran, FaGraduationCap, FaBook, FaClock, FaUsers, FaMosque } from "react-icons/fa";

const DynamicWelcomeSection = ({ userType }) => {
  const content = {
    institute: {
      title: "Welcome To Imman Quran Institute",
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      subtitle: "Begin Your Journey of Islamic Learning",
      description:
        "We welcome our users to Online Quran teaching services, offering a variety of Islamic courses and life reformation programs based on Sharia teachings.",
      image: "https://cdn.pixabay.com/photo/2023/01/26/23/57/child-7747491_1280.jpg",
      features: [
        { icon: <FaClock className="text-xl" />, text: "Flexible Learning Schedule" },
        { icon: <FaUsers className="text-xl" />, text: "Expert Quran Teachers" },
        { icon: <FaBook className="text-xl" />, text: "Comprehensive Islamic Courses" },
      ],
    },
  };

  const userContent = content[userType] || content.institute;

  return (
    <div className="bg-gradient-to-b from-[#F8FAFC] to-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-[#1E4A5F]/10 rounded-full mb-6">
            <FaQuran className="text-5xl text-[#1E4A5F]" />
          </div>
          <h3 className="text-3xl text-[#1E4A5F] mb-6 font-arabic leading-relaxed">
            {userContent.arabic}
          </h3>
          <h2 className="text-4xl font-bold text-[#1E4A5F] mb-3">
            {userContent.title}
          </h2>
          <p className="text-[#1E4A5F]/80 text-lg">{userContent.subtitle}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#1E4A5F]/10">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E4A5F]/40 to-transparent" />
                <img
                  src={userContent.image}
                  alt="Quran Teaching"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{ minHeight: "500px" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1E4A5F] p-6">
                  <div className="text-white text-center">
                    <FaMosque className="text-3xl mx-auto mb-2" />
                    <p className="text-sm opacity-90">Join our growing community of learners</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-br from-white to-[#F8FAFC]">
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                {userContent.description}
              </p>

              {/* Features */}
              <div className="space-y-6 mb-10">
                {userContent.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-[#1E4A5F]/5 hover:bg-[#1E4A5F]/10 transition-colors duration-300"
                  >
                    <div className="text-[#1E4A5F] p-2 bg-white rounded-full shadow-sm">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <button className="w-full py-4 bg-[#1E4A5F] text-white rounded-lg hover:bg-[#15374A] transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <FaGraduationCap className="text-xl" />
                  <span className="font-medium">Start Learning Quran</span>
                </button>
                <button className="w-full py-4 border-2 border-[#1E4A5F] text-[#1E4A5F] rounded-lg hover:bg-[#1E4A5F]/5 transition-all duration-300 font-medium">
                  View Our Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicWelcomeSection;