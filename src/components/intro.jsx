import React from 'react';
import profileImage from '../assets/bracuSmile.jpg'; // Adjust path as needed

const intro = () => {
  return (
    <>
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 font-serif px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
            {/* Image - First on mobile, Right on desktop */}
            <div className="md:w-1/2 flex justify-center order-first md:order-last mb-6 sm:mb-8 md:mb-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full border-4 border-yellow-200 overflow-hidden shadow-lg">
                <img 
                    src={profileImage}
                    alt="Abrar Mojahid Rafi"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                </div>
            </div>

            {/* Text Content - Second on mobile, Left on desktop */}
            <div className="md:w-1/2 md:pr-8 order-last md:order-first">
                <h5 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-2 sm:mb-3 md:mb-4 text-center md:text-left">Hello, I'm</h5>
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-yellow-200 font-semibold mb-2 sm:mb-3 md:mb-4 text-center md:text-left">Abrar Mojahid Rafi</h1>
                <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 md:mb-10 text-justify md:text-justify">
                A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / React / Node.js / React Native and some other cool libraries and frameworks.
                </p>
            </div>
        </div>
    </>
  )
}

export default intro