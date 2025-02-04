import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaMosque, FaQuran, FaStar, FaGlobe, FaGraduationCap } from 'react-icons/fa';

const IslamicCTA = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900"></div>
      
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/islamic-pattern.png')] opacity-5"></div>
      
      {/* Light Effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-400 rounded-full filter blur-[100px] opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-400 rounded-full filter blur-[100px] opacity-20"></div>
      
      <motion.div 
        className="relative px-4 py-20 md:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Header Icon */}
          <motion.div variants={itemVariants} className="mb-10">
            <div className="inline-block p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <FaMosque className="text-4xl text-white" />
            </div>
          </motion.div>

          {/* Arabic Title */}
          <motion.div 
            variants={itemVariants}
            className="mb-8"
          >
            <h3 className="text-3xl font-arabic text-emerald-200 leading-relaxed">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </h3>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Proud to be serving thousands of 
              <span className="text-emerald-300"> Muslim Families</span>
            </h2>
            <p className="text-xl md:text-2xl text-emerald-100/90 max-w-3xl mx-auto">
              Join our global community spreading Islamic knowledge worldwide
            </p>
          </motion.div>

          {/* Statistics */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
          >
            {[
              { icon: <FaGlobe />, number: "150+", label: "Countries" },
              { icon: <FaQuran />, number: "10K+", label: "Students" },
              { icon: <FaGraduationCap />, number: "500+", label: "Courses" },
              { icon: <FaStar />, number: "15K+", label: "Graduates" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-emerald-300 text-2xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-emerald-200/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group bg-white px-8 py-4 rounded-xl text-emerald-700 font-semibold 
                             hover:bg-emerald-50 transition-all duration-300 flex items-center space-x-3
                             shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <span>Join Our Community</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 rounded-xl text-white font-semibold 
                             border border-white/20 hover:bg-white/10 backdrop-blur-sm
                             transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default IslamicCTA;