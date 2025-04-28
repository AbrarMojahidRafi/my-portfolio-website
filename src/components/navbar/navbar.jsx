import React from 'react'

const navbar = () => {

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 py-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse"> 
          <h4 className="text-white font-serif">Rafi</h4>
        </a>  
        <button 
          data-collapse-toggle="navbar-default" 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-default" 
          aria-expanded="false" 
          onClick={() => document.getElementById('navbar-default').classList.toggle('hidden')}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium font-serif flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a 
                href="#" 
                className="block py-2 px-3 text-white relative group md:p-0 dark:text-white"
              >
                <b>HOME</b> 
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#about-section"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAbout();
                }}
                className="block py-2 px-3 text-gray-900 relative group md:p-0 dark:text-white"
              >
                <b>ABOUT</b>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block py-2 px-3 text-gray-900 relative group md:p-0 dark:text-white"
              >
                <b>WORKS</b>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block py-2 px-3 text-gray-900 relative group md:p-0 dark:text-white"
              >
                <b>PRICING</b>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block py-2 px-3 text-gray-900 relative group md:p-0 dark:text-white"
              >
                <b>GET IN TOUCH</b>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>
  )
}

export default navbar

