"use client";
export default function Contact() {
  return (
    <main className="w-full min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-12 text-center text-blue-600">
          Contact Us
        </h1>

        {/* Contact Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-gradient-to-tr from-white to-blue-50">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h2>
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
                className="w-full bg-blue-600 text-white rounded-lg py-3 mt-2 hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-gradient-to-tr from-white to-green-50">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Address:</span> 123 School Road, City, State, ZIP
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Phone:</span> +91 12345 67890
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Email:</span> info@ourschool.edu
            </p>
            <p className="text-gray-700">
              We are here to answer your questions and provide more information about our programs,
              admissions, and campus life.
            </p>
          </div>
        </div>

         
      </div>
    </main>
  );
}
