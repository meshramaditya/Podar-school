import Image from "next/image";
import { BookOpen, Users, Building2, HeartHandshake } from "lucide-react"; // or any icon lib you like

export default function Why() {
  return (
    <main className="w-full h-full bg-white ">
      <div className="w-full">
        {/* why hero Section */}
                <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/asset/Image/hero-bg2.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover transition-all duration-1000"
                    priority
                  />
                
                  {/* Overlay Text */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          flex flex-col items-center justify-center text-center px-4 
                          bg-gray-500/80 h-[100%] w-[100%] rounded-lg">
                    <h1 className="text-7xl w-1/2 font-bold text-purple-700 mb-4">
                     Why Choose Podar School ?
                    </h1>
                    
                    <p className="text-2xl text-black font-semibold mb-8 max-w-2xl">
                      Discover what makes us the preferred choice for thousands of families seeking quality education and holistic development.
                    </p>
                      
                    </div>
                </section>

        {/* card section */}
                <section className="bg-white py-16 px-4">
                  <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-semibold text-purple-700 mb-2">
                      Our achievements and impact across India
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl">
                      <h3 className="text-3xl font-bold text-purple-700 mb-2">150+</h3>
                      <p className="text-lg font-semibold text-gray-800 mb-1">Schools Nationwide</p>
                      <p className="text-gray-600 text-sm">Across major cities in India</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl">
                      <h3 className="text-3xl font-bold text-purple-700 mb-2">500K+</h3>
                      <p className="text-lg font-semibold text-gray-800 mb-1">Alumni</p>
                      <p className="text-gray-600 text-sm">Successful professionals globally</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl">
                      <h3 className="text-3xl font-bold text-purple-700 mb-2">98%</h3>
                      <p className="text-lg font-semibold text-gray-800 mb-1">Success Rate</p>
                      <p className="text-gray-600 text-sm">Board examination results</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl">
                      <h3 className="text-3xl font-bold text-purple-700 mb-2">25+</h3>
                      <p className="text-lg font-semibold text-gray-800 mb-1">Years</p>
                      <p className="text-gray-600 text-sm">Average teaching experience</p>
                    </div>
                  </div>
                </section>

        {/*What Sets Us Apart*/}
               <section className="bg-[#FAF9F6] py-16 px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-4xl font-semibold text-purple-700 mb-2">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-gray-700 font-medium">
                Excellence in education through balanced growth and strong values
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Card 1 - Holistic Development */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl group">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-600 transition relative">
                  <BookOpen className="w-8 h-8 text-purple-600 group-hover:text-white transition group-hover:drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Holistic Development
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Perfect balance of academics</li>
                  <li>Sports, arts, & character building</li>
                  <li>Value-based education</li>
                  <li>Leadership skills</li>
                </ul>
              </div>

              {/* Card 2 - Experienced Faculty */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl group">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-600 transition relative">
                  <Users className="w-8 h-8 text-purple-600 group-hover:text-white transition group-hover:drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Experienced Faculty
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>M.Ed / Ph.D qualified teachers</li>
                  <li>Regular training programs</li>
                  <li>Student-centric approach</li>
                  <li>Personal mentorship</li>
                </ul>
              </div>

              {/* Card 3 - Modern Infrastructure */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl group">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-600 transition relative">
                  <Building2 className="w-8 h-8 text-purple-600 group-hover:text-white transition group-hover:drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Modern Infrastructure
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Smart classrooms & digital labs</li>
                  <li>Well-equipped libraries</li>
                  <li>Sports & cultural facilities</li>
                  <li>Latest educational tech</li>
                </ul>
              </div>

              {/* Card 4 - Values & Ethics */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl group">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-600 transition relative">
                  <HeartHandshake className="w-8 h-8 text-purple-600 group-hover:text-white transition group-hover:drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Values & Ethics
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Character building</li>
                  <li>Discipline & respect</li>
                  <li>Responsibility & integrity</li>
                  <li>Strong moral foundation</li>
                </ul>
              </div>
            </div>
          </section>

        {/*Academic Excellence*/}
               <section className="bg-white py-16 px-4">
              <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-4xl font-semibold text-purple-700 mb-2">
                  Academic Excellence
                </h2>
                <p className="text-lg text-gray-700 font-medium">
                  Proven track record of academic success and student achievement
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Card 1 */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg p-8 text-center transition transform hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle cx="48" cy="48" r="40" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#9333EA"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="251"
                        strokeDashoffset="5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-purple-700">
                      98%
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Outstanding Results</h3>
                  <p className="text-gray-600">Board exam pass rate with distinction</p>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg p-8 text-center transition transform hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle cx="48" cy="48" r="40" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#9333EA"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="251"
                        strokeDashoffset="37"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-purple-700">
                      85%
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Global Recognition</h3>
                  <p className="text-gray-600">Students accepted in top universities worldwide</p>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg p-8 text-center transition transform hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle cx="48" cy="48" r="40" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#9333EA"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="251"
                        strokeDashoffset="0"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-purple-700">
                      100%
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Career Guidance</h3>
                  <p className="text-gray-600">Personalized career counseling for all students</p>
                </div>
              </div>
            </section>


        {/* Success Stories section */}
                <section className="bg-[#FAF9F6] py-16 px-4 overflow-hidden group">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold text-purple-700 mb-2">
              Success Stories
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              Hear from our parent and alumni community about their Podar experience
            </p>
          </div>

          {/* Marquee wrapper */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 w-max mg-2 mb-2 animate-marquee group-hover:pause">
              {/* Duplicate set of cards for seamless loop */}
              {[...Array(2)].map((_, dup) => (
                <div key={dup} className="flex gap-6">
                  {/* Card 1 */}
                  <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm min-w-[300px]">
                    <p className="text-gray-700 italic mb-4">
                      "The transformation in my daughter's confidence and academic
                      performance has been remarkable. Podar's holistic approach
                      really works."
                    </p>
                    <h4 className="font-bold text-purple-700">Rajesh Mehta</h4>
                    <p className="text-sm text-gray-600">Parent • Software Engineer</p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm min-w-[300px]">
                    <p className="text-gray-700 italic mb-4">
                      "Podar gave me the foundation for success. The values and
                      knowledge I gained here shaped my entire career in engineering."
                    </p>
                    <h4 className="font-bold text-purple-700">Sneha Patel</h4>
                    <p className="text-sm text-gray-600">Alumni • IIT Bombay Graduate</p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm min-w-[300px]">
                    <p className="text-gray-700 italic mb-4">
                      "What sets Podar apart is their focus on character development
                      alongside academics. My son has become more responsible and
                      compassionate."
                    </p>
                    <h4 className="font-bold text-purple-700">Dr. Kavita Singh</h4>
                    <p className="text-sm text-gray-600">
                      Parent • Medical Professional
                    </p>
                  </div>

                   {/* Card 4 */}
                  <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm min-w-[300px]">
                    <p className="text-gray-700 italic mb-4">
                      "Podar gave me the foundation for success. The values and
                      knowledge I gained here shaped my entire career in engineering."
                    </p>
                    <h4 className="font-bold text-purple-700">Sneha Patel</h4>
                    <p className="text-sm text-gray-600">Alumni • IIT Bombay Graduate</p>
                  </div>

                  {/* Add more cards up to 8... */}
                </div>
              ))}
            </div>
          </div>
        </section>




          

        


        


      </div>
    </main>
  )
}
