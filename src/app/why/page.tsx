export default function Why() {
  return (
    <main className="w-full min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-12 text-center text-blue-600">
          Why Choose Our College?
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
          Our college has been dedicated to providing high-quality education and fostering innovation for over 
          <span className="font-semibold text-blue-500"> 50 years</span>. We focus on holistic development, ensuring
          students excel academically, socially, and professionally.
        </p>

        {/* Reasons Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Reason 1 */}
          <div className="p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-gradient-to-tr from-white to-blue-50">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Experienced Faculty</h2>
            <p className="text-gray-700 leading-relaxed">
              Learn from highly qualified and dedicated educators who guide and mentor students
              to achieve their fullest potential.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-gradient-to-tr from-white to-green-50">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modern Facilities</h2>
            <p className="text-gray-700 leading-relaxed">
              State-of-the-art labs, smart classrooms, and recreational spaces create an environment
              conducive to learning and innovation.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-gradient-to-tr from-white to-yellow-50">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Student-Centric Programs</h2>
            <p className="text-gray-700 leading-relaxed">
              Our curriculum and extracurricular programs focus on holistic development, ensuring
              students grow academically, socially, and professionally.
            </p>
          </div>

          {/* Reason 4 */}
          <div className="p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-gradient-to-tr from-white to-purple-50">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Global Opportunities</h2>
            <p className="text-gray-700 leading-relaxed">
              Strong alumni network and international collaborations open doors to global career
              prospects and research opportunities.
            </p>
          </div>
        </div>

        {/* Closing */}
        <p className="text-center text-gray-600 mt-16 max-w-2xl mx-auto">
          Choosing our college means joining a vibrant community committed to excellence, innovation,
          and holistic growth.
        </p>
      </div>
    </main>
  )
}
