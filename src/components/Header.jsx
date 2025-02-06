import React from 'react';
import { useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';// Import search and bars icons
import { useEffect } from 'react';

// const Header = () => {

//   const [toggleform, settoggleform] = useState(false);


//   const handletoggleform = () => {
//     console.log("Toggling form", toggleform);
//     settoggleform(!toggleform);
//   };
//   useEffect(() => {
//     if (toggleform) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }
//     // Cleanup on unmount
//     return () => {
//       document.body.classList.remove("overflow-hidden");
//     };
//   }, [toggleform]);

//   return (
//     <>
//       <div className="h-20 fixed top-0 left-0  border-b border-gray-700 z-50 w-full flex items-center bg-gradient-to-br from-white to-gray-100 shadow-md font-sans">
//         {/* Logo Section */}
//         <div className="flex items-center px-4 sm:px-10">
//           <img
//             src="https://themazine.com/newwp/alquran/wp-content/uploads/2023/12/logo.svg"
//             className="h-7 w-auto max-w-full"
//             alt="Logo"
//           />
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden xl:flex items-center space-x-12 text-[#254636] text-[16px] font-helveticaLight font-bold tracking-wide">
//   {["Home", "About Us", "Courses", "Services", "Blog", "Contact"].map((item) => (
//     <h3
//       key={item}
//       onClick={() => {
//         // Navigate to the correct route based on the item
//         if (item === "Home") {
//           window.location.href = "/";
//         } else if (item === "About Us") {
//           window.location.href = "/about";
//         } else if (item === "Projects") {
//           window.location.href = "/projects";
//         } else if (item === "Services") {
//           window.location.href = "/services";
//         } else if (item === "Blog") {
//           window.location.href = "/blogs";
//         } else if (item === "Contact") {
//           window.location.href = "/contact";
//         }
//       }}
//       className="hover:text-gray-300 cursor-pointer transition-all duration-300 hover:scale-105"
//     >
//       {item}
//     </h3>
//   ))}
// </div>


//         {/* Start Project Button and Icons */}
//         <div className="ml-auto flex items-center space-x-6 pr-4 sm:pr-10">
//           <Link to={"/contact"}>
//           {/* Start Project Button */}
//           <button
//   className="hidden xl:block px-6 py-3 text-[14px] font-roboto font-bold text-white uppercase tracking-wide bg-gradient-to-r from-green-600 to-green-700 border border-green-800 rounded-lg shadow-md hover:from-green-600 hover:to-green-800 hover:border-green-900 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
// >
//   Quick Join Now
// </button>



//           </Link>
//           {/* Search Icon for xl and larger */}
//           <div className="hidden xl:flex items-center justify-center w-9 h-9 rounded-full border border-gray-500 hover:bg-gray-300 hover:text-[#212529] transition-all duration-300 cursor-pointer">
//             <FaSearch className="text-black text-[16px] transition-transform duration-300 hover:scale-110" />
//           </div>

//           {/* Bars Icon for smaller than xl */}
//           <div
//   onClick={handletoggleform}
//   className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gradient-to-r from-green-600 to-green-700 shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:border-green-800 text-white transition-all duration-300 cursor-pointer"
// >
//   <FaBars className="text-white text-[18px] transition-transform duration-300 hover:scale-125" />
// </div>

//         </div>
//       </div>
//       <div
//   className={`h-[950px] visible lg:invisible bg-white fixed overflow-y-hidden -mt-[118px] border-r-[1px] border-slate-600 z-[9999] backing overflow-x-hidden w-full max-w-[300px] ${toggleform ? 'show mx-0' : ''}`}
//   style={{ overflowY: 'auto' }}
// >
//   <div className="my-32 mx-4 h-auto w-full font-sans">
//     <div className="flex items-center justify-between space-x-6 px-2">
//       <div className="flex items-center space-x-3">
//         {/* Logo Icon */}
//         <div className="  h-10 w-40 flex items-center justify-center ">
//   <img
//     src="https://themazine.com/newwp/alquran/wp-content/uploads/2023/12/logo.svg"
//     alt="7StarDigitizing Logo"
//     className="object-contain h-full w-full"  // Use object-contain to preserve aspect ratio
//   />
// </div>

//         {/* Logo Text */}
       
//       </div>
//       <FontAwesomeIcon
//         icon={faXmark}
//         className="text-[25px] text-black cursor-pointer translate-x-[-30px] hover:opacity-80 transition-opacity duration-200"
//         onClick={handletoggleform}
//       />
//     </div>

//     <div className="w-full h-[1px] my-5 bg-gray-600"></div>

//     {/* Navigation Options */}
//     <div className="flex flex-col space-y-6 my-6 mr-10 "> {/* Increased gap here */}
//   {[
//     "Home",
//     "About Us",
//     "Courses",
//     "Services",
//     "Blog",
  
//     "Contact",
//   ].map((item) => (
//     <div key={item}>
//       <Link
//         to={
//           item === "About Us"
//             ? "/about"
//             : item === "Home"
//             ? "/"
//             : item === "Projects"
//             ? "/projects"
//             : item === "Services"
//             ? "/services"
//             : item === "Blog"
//             ? "/blogs"
//             : item === "Contact"
//             ? "/contact"
//             : `/${item.toLowerCase().replace(" ", "")}`
//         }
//         onClick={() => settoggleform(false)}
//         className="text-[#000000] title font-semibold text-[17px] py-2 w-full hover:text-purple-500 transition-all duration-300"
//       >
//         {item}
//       </Link>
//       <div className="w-full h-[1px] bg-gray-400 mt-3"></div> {/* Increased gap after each link */}
//     </div>
//   ))}
// </div>


//     {/* Start Project Button */}
//     <div className="w-full flex justify-center mt-8">
//     <Link
//       to="/contact"
//       onClick={() => settoggleform(false)}
//       className="bg-gray-800 text-gray-200 font-helveticaLight font-bold rounded-lg px-6 py-3 text-[16px] shadow-md hover:bg-gray-700 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
//     >
//       Quick Join Now
//     </Link>
//   </div>
  

//     {/* Bottom Section with Divider */}
//   </div>
// </div>







//     </>
//   );
// };
const Header = () => {
  const [toggleform, settoggleform] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handletoggleform = () => {
    settoggleform(!toggleform);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-gradient-to-b from-black/70 via-black/50 to-transparent'
      }`}>
        {/* Decorative Top Border */}
        <div className="h-1 w-full bg-gradient-to-r from-[#0c4a6e] via-[#38bdf8] to-[#0c4a6e]"></div>

        <div className="container mx-auto px-4">
          <div className="h-24 flex items-center justify-between">
            {/* Logo Section with Enhanced Background */}
            <div className="flex items-center space-x-2 relative">
              <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                isScrolled ? 'bg-transparent' : 'bg-white/10 backdrop-blur-sm'
              }`}></div>
              <img
                src="https://themazine.com/newwp/alquran/wp-content/uploads/2023/12/logo.svg"
                className="h-12 w-auto relative z-10"
                alt="Logo"
              />
            </div>

            {/* Navigation Links with Better Contrast */}
            <nav className="hidden xl:flex items-center space-x-8">
              {["Home", "About Us", "Courses", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className={`group relative text-[16px] font-semibold transition-colors duration-300 ${
                    isScrolled ? 'text-[#0c4a6e]' : 'text-white'
                  }`}
                >
                  <span className="relative px-3 py-2">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#38bdf8] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
            </nav>

            {/* Right Section with Enhanced Styling */}
            <div className="flex items-center space-x-6">
              {/* Quick Join Button */}
              <Link to="/contact" className="hidden xl:block">
                <button className={`relative overflow-hidden px-8 py-3 rounded-lg text-white text-sm font-bold tracking-wider transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-[#0c4a6e] to-[#0e7490] hover:from-[#0e7490] hover:to-[#0c4a6e]'
                    : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'
                }`}>
                  <span className="relative z-10">Quick Join Now</span>
                </button>
              </Link>

              {/* Search Icon */}
              <button className={`hidden xl:flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                isScrolled
                  ? 'border-[#0c4a6e]/30 hover:border-[#0c4a6e] text-[#0c4a6e]'
                  : 'border-white/30 hover:border-white/70 text-white'
              }`}>
                <FaSearch className="text-lg transition-transform duration-300 hover:scale-110" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={handletoggleform}
                className={`xl:hidden flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'bg-[#0c4a6e] text-white hover:bg-[#0e7490]'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                <FontAwesomeIcon icon={toggleform ? faXmark : faBars} className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div className={`fixed inset-0 bg-black/70 backdrop-blur-md z-[60] xl:hidden transition-all duration-500 ${
        toggleform ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`absolute right-0 top-0 h-full w-[320px] bg-gradient-to-b from-[#0c4a6e] to-[#164e63] shadow-2xl transform transition-transform duration-500 ${
          toggleform ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-8">
            <div className="flex items-center justify-between mb-10">
              <img
                src="https://themazine.com/newwp/alquran/wp-content/uploads/2023/12/logo.svg"
                className="h-10 w-auto"
                alt="Logo"
              />
              <button
                onClick={handletoggleform}
                className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faXmark} className="text-2xl" />
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {["Home", "About Us", "Courses", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => settoggleform(false)}
                  className="py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="mt-10">
              <Link
                to="/contact"
                onClick={() => settoggleform(false)}
                className="block w-full py-4 text-center text-white bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold tracking-wide"
              >
                Quick Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;