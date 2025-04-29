import React from 'react';
import profileImage from '../assets/bracuSmile.jpg'; // Adjust path as needed


const intro = () => {
  return (
    <>
        <div id="intro-section" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 font-serif px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
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
                {/* Email Address */}
                <div className="flex items-center justify-center md:justify-start space-x-2">
                    <svg className="w-5 h-5 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <a 
                        href="mailto:abrar.mojahid.rafi1@gmail.com" 
                        className="text-lg text-yellow-200 hover:underline transition-colors"
                    >
                        abrar.mojahid.rafi1@gmail.com
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default intro