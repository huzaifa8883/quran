import React, { useRef, useState } from 'react';
import { 
  FaStar, 
  FaClock, 
  FaGraduationCap,
  FaQuran,
  FaHeart,
  FaChild,
  FaFemale,
  FaLanguage,
  FaBookReader,
  FaChalkboardTeacher,
  FaCertificate,
  FaVideo,
  FaGlobe,
  FaUserGraduate,
  FaBookOpen,
  FaRegCalendarAlt
} from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import Footer from "./Footer"

const courses = [
  {
    title: "Sisters' Advanced Quran Studies",
    duration: 245,
    category: "Ladies Only",
    description: "Join my in-depth Quran studies course designed exclusively for sisters, providing a comfortable and interactive learning experience.",
    originalPrice: "49.00",
    currentPrice: "39.00",
    rating: 5,
    level: "Advanced",
    features: ["One-on-One Sessions", "Flexible Timing", "Private Classes", "Certificate Upon Completion"],
    icon: FaFemale,
    color: "pink",
    enrolledStudents: 1234,
    nextBatch: "15 March",
    image: "https://thumbs.dreamstime.com/b/asian-muslim-woman-reading-al-quran-islam-learning-home-179303463.jpg"
  },
  {
    title: "Children's Quran Learning Program",
    duration: 145,
    category: "Kids",
    description: "A fun and engaging Quran learning experience tailored for kids, with interactive activities and a personalized teaching approach.",
    originalPrice: "99.00",
    currentPrice: "79.00",
    rating: 5,
    level: "Beginner",
    features: ["Interactive Learning", "Engaging Activities", "Regular Parent Updates", "Video Lessons"],
    icon: FaChild,
    color: "blue",
    enrolledStudents: 856,
    nextBatch: "10 March",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId2gQtJkEmajWO9qRASU2IwUtuOpXvVUtxQ&s"
  },
  {
    title: "Ladies' Tajweed Masterclass",
    duration: 180,
    category: "Ladies Only",
    description: "Improve your Quranic recitation with my specialized Tajweed course, designed exclusively for sisters to refine their pronunciation and fluency.",
    originalPrice: "69.00",
    currentPrice: "55.00",
    rating: 5,
    level: "Intermediate",
    features: ["Live Feedback", "Practice Exercises", "Recording Analysis", "Study Materials Provided"],
    icon: FaFemale,
    color: "purple",
    enrolledStudents: 945,
    nextBatch: "12 March",
    image: "https://cdn-lmfad.nitrocdn.com/jaEisGKyDVuuBERVGrrwlvBXrSpVUkcU/assets/images/optimized/rev-2f49f0f/jammiaalquran.com/file/elementor/thumbs/online-tutors-qahnt8g4o13j6zei123dqxeuvbowl6u96sfkgui95e.jpg"
  },
  {
    title: "Beginner Urdu for Sisters",
    duration: 120,
    category: "Language",
    description: "Learn Urdu from scratch with my structured, ladies-only course, covering reading, writing, and basic conversation skills.",
    originalPrice: "79.00",
    currentPrice: "59.00",
    rating: 5,
    level: "Beginner",
    features: ["Personalized Lessons", "Speaking Practice", "Cultural Insights", "Writing Exercises"],
    icon: FaLanguage,
    color: "teal",
    enrolledStudents: 678,
    nextBatch: "20 March",
    image: "https://www.worldbank.org/content/dam/photos/1440x600/2018/aug/Girls-Edu-1400x600.jpg"
  },
  {
    title: "Advanced Urdu Literature",
    duration: 160,
    category: "Language",
    description: "Explore the depths of Urdu literature and poetry with my advanced course, perfect for those looking to enhance their language skills.",
    originalPrice: "89.00",
    currentPrice: "69.00",
    rating: 5,
    level: "Advanced",
    features: ["Poetry & Literature Analysis", "Writing Workshops", "Live Discussions", "Cultural Context"],
    icon: FaBookReader,
    color: "indigo",
    enrolledStudents: 432,
    nextBatch: "18 March",
    image: "https://t4.ftcdn.net/jpg/07/36/00/33/360_F_736003398_Sz5I6X2oFQz1YGBAvvDo6X3g7XMz7EmM.jpg"
  }
];


const CourseCard = ({ course, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = course.icon;

  const colorSchemes = {
    pink: {
      light: 'bg-pink-50',
      medium: 'bg-pink-100',
      dark: 'bg-pink-500',
      gradient: 'from-pink-500 to-pink-600',
      hover: 'hover:bg-pink-50'
    },
    blue: {
      light: 'bg-sky-50',
      medium: 'bg-sky-100',
      dark: 'bg-sky-500',
      gradient: 'from-sky-500 to-sky-600',
      hover: 'hover:bg-sky-50'
    },
    purple: {
      light: 'bg-purple-50',
      medium: 'bg-purple-100',
      dark: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600',
      hover: 'hover:bg-purple-50'
    },
    teal: {
      light: 'bg-teal-50',
      medium: 'bg-teal-100',
      dark: 'bg-teal-500',
      gradient: 'from-teal-500 to-teal-600',
      hover: 'hover:bg-teal-50'
    },
    indigo: {
      light: 'bg-indigo-50',
      medium: 'bg-indigo-100',
      dark: 'bg-indigo-500',
      gradient: 'from-indigo-500 to-indigo-600',
      hover: 'hover:bg-indigo-50'
    }
  };

  const colors = colorSchemes[course.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`${colors.light} rounded-3xl shadow-xl overflow-hidden border border-gray-100`}
    >
      <div className="relative p-8">
        {/* New Badge for Level */}
        <div className="absolute top-4 right-4">
          <span className={`px-4 py-1 rounded-full ${colors.medium} text-sm font-medium`}>
            {course.level}
          </span>
        </div>

        <div className="flex items-start mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-4 rounded-2xl ${colors.medium}`}
          >
            <Icon className={`w-8 h-8 ${colors.dark}`} />
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">{course.title}</h3>
        
        <p className="text-gray-600 mb-6 line-clamp-2">{course.description}</p>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {course.features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-2 bg-white p-3 rounded-xl shadow-sm"
            >
              <FaHeart className={`w-4 h-4 ${colors.dark}`} />
              <span className="text-sm text-gray-600">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Course Statistics */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl p-3 text-center">
            <p className="text-sm text-gray-500">Enrolled</p>
            <p className="text-lg font-bold text-gray-800">{course.enrolledStudents}</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center">
            <p className="text-sm text-gray-500">Next Batch</p>
            <p className="text-lg font-bold text-gray-800">{course.nextBatch}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <FaClock className={`w-5 h-5 ${colors.dark}`} />
            <span className="text-gray-600">{course.duration} hours</span>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, idx) => (
              <FaStar
                key={idx}
                className={`w-5 h-5 ${idx < course.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <div>
            <p className="text-sm text-gray-500 mb-1">Course Fee</p>
            <div className="flex items-center space-x-3">
              <span className="line-through text-gray-400">${course.originalPrice}</span>
              <span className="text-3xl font-bold text-gray-800">${course.currentPrice}</span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-gradient-to-r ${colors.gradient} text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2`}
          >
            <span>Enroll Now</span>
            <FaChalkboardTeacher className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
const HeroSection = () => {
  return (
    <div className="relative overflow-x-hidden py-12 min-h-screen bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900">
    {/* Geometric Pattern Overlay */}
    <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('https://i.pinimg.com/736x/2c/19/7d/2c197db4eb3e3695bc09777a31a86de2.jpg')] bg-repeat opacity-30" />
    </div>

    {/* Light Effects */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl" />

    <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - About Me */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    **Learn Quran Online with a Certified Teacher**
                </h1>

                <h2 className="text-2xl md:text-3xl font-arabic text-emerald-300 mb-8">
                    تَعَلَّمُوا القُرْآنَ وَعَلِّمُوهُ النَّاسَ
                </h2>

                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
                    As a dedicated **freelance Quran teacher**, I offer **one-on-one and group classes** with a structured approach to Tajweed, Quran recitation, and understanding. Whether you're a beginner or looking to perfect your recitation, I am here to help you every step of the way.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-medium shadow-lg hover:bg-emerald-700 transition-all duration-300"
                    >
                        **Book a Free Trial**
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-slate-800 text-white rounded-lg font-medium shadow-lg hover:bg-slate-700 transition-all duration-300"
                    >
                        **Contact Me**
                    </motion.button>
                </div>
            </motion.div>

            {/* Right Column - Features */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative"
            >
                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        {
                            title: "Personalized Learning",
                            desc: "Tailored lessons based on your pace and level.",
                            color: "from-emerald-900 to-emerald-800"
                        },
                        {
                            title: "Flexible Timings",
                            desc: "Schedule classes at your convenience, anytime, anywhere.",
                            color: "from-slate-800 to-slate-700"
                        },
                        {
                            title: "Tajweed & Hifz",
                            desc: "Master correct pronunciation and memorize with guided techniques.",
                            color: "from-slate-800 to-slate-700"
                        },
                        {
                            title: "One-on-One Attention",
                            desc: "Get dedicated time and personalized feedback in every session.",
                            color: "from-emerald-900 to-emerald-800"
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={`p-6 rounded-xl bg-gradient-to-br ${feature.color} border border-white/10 backdrop-blur-sm shadow-xl`}
                        >
                            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-300 text-sm">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                        <div className="md:text-3xl text-lg font-bold text-emerald-400">500+</div>
                        <div className="text-sm text-slate-300">Students Taught</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                        <div className="md:text-3xl text-lg font-bold text-emerald-400">10+ Years</div>
                        <div className="text-sm text-slate-300">Teaching Experience</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                        <div className="md:text-3xl text-lg font-bold text-emerald-400">Certified</div>
                        <div className="text-sm text-slate-300">Ijazah in Tajweed</div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
</div>


  );
};
const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
    <HeroSection />

    <section className="py-32 overflow-x-hidden  overflow-hidden relative  bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            opacity: [0.05, 0.08]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-full h-full bg-[url('/api/placeholder/100/100')] bg-repeat"
        />
      </div>

      {/* Decorative Light Effects */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-emerald-200 to-emerald-100 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-tr from-blue-100 to-emerald-100 rounded-full blur-3xl opacity-20"
      />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          {/* Animated Icon Container */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative inline-block mb-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full opacity-20 blur-xl"
            />
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.8 }}
              className="relative p-8 bg-gradient-to-br from-emerald-50 to-white rounded-full shadow-xl border border-emerald-100"
            >
              <FaQuran className="text-6xl text-emerald-600" />
            </motion.div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-slate-800 mb-8"
          >
            Illuminate Your Path with <br/>
            <span className="text-emerald-600">Sacred Knowledge</span>
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-arabic text-emerald-600 mb-8 leading-relaxed"
          >
            طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ وَمُسْلِمَةٍ
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Embark on a transformative journey of knowledge and spirituality with our 
            expertly crafted courses, guided by renowned scholars in an enriching 
            learning environment
          </motion.p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden border border-emerald-100"
            >
              {/* Course Image with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600/40 to-blue-600/40 z-10"
                />
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Level Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full z-20">
                  <span className="text-sm font-medium text-emerald-600">{course.level}</span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-8">
                {/* Arabic Title with Animation */}
                <motion.h4
                  whileHover={{ scale: 1.05 }}
                  className="text-lg font-arabic text-emerald-600 mb-3 text-center"
                >
                  {course.arabicTitle}
                </motion.h4>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
                  {course.title}
                </h3>

                <p className="text-slate-600 mb-6 text-center leading-relaxed">
                  {course.description}
                </p>

                {/* Course Features */}
                <div className="space-y-4 mb-8">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-slate-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Course Meta */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-emerald-500" />
                    <span className="text-sm text-slate-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaRegCalendarAlt className="text-emerald-500" />
                    <span className="text-sm text-slate-600">{course.schedule}</span>
                  </div>
                </div>

                {/* Instructor Info */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <FaUserGraduate className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">{course.instructor}</p>
                      <div className="flex items-center">
                        <FaStar className="text-amber-400 mr-1" />
                        <span className="text-sm text-slate-600">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-slate-600">
                    {course.students} students
                  </span>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl text-lg font-medium hover:from-emerald-700 hover:to-emerald-600 transition-colors shadow-lg"
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Courses;