import React, { useRef } from 'react';
import { FaStar, FaClock, FaGraduationCap, FaBookReader, FaQuran, FaUserGraduate, FaBook, FaPlay } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const courses = [
  {
    title: "Quran Intermediate Course Brother",
    duration: 245,
    category: "Arabic, Quran",
    description: "This class is for students who can fluently read Qur’an. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    originalPrice: "49.00",
    currentPrice: "39.00",
    rating: 5,
    image: "https://cdn.pixabay.com/photo/2016/03/27/18/31/book-1283468_1280.jpg",
    level: "Intermediate",
  },
  {
    title: "Online Quran Classes For Ladies",
    duration: 145,
    category: "Quran",
    description: "This class is for students who can fluently read Qur’an. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    originalPrice: "99.00",
    currentPrice: "79.00",
    rating: 4,
    image: "https://cdn.pixabay.com/photo/2016/03/27/18/31/book-1283468_1280.jpg",
    level: "Beginner",
  },
  {
    title: "Tafseer of Surah Al-Fatiha Short Course",
    duration: 199,
    category: "Learn Tajweed",
    description: "This class is for students who can fluently read Qur’an. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    originalPrice: "59.00",
    currentPrice: "49.00",
    rating: 4,
    image: "https://cdn.pixabay.com/photo/2016/03/27/18/31/book-1283468_1280.jpg",
    level: "Advanced",
  },
  {
    title: "Online Tajweed Rules Course",
    duration: 149,
    category: "Learn Tajweed",
    description: "This class is for students who can fluently read Qur’an. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    originalPrice: "59.00",
    currentPrice: "49.00",
    rating: 5,
    image: "https://cdn.pixabay.com/photo/2016/03/27/18/31/book-1283468_1280.jpg",
    level: "Intermediate",
  },
];

const CourseCard = ({ course, index }) => {
  const levelStyles = {
    Beginner: 'from-blue-500 to-blue-600',
    Intermediate: 'from-emerald-500 to-emerald-600',
    Advanced: 'from-violet-500 to-violet-600'
  };

  return (
    <motion.div
    className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-100/50"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
  >
    {/* Image Section with Enhanced Overlay */}
    <div className="relative h-72 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      {/* Enhanced Course Meta Information Overlay */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
        <span className={`px-6 py-2 rounded-full bg-gradient-to-r ${levelStyles[course.level]} text-white text-sm font-medium shadow-lg backdrop-blur-sm`}>
          {course.level}
        </span>
        <span className="px-6 py-2 bg-white/95 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium shadow-lg">
          {course.category}
        </span>
      </div>
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300 line-clamp-2">
          {course.title}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
              <FaClock className="text-emerald-400 mr-2" />
              <span className="text-white text-sm">{course.duration} hours</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
              {[...Array(5)].map((_, idx) => (
                <FaStar
                  key={idx}
                  className={`w-4 h-4 ${idx < course.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Enhanced Content Section */}
    <div className="p-8">
      {/* Course Features with Enhanced Styling */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {[
          { icon: <FaUserGraduate className="text-lg" />, text: "Expert Teachers" },
          { icon: <FaBook className="text-lg" />, text: "Study Material" },
          { icon: <FaPlay className="text-lg" />, text: "Video Lessons" },
          { icon: <FaGraduationCap className="text-lg" />, text: "Certificate" }
        ].map((feature, idx) => (
          <div key={idx} 
               className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
            <span className="text-emerald-500 p-2 bg-white rounded-lg shadow-sm">{feature.icon}</span>
            <span className="text-gray-700 font-medium">{feature.text}</span>
          </div>
        ))}
      </div>

      {/* Description with Enhanced Typography */}
      <p className="text-gray-600 mb-8 line-clamp-2 leading-relaxed">
        {course.description}
      </p>

      {/* Enhanced Price and CTA Section */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
        <div>
          <p className="text-sm text-gray-500 mb-1 uppercase tracking-wide">Course Fee</p>
          <div className="flex items-center space-x-3">
            <span className="line-through text-gray-400 text-lg">${course.originalPrice}</span>
            <span className="text-3xl font-bold text-emerald-600">${course.currentPrice}</span>
          </div>
        </div>
        <button className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl 
                         hover:shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-0.5 transition-all duration-300
                         border border-emerald-400/20">
          <FaQuran className="text-xl" />
          <span className="font-semibold">Enroll Now</span>
        </button>
      </div>
    </div>
  </motion.div>
  );
};

const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Your courses data remains the same

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50" ref={ref}>
    <div className="max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block p-6 bg-emerald-500/10 rounded-full mb-8 ring-2 ring-emerald-500/20">
          <FaQuran className="text-5xl text-emerald-600" />
        </div>
        <h2 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Our Islamic Courses
        </h2>
        <h3 className="text-3xl font-arabic text-emerald-600 mb-8">
          طَلَبُ الْعِلْمِ فَرِيضَةٌ
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
          Embark on your journey of Islamic knowledge with our comprehensive courses designed to nurture both knowledge and character
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} index={index} />
        ))}
      </div>
    </div>
  </section>
  );
};

export default Courses;