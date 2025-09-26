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

            <div className="grid grid-cols sm:grid-cols-1 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
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

              
            </div>
          </section>

{/* Success Stories
 section */}
                <section className="bg-white py-16 px-4">
                  <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-semibold text-purple-700 mb-2">
                      Success Stories
                    </h2>
                    <h2 className="text-lg text-gray-700 font-medium">Hear from our parent and alumni community about their Podar experience</h2>
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
          

        


        


      </div>
    </main>
  )
}
