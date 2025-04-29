import React from 'react'

const getintouch = () => {
  return (
    <>
        <div id="getintouch-section" className="flex flex-col items-center justify-center min-h-screen bg-white font-serif px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-20">
            <div className="w-full max-w-4xl">
                {/* Contact Heading */}
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold mb-6 text-center md:text-left">
                    Contact Me
                    </h2>
                    <p className="text-gray-600 text-center md:text-left">
                    Get in touch for collaborations or inquiries
                    </p>
                </div>

                {/* Contact Form */}
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-100 hover:bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-100 hover:bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        />
                    </div>
                    </div>

                    {/* Phone Field */}
                    <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-100 hover:bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    />
                    </div>

                    {/* Subject Field */}
                    <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-100 hover:bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    />
                    </div>

                    {/* Message Field */}
                    <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-100 hover:bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    ></textarea>
                    </div>

                    {/* File Attachment */}
                    <div>
                    <label htmlFor="attachment" className="block text-gray-700 mb-2">Attach File (Optional)</label>
                    <div className="flex items-center">
                        <label className="flex flex-col items-center px-15 py-6 bg-gray-100 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <span className="mt-2 text-sm text-gray-600">Click to upload</span>
                        <input 
                            id="attachment" 
                            name="attachment" 
                            type="file" 
                            className="hidden" 
                        />
                        </label>
                        <span className="ml-4 text-sm text-gray-500">PDF, DOC, or JPG (Max 5MB)</span>
                    </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                    <button
                        type="submit"
                        className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold text-lg"
                    >
                        Send Message
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default getintouch