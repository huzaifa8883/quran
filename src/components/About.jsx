import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import  { useState } from 'react';

import { FaQuran,  FaAward, FaCertificate, FaStarHalf, FaLanguage, FaClock, FaGlobe, FaBookReader, FaHandHoldingHeart, FaQuoteRight, FaCalendarAlt, FaGlobeAmericas, FaUserGraduate, FaUsers, FaStar,FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const About = () => {
    const [activeTestimonialSet, setActiveTestimonialSet] = useState(0);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Testimonials data
  const testimonials = [
    {
      name: "Abdullah Rahman",
      location: "Manchester, UK",
      text: "Alhamdulillah, I've been learning with Ustadh Kashaf for over a year now. His method of teaching Tajweed is exceptional. He's patient and explains complex rules in a simple way. My Quran recitation has improved significantly.",
      rating: 5,
      date: "January 2024",
      course: "Tajweed Course",
      avatar: "AR"
    },
    {
      name: "Fatima Ahmed",
      location: "Toronto, Canada",
      text: "As a busy professional, I was looking for flexible Quran classes. Ustadh Kashaf online sessions are perfectly structured. He helped me improve my Arabic pronunciation and understanding of the Quran. Highly recommended!",
      rating: 5,
      date: "December 2023",
      course: "Arabic & Quran",
      avatar: "FA"
    },
    {
      name: "Mohammad Khaled",
      location: "Dubai, UAE",
      text: "My children have been taking Quran classes with Ustadh Kashaf for 6 months. His engaging teaching style keeps them interested and motivated. We've seen remarkable progress in their Quran reading skills.",
      rating: 5,
      date: "February 2024",
      course: "Kids Quran Program",
      avatar: "MK"
    },
    {
      name: "Aisha Hassan",
      location: "Melbourne, Australia",
      text: "The Tafseer course with Ustadh Kashaf was eye-opening. His deep knowledge and contemporary examples helped me understand the Quran's meaning better. The course material is comprehensive and well-organized.",
      rating: 4.5,
      date: "November 2023",
      course: "Tafseer Course",
      avatar: "AH"
    },
    {
      name: "Yusuf Ali",
      location: "Singapore",
      text: "Starting from basic Arabic to now being able to understand Quranic verses - the journey has been amazing. Ustadh's teaching methodology is systematic and effective. Worth every penny!",
      rating: 5,
      date: "January 2024",
      course: "Quranic Arabic",
      avatar: "YA"
    },
    {
      name: "Sarah Ibrahim",
      location: "New York, USA",
      text: "Being a revert, I was looking for a teacher who could explain Islamic concepts clearly. Ustadh Huzaifa's patience and knowledge made my learning journey smooth. His pronunciation correction techniques are excellent.",
      rating: 5,
      date: "December 2023",
      course: "Basic Quran Reading",
      avatar: "SI"
    }
  ];

  // Experience timeline
  const globalPresence = [
    { country: "United Kingdom", students: 150, flag: "🇬🇧" },
    { country: "United States", students: 200, flag: "🇺🇸" },
    { country: "Canada", students: 120, flag: "🇨🇦" },
    { country: "Australia", students: 80, flag: "🇦🇺" },
    { country: "UAE", students: 100, flag: "🇦🇪" },
    { country: "Saudi Arabia", students: 90, flag: "🇸🇦" },
    { country: "Malaysia", students: 70, flag: "🇲🇾" },
    { country: "Singapore", students: 60, flag: "🇸🇬" }
  ];
  
  const experienceData = [
    {
      year: "2015-2017",
      title: "Completed Hifz-ul-Quran",
      description: "Alhamdulillah, completed memorization of the Holy Quran with Tajweed under the guidance of renowned scholars.",
      achievement: "Received Sanad in Qira'at Hafs",
      icon: <FaQuran className="text-2xl" />
    },
    {
      year: "2017-2019",
      title: "Islamic Studies Diploma",
      description: "Specialized in Tafseer and Arabic Language from International Islamic University.",
      achievement: "Graduated with Distinction",
      icon: <FaUserGraduate className="text-2xl" />
    },
    {
      year: "2019-Present",
      title: "Global Quran Teaching",
      description: "Teaching Quran to students worldwide through modern digital platforms.",
      achievement: "Over 1000+ successful students",
      icon: <FaGlobeAmericas className="text-2xl" />
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Enhanced with parallax effect */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-emerald-900 text-white py-28">
        <div className="absolute inset-0 bg-[url('/islamic-pattern.png')] opacity-10 transform rotate-12 scale-150"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 to-emerald-800/95"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Text Content */}
            <div className="text-left space-y-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-emerald-800/50 rounded-full text-emerald-300 text-sm font-medium"
              >
                Professional Quran Teacher
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Assalam-o-Alaikum, <br />
                I'm <span className="text-emerald-400">Ustadh Kashaf</span>
              </motion.h1>

              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-3xl font-arabic text-emerald-200">
                  مُعَلِّمُ القُرْآن
                </p>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Dedicated to spreading Quranic knowledge with proper Tajweed and understanding. Over 8 years of experience teaching students worldwide.
                </p>
              </motion.div>

              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <button className="px-8 py-4 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all duration-300 transform hover:-translate-y-1">
                  Book Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-emerald-500/30 text-white rounded-xl hover:bg-emerald-500/10 transition-all duration-300">
                  Learn More
                </button>
              </motion.div>
            </div>
            
            {/* Profile Image with Enhanced Styling */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-square rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
                <img 
                  src="https://i.pinimg.com/1200x/24/db/e9/24dbe99e5c3f33517433d36455499d8b.jpg" 
                  alt="Ustadh Kashaf"
                  className="w-full h-full object-cover"
                />
                {/* Decorative Ring */}
                <div className="absolute inset-0 border-8 border-emerald-500/30 rounded-full"></div>
              </div>
              
              {/* Experience Badge */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white text-emerald-900 px-6 py-3 rounded-full shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="font-bold">8+ Years</span>
                <span className="text-emerald-600"> Experience</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline Section */}




<section className="py-20 relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 bg-emerald-50/80">
    <div className="absolute inset-0 bg-[url('/islamic-pattern.png')] opacity-5"></div>
  </div>

  <div className="container mx-auto px-4 relative">
    {/* Section Header */}
    <motion.div 
      className="text-center max-w-3xl mx-auto mb-20"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
    >
      <span className="text-emerald-600 font-semibold mb-3 block">
        ALHAMDULILLAH
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        My Educational Journey & Global Impact
      </h2>
      <p className="text-gray-600 text-lg">
        By the grace of Allah, teaching Quran to students from over 20+ countries
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
      {/* Timeline Journey */}
      <div className="space-y-8">
        <motion.h3 
          className="text-2xl font-bold text-gray-800 mb-8"
          variants={fadeInUp}
        >
          Educational Milestones
        </motion.h3>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-500 to-emerald-100"></div>

          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-16 pb-12 last:pb-0"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 top-0 bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg">
                {item.icon}
              </div>
              
              {/* Content Card */}
              <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center text-emerald-600 font-semibold mb-3">
                  <FaCalendarAlt className="mr-2" />
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center text-emerald-500 text-sm font-medium">
                  <FaAward className="mr-2" />
                  {item.achievement}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global Presence */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="lg:sticky lg:top-8"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Global Student Community</h3>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-2 gap-6">
            {globalPresence.map((country, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2">{country.flag}</div>
                <div className="font-bold text-gray-800">{country.country}</div>
                <div className="text-emerald-600 font-semibold">
                  {country.students}+ Students
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Statistics */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">870+</div>
                <div className="text-sm text-gray-600">Total Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">20+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">4.9</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* [Previous sections remain the same] */}

      {/* Testimonials Section */}
    

    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[url('/islamic-pattern.png')] opacity-5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-emerald-900/20 to-transparent"></div>
      
      {/* Floating Design Elements */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          rotate: -360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-6 py-2 rounded-full bg-emerald-800/50 backdrop-blur-sm mb-6">
            <span className="text-emerald-300 font-medium">STUDENT TESTIMONIALS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            What Our <span className="text-emerald-400">Blessed Students</span> Say
          </h2>

          {/* Enhanced Rating Display */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
            <div className="flex items-center justify-center space-x-3 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: star * 0.1 }}
                >
                  <FaStar className="text-yellow-400 w-8 h-8" />
                </motion.div>
              ))}
            </div>
            <p className="text-white font-medium text-xl">4.9 out of 5</p>
            <p className="text-emerald-300 text-sm">Based on 100+ verified reviews</p>
          </div>
        </motion.div>

        {/* Testimonials Carousel/Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {testimonials.slice(activeTestimonialSet * 3, (activeTestimonialSet + 1) * 3).map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:translate-y--2">
                    {/* Course Banner */}
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 relative">
                      <span className="text-white font-medium">{testimonial.course}</span>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
                    </div>

                    <div className="p-8">
                      {/* Quote */}
                      <div className="relative mb-6">
                        <FaQuoteRight className="absolute -top-4 -left-2 text-5xl text-emerald-100 -z-10" />
                        <p className="text-gray-600 leading-relaxed relative z-10">
                          {testimonial.text}
                        </p>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                              {testimonial.initials}
                            </div>
                            <span className="absolute -bottom-1 -right-1 text-xl">
                              {testimonial.flag}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500 flex items-center">
                              <FaGlobe className="w-3 h-3 mr-1 text-emerald-500" />
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex text-yellow-400 mb-1">
                            {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                              <FaStar key={i} className="w-4 h-4" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">{testimonial.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={() => setActiveTestimonialSet(prev => Math.max(0, prev - 1))}
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white"
              disabled={activeTestimonialSet === 0}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => setActiveTestimonialSet(prev => prev + 1)}
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white"
              disabled={(activeTestimonialSet + 1) * 3 >= testimonials.length}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button className="group relative px-10 py-5 bg-white rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            <span className="relative font-bold text-lg text-emerald-900 group-hover:text-white transition-colors duration-300">
              Begin Your Quranic Journey Today
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  

      {/* [Rest of the sections remain the same] */}
    </div>
  );
};

export default About;