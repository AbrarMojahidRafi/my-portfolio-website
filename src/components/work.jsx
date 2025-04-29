import React from 'react'

const work = () => {
  return (
    <>
        <div id="work-section" className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white font-serif px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-20">
            <div className="w-full max-w-4xl">
                {/* Title Section */}
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">
                        My Recent Work
                    </h2>
                    <p className="text-gray-300 text-center md:text-left">
                        Here are a few past design projects I've worked on. Want to see more? Email me.
                    </p>
                </div>

                {/* JS-DOM Related Projects */}
                <div className="mb-12">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">
                        JS-DOM Related
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a href="https://random-password-generator-js-rafi.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                            <p className="font-semibold">Random Password Generator</p>
                            <p className="text-gray-400 text-sm">random-password-generator-js-rafi.netlify.app/</p>
                        </a>
                        <a href="https://number-to-roman-converter-js-rafi.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                            <p className="font-semibold">Number to Roman Converter</p>
                            <p className="text-gray-400 text-sm">number-to-roman-converter-js-rafi.netlify.app/</p>
                        </a>
                        <a href="https://stopwatch-using-javascript-rafi.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                            <p className="font-semibold">Stopwatch</p>
                            <p className="text-gray-400 text-sm">stopwatch-using-javascript-rafi.netlify.app/</p>
                        </a>
                        <a href="https://bulb-on-off-javascript-abrarmojahidra.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                            <p className="font-semibold">Bulb On Off</p>
                            <p className="text-gray-400 text-sm">bulb-on-off-javascript-abrarmojahidra.netlify.app/</p>
                        </a>
                        <a href="https://word-and-character-counter-rafi.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                            <p className="font-semibold">Word and Character Counter</p>
                            <p className="text-gray-400 text-sm">word-and-character-counter-rafi.netlify.app/</p>
                        </a>
                        <a href="https://temperature-converter-abrarmojahidraf.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                            <p className="font-semibold">Temperature Converter</p>
                            <p className="text-gray-400 text-sm">temperature-converter-abrarmojahidraf.netlify.app/</p>
                        </a>
                        <a href="https://digital-clock-js-abrarmojahidrafi.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                            <p className="font-semibold">Digital Clock</p>
                            <p className="text-gray-400 text-sm">digital-clock-js-abrarmojahidrafi.netlify.app/</p>
                        </a>
                        <a href="https://age-calculator-js-abrarmojahidrafi.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                            <p className="font-semibold">Age Calculator</p>
                            <p className="text-gray-400 text-sm">age-calculator-js-abrarmojahidrafi.netlify.app/</p>
                        </a>
                    </div>
                </div>

                {/* Python-PySimpleGUI Projects */}
                <div className="mb-12">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">
                        Python-PySimpleGUI
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a href="https://github.com/AbrarMojahidRafi/CGPA_Calculator" target="_blank" rel="noopener noreferrer" className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                            <p className="font-semibold">CGPA Calculator App</p>
                            <p className="text-gray-400 text-sm">github.com/AbrarMojahidRafi/CGPA_Calculator</p>
                        </a>
                        <a href="https://github.com/AbrarMojahidRafi/Todo-App-Python" target="_blank" rel="noopener noreferrer" className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                            <p className="font-semibold">To-Do App</p>
                            <p className="text-gray-400 text-sm">github.com/AbrarMojahidRafi/Todo-App-Python</p>
                        </a>
                    </div>
                </div>

                {/* Database Projects */}
                <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">
                        Database Projects
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                        <a href="https://github.com/AbrarMojahidRafi/E-Learning-Platform" target="_blank" rel="noopener noreferrer" className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                            <p className="font-semibold">E Learning Platform (HTML, CSS, Bootstrap, PHP, MySQL)</p>
                            <p className="text-gray-400 text-sm">github.com/AbrarMojahidRafi/E-Learning-Platform</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default work