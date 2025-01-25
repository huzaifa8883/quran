import React, { useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const CourseCard = ({ title, duration, category, description, originalPrice, currentPrice, rating, image, level }) => {
  return (
    <motion.div
      className="bg-white title rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translateY-[-10px] relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image with overlay effect */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-t-3xl transition-all duration-300"
        />
        {/* Overlay for image text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
        {/* Green level label */}
        <div className="absolute top-4 left-4 bg-teal-600 text-white px-4 py-2 rounded-full text-lg font-semibold shadow-md">
          {level}
        </div>
      </div>
      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-3xl font-semibold text-gray-800 mb-2">{title}</h3>

        {/* Flexbox for Duration, Category, and Enroll Button */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-700">
          <p className="font-semibold">{duration} hours</p>
          <p className="font-semibold">{category}</p>
          <button className="bg-teal-600 text-white py-1 px-4 rounded-lg text-xs hover:bg-teal-700 transition-all duration-300">
            Enroll
          </button>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className={`text-yellow-500 ${index < rating ? 'fill-current' : ''}`} />
          ))}
        </div>

        {/* Description */}
        <p className="text-md text-gray-600 mb-4">{description}</p>

        {/* Pricing & Action */}
        <div className="flex justify-between items-center">
          <p className="text-lg text-teal-600 font-semibold">
            <span className="line-through text-gray-500">${originalPrice}</span> ${currentPrice}
          </p>
          <button className="bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-300">
            Start Learning
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

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

  return (
    <section className="py-24 px-8 bg-[#f7fafc] title" ref={ref}>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="md:text-5xl text-4xl font-extrabold text-gray-800 mb-6 ">Our Islamic Courses</h2>
        <p className="text-xl text-gray-600 opacity-90 mb-8 fonti">Explore our courses and start your learning journey today!</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            duration={course.duration}
            category={course.category}
            description={course.description}
            originalPrice={course.originalPrice}
            currentPrice={course.currentPrice}
            rating={course.rating}
            image={course.image}
            level={course.level}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
