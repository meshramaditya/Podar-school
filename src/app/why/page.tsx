import Image from "next/image";

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
        {/**/}
                <section className="bg-[#FAF9F6] py-16 px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold text-purple-700 mb-2">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              Our unique approach to education that ensures comprehensive development of every student
            </p>
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
