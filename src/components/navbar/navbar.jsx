import React from 'react'

const navbar = () => {

    const scrollToSection = (sectionId) => {
      const section  = document.getElementById(sectionId);
      if (section ) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <>
      <nav className="bg-gray-900 py-13 w-full z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <h4 className="text-white font-serif text-xl">Rafi</h4>
          </a>  
          <button 
            data-collapse-toggle="navbar-default" 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" 
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
            <ul className="font-serif flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-800 md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <li>
                <a 
                  href="#intro-section" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('intro-section');
                  }}
                  className="block py-2 px-3 text-white relative group md:p-0"
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
                    scrollToSection('about-section');
                  }}
                  className="block py-2 px-3 text-white relative group md:p-0"
                >
                  <b>ABOUT</b>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#work-section" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('work-section');
                  }}
                  className="block py-2 px-3 text-white relative group md:p-0"
                >
                  <b>WORKS</b>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#getintouch-section" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('getintouch-section');
                  }}
                  className="block py-2 px-3 text-white relative group md:p-0"
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

