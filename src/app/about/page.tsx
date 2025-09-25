import { Eye, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamData = [
    {
      name: "Dr. Meera Kulkarni",
      role: "Principal, Podar School,(M.Ed, Ph.D. Education, 25+ years experience)",
      image: "/asset/parent_img/img4.jpg",
      description: "At Podar School, we believe that every child is unique and has the potential to excel. Our role is to nurture this potential through personalized attention, innovative teaching methods, and a caring environment. We are committed to developing not just academic achievers, but confident, compassionate, and responsible citizens of tomorrow.",
    },
    
    
  ]

 
export default function About() {
  return (
    <main className="w-full h-full bg-white ">
      <div className="w-full ">
         {/* about hero Section */}
        <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
          <Image
            src="/asset/Image/hero-bg1.jpg"
            alt="Hero Background"
            fill
            className="object-cover transition-all duration-1000"
            priority
          />
        
          {/* Overlay Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  flex flex-col items-center justify-center text-center px-4 
                  bg-gray-500/80 h-[100%] w-[100%] rounded-lg">
            <h1 className="text-7xl font-bold text-purple-700 mb-4">
              About Us
            </h1>
            <h2 className="text-5xl font-bold text-purple-700/90 mb-4">Podar Education Network</h2>
            <p className="text-2xl text-black font-semibold mb-8 max-w-2xl">
              Nearly a century of educational excellence, shaping millions of lives across India through quality education and strong values.
            </p>
              
            </div>
        </section>

        {/* Heading */}
        <section className="bg-white py-16 px-4"> 
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-5xl font-semibold text-purple-700 mb-2">
              Our Legacy
            </h1>
            <p className="text-lg text-gray-700 font-medium">
              Discover what makes us one of India's most trusted educational institutions
            </p>
      </div>
      <div className=" flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
        <Image 
          src="/asset/Image/hero-bg3.jpg"
          alt="Our Legacy"
          width={600}
          height={400}
          className="object-cover rounded-lg shadow-lg"
        />
        <div className="flex flex-col gap-4 max-w-xl">
          <p className="text-lg text-gray-900 font-medium mt-4">
          Founded by the visionary philanthropist Seth Anandilal Podar in 2025, Podar Education Network has grown from a single school to one of India's most respected educational institutions.
        </p>
        <p  className="text-lg text-gray-900 font-medium mt-4">
          Our journey began with a simple yet powerful vision: to provide quality education that nurtures not just academic excellence, but also character, values, and holistic development. Today, we proudly serve over 150,000 students across 150+ schools in India.
        </p>
        </div>
      </div>
        </section>

        {/* Vision & Mission Section */}
       <section className="bg-[#FAF9F6] py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-purple-700 mb-2">
            Our Vision & Mission
          </h2>
          <p className="text-gray-700 text-lg font-medium">
            Guiding principles that define Podar School's commitment to excellence
          </p>
        </div>

        {/* cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Vision Card */}
          <div className="group bg-white rounded-lg shadow-lg p-6 w-full sm:w-1/3 transition transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 text-4xl font-semibold text-purple-700 mb-4
                              transition-all duration-300
                              group-hover:bg-yellow-100
                              group-hover:shadow-[0_0_20px_5px_rgba(255,255,0,0.5)]">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-2xl mt-4 font-bold text-gray-800 mb-3">Our Vision</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              To be a leading institution that nurtures students to reach their full potential.
              To foster a culture of innovation, creativity, and critical thinking.
              To develop responsible citizens who contribute positively to society.
              To provide holistic education balancing academics, sports, and arts.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-white rounded-lg shadow-lg p-6 w-full sm:w-1/3 transition transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 text-4xl font-semibold text-purple-700 mb-4
                              transition-all duration-300
                              group-hover:bg-yellow-100
                              group-hover:shadow-[0_0_20px_5px_rgba(255,255,0,0.5)]">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-2xl mt-4 font-bold text-gray-800 mb-3">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              To deliver high-quality education through a student-centered approach.
              To encourage lifelong learning and curiosity.
              To build character, leadership, and values in every student.
              To create a safe, inclusive, and supportive environment for all learners.
              To actively engage parents, community, and staff in the educational journey.
            </p>
          </div>
        </div>
      </section>

        {/* Timeline Section */}
         <section className="max-w-4xl mx-auto py-12 px-4">
          <h2 className="text-4xl mb-6 text-center font-semibold text-purple-700">
            Our Journey Through Time
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Key milestones in our educational journey spanning nearly a century
          </p>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 w-1 h-full bg-black"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex items-start gap-6">
                {/* Bullet */}
                <div className="flex flex-col items-center relative z-10">
                  <div className="w-4 h-4 bg-black rounded-full shadow transition-transform duration-300 hover:scale-125"></div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 flex-1 hover:shadow-lg transition">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                    1927
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    Seth Anandilal Podar founded the first Podar school.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center relative z-10">
                  <div className="w-4 h-4 bg-black rounded-full shadow transition-transform duration-300 hover:scale-125"></div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 flex-1 hover:shadow-lg transition">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                    1950
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    Expansion to multiple cities across India.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center relative z-10">
                  <div className="w-4 h-4 bg-black rounded-full shadow transition-transform duration-300 hover:scale-125"></div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 flex-1 hover:shadow-lg transition">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                    1990
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    Introduction of modern teaching methodologies.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center relative z-10">
                  <div className="w-4 h-4 bg-black rounded-full shadow transition-transform duration-300 hover:scale-125"></div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 flex-1 hover:shadow-lg transition">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                    2010
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    Digital learning integration across all campuses.
                  </p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center relative z-10">
                  <div className="w-4 h-4 bg-black rounded-full shadow transition-transform duration-300 hover:scale-125"></div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 flex-1 hover:shadow-lg transition">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                    2020
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    Virtual learning platform launch during pandemic.
                  </p>
                </div>
              </div>

              {/* Item 6 */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center relative z-10">
                  <div className="w-4 h-4 bg-black rounded-full shadow transition-transform duration-300 hover:scale-125"></div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 flex-1 hover:shadow-lg transition">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                    2024
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    Celebrating 97 years of educational excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

{/*From the Principal’s Desk*/}
<section className="bg-white py-16 px-4">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-purple-700 mb-2">
          From the Principal’s Desk
        </h2>
      </div>

      {/* Team Cards */}
      <div className="flex flex-col items-center gap-8">
        {teamData.map((person, idx) => (
          <div
            key={idx}
            className="bg-[#FAF9F6] flex items-start rounded-lg shadow-lg w-[70%] p-6 transition hover:shadow-2xl"
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                src={person.image}
                alt={person.name}
                width={240}
                height={280}
                className="object-cover h-[280px] w-[240px] rounded-md shadow"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col ml-6">
              <h3 className="text-2xl font-bold text-gray-800">{person.name}</h3>
              <p className="text-base text-purple-600 font-semibold mb-3">
                {person.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {person.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

      </div>
    </main>
  )
}
