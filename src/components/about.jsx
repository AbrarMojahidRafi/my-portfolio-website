import React from 'react';

const about = () => {
  return (
    <>
        <div id="about-section" className="flex flex-col items-center justify-center min-h-screen bg-white font-serif px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-20">
            <div className="w-full max-w-4xl">
                {/* Skills Section */}
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold mb-6 text-center md:text-center">
                        Skills
                    </h2>
                    <div className="space-y-12">
                        {/* Programming Languages */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Programming Languages</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-800 text-center hover:bg-gray-200 transition-colors">
                                <p className="font-semibold">Python</p>
                            </div>
                            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-800 text-center hover:bg-gray-200 transition-colors">
                                <p className="font-semibold">Java</p>
                            </div>
                            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-800 text-center hover:bg-gray-200 transition-colors">
                                <p className="font-semibold">C</p>
                            </div>
                            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-800 text-center hover:bg-gray-200 transition-colors">
                                <p className="font-semibold">C++</p>
                            </div>
                            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-800 text-center hover:bg-gray-200 transition-colors">
                                <p className="font-semibold">JavaScript</p>
                            </div>
                            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-800 text-center hover:bg-gray-200 transition-colors">
                                <p className="font-semibold">PHP</p>
                            </div>
                            </div>
                        </div>

                        {/* Web Development */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Web Development</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-800 text-center hover:bg-gray-200 transition-colors">
                                <p className="font-semibold">HTML, CSS</p>
                            </div>
                            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-800 text-center hover:bg-gray-200 transition-colors">
                                <p className="font-semibold">Bootstrap, Tailwind</p>
                            </div>
                            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-800 text-center hover:bg-gray-200 transition-colors">
                                <p className="font-semibold">MERN Stack</p>
                                <p className='text-sm'>MongoDB, Express, React, and Node.js</p>
                            </div>
                            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-800 text-center hover:bg-gray-200 transition-colors">
                                <p className="font-semibold">Laravel</p>
                            </div>
                            </div>
                        </div>

                        {/* Libraries & Frameworks */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Libraries & Frameworks</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-800 text-center hover:bg-gray-200 transition-colors">
                                <p className="font-semibold">PySimpleGUI</p>
                            </div>
                            </div>
                        </div>

                        {/* Databases & CMS */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Databases & CMS</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-800 text-center hover:bg-gray-200 transition-colors">
                                <p className="font-semibold">MySQL</p>
                            </div>
                            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-800 text-center hover:bg-gray-200 transition-colors">
                                <p className="font-semibold">WordPress</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Competitive Programming Section */}
                <div className="py-12">
                    <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold mb-6 text-center md:text-center">
                        Competitive Programming
                    </h2>
                    <div className="space-y-6">
                        <a href="https://leetcode.com/u/abrar_mojahid_rafi/" target="_blank" rel="noopener noreferrer" className="block">
                            <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 hover:bg-gray-200 transition-colors">
                                <h3 className="text-xl text-gray-800 font-semibold mb-2">LeetCode</h3>
                                <p className="text-gray-600">7 Problems Solved</p>
                            </div>
                        </a>
                        <a href="https://www.codechef.com/users/dot_com2" target="_blank" rel="noopener noreferrer" className="block">
                            <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 hover:bg-gray-200 transition-colors">
                                <h3 className="text-xl text-gray-800 font-semibold mb-2">CodeChef</h3>
                                <p className="text-gray-600">400+ Problems Solved</p>
                            </div>
                        </a>
                        <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 hover:bg-gray-200 transition-colors">
                            <h3 className="text-xl text-gray-800 font-semibold mb-2">BeeCrowd</h3>
                            <p className="text-gray-600">98 Problems Solved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default about;