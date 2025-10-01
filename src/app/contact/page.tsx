"use client";
export default function Contact() {
  return (
    <main className="w-full min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-12 text-center text-purple-600">
          Contact Us
        </h1>

        {/* Contact Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-xl h-fit shadow-md hover:shadow-lg transition-shadow bg-gradient-to-tr from-white to-blue-50">
            <h2 className="text-2xl  font-semibold text-gray-900 mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="purpose">Purpose</label>
                <select
                  id="purpose"
                  className="w-full border border-gray-300 text-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Purpose</option>
                  <option value="inquiry">Inquiry</option>
                  <option value="apply">Apply</option>
                  <option value="appointment">Book Appointment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white rounded-lg py-3 mt-2 hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-gradient-to-tr from-white to-green-50">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
            <div>
               {/* Address Card */}
            <div className="border-1 border-gray-200 mb-8 rounded-2xl shadow-md p-6 flex items-start gap-4 
                            transition transform hover:scale-105 hover:shadow-xl">
              <div className="bg-yellow-100 p-3 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-4.418 0-8 1.79-8 4v1h16v-1c0-2.21-3.582-4-8-4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-700 mb-1">Address</h3>
                <p className="text-gray-600">Sakoli ,</p>
                <p className="text-gray-600">Distt. Bhandara, Maharashtra,</p>
                <p className="text-gray-600">India</p>
              </div>
            </div>

            {/* Phone Numbers Card */}
            <div className="border-1 border-gray-200 mb-8 rounded-2xl shadow-md p-6 flex items-start gap-4 
                            transition transform hover:scale-105 hover:shadow-xl">
              <div className="bg-blue-100 p-3 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H9.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.997 1.997 0 0019.42 4H6.21l-.94-2H1v2h2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-700 mb-1">Phone Numbers</h3>
                <p className="text-gray-700">Main Office: +91 22 1234 5678</p>
                <p className="text-gray-700">Admissions: +91 22 1234 5679</p>
                <p className="text-gray-700">Emergency: +91 22 1234 5680</p>
              </div>
            </div>

            {/* Mail Card */}
            <div className="border-1 border-gray-200 mb-8 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex items-start gap-4">
              {/* Icon */}
              <div className="p-3 bg-green-100 rounded-xl shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    strokeWidth="1.5" stroke="currentColor" 
                    className="w-8 h-8 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>

              {/* Content */}
               <div>
                <h3 className="text-xl font-bold text-purple-700 mb-2">Email</h3>
                <p className="text-gray-600">info@college.edu</p>
                <p className="text-gray-600">admissions@college.edu</p>
                <p className="text-gray-600">support@college.edu</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="border-1 flex-col border-gray-200 mb-8 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex items-start gap-4">
                <p className="text-xl font-bold text-purple-700 mb-1">Location :</p>
               <div className="w-full h-70 rounded-2xl  overflow-hidden shadow-lg">
                
            
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.720310346799!2d79.96424321543105!3d21.076428100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b737add161da3%3A0x2120c1f6d03baf69!2sFuture%20Podar%20Learn%20School%20Jambhli%2C%20Sakoli!5e0!3m2!1sen!2sin!4v1696139530000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
               
            </div>
            </div>
            
           
            
          </div>
        </div>

         
      </div>
    </main>
  );
}
