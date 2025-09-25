"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import WhyCard from "@/components/WhyCard"
import { GraduationCap, Award, BookOpen, Users ,School} from "lucide-react" // or any icon lib you like
import GlanceCard from "@/components/GlanceCard"
export default function Home() {
  // Hero images for slideshow
  const images = [
    "/asset/Image/hero-bg.svg",
    "/asset/Image/hero-bg1.jpg",
    "/asset/Image/hero-bg2.jpg",
    "/asset/Image/hero-bg3.jpg",
    "/asset/Image/hero-bg4.jpg",
    "/asset/Image/hero-bg5.jpg",
  ]; // Add all your images here

  // Announcements data
  const announcements = [
    { id: 1, title: "Admission Open for 2024-25", subtitle: "Early bird applications now being accepted", date: "24 Oct 2025", tags: ["Admissions", "Urgent"] },
    { id: 2, title: "Admission Open for 2024-25", subtitle: "Early bird applications now being accepted", date: "23 Oct 2025", tags: ["Admissions", "Urgent"] },
    { id: 3, title: "Admission Open for 2024-25", subtitle: "Early bird applications now being accepted", date: "22 Oct 2025", tags: ["Admissions", "Urgent"] },
    { id: 4, title: "Admission Open for 2024-25", subtitle: "Early bird applications now being accepted", date: "21 Oct 2025", tags: ["Admissions", "Urgent"] },
    { id: 5, title: "Admission Open for 2024-25", subtitle: "Early bird applications now being accepted", date: "20 Oct 2025", tags: ["Admissions", "Urgent"] },
    { id: 6, title: "Scholarship Applications Open", subtitle: "Merit-based scholarships available for eligible students", date: "19 Oct 2025", tags: ["Admissions"] },
    { id: 7, title: "Campus Tour Schedule Updated", subtitle: "New timings for weekend campus visits", date: "18 Oct 2025", tags: ["Urgent"] },
  ];

  // Calendar icon component
  const CalendarIcon = () => (
    <svg className="w-3 h-3 opacity-60" viewBox="0 0 12 12" fill="currentColor">
      <path d="M3.5 0C3.22386 0 3 0.223858 3 0.5V1H2C0.895431 1 0 1.89543 0 3V10C0 11.1046 0.895431 12 2 12H10C11.1046 12 12 11.1046 12 10V3C12 1.89543 11.1046 1 10 1H9V0.5C9 0.223858 8.77614 0 8.5 0C8.22386 0 8 0.223858 8 0.5V1H4V0.5C4 0.223858 3.77614 0 3.5 0ZM1 4V10C1 10.5523 1.44772 11 2 11H10C10.5523 11 11 10.5523 11 10V4H1Z"/>
    </svg>
  );

  const [currentImage, setCurrentImage] = useState(0);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  //facilities data
  const facilities = [
    { id: 1, title: "Excellence in Education", desc: "Over 150 years of educational excellence across India" , image: "/asset/facility_img/facility1.svg" },
    { id: 2, title: "Sports & Fitness", desc: "World-class sports infrastructure to keep students active", image: "/asset/facility_img/facility1.svg" },
    { id: 3, title: "Modern Labs", desc: "Well-equipped labs for science, robotics, and AI learning", image: "/asset/facility_img/facility1.svg" },
    { id: 4, title: "Library & Resources", desc: "Extensive digital and physical library collections", image: "/asset/facility_img/facility1.svg" },
    { id: 5, title: "Creative Arts", desc: "Nurturing creativity with music, dance, and theater", image: "/asset/facility_img/facility1.svg" },
    { id: 6, title: "Technology Integration", desc: "Smart classrooms with interactive learning tools", image: "/asset/facility_img/facility1.svg"},
    { id: 7, title: "Global Exposure", desc: "Exchange programs with international schools", image: "/asset/facility_img/facility1.svg" },
    { id: 8, title: "Safe Campus", desc: "Highly secure and student-friendly environment" , image: "/asset/facility_img/facility1.svg"},
    { id: 9, title: "Career Guidance", desc: "Personalized mentoring and counseling sessions", image: "/asset/facility_img/facility1.svg" },
  ];

  const initialCount = 6;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleShowMore = () => setVisibleCount(facilities.length);
  const handleShowLess = () => setVisibleCount(initialCount);

  //review date of user
  const reviews = [
    {
      id: 1,
      rating: 5,
      comment:
        "Podar School has given my child an amazing environment to learn and grow. The teachers are very supportive and encouraging!",
      name: "Mrs. Anjali Sharma",
      image: "/asset/parent_img/img1.jpg",
    },
    {
      id: 2,
      rating: 4,
      comment:
        "The facilities are excellent and the extracurricular activities help in overall personality development.",
      name: "Mr. Rajesh Kumar",
      image: "/asset/parent_img/img3.jpg",
    },
    {
      id: 3,
      rating: 5,
      comment:
        "We are extremely happy with the progress of our child. The school truly focuses on holistic education.",
      name: "Mrs. Kavita Mehta",
      image: "/asset/parent_img/img2.jpg",
    },
    {
      id: 4,
      rating: 4,
      comment:
        "Great focus on academics as well as extracurricular activities. My son enjoys going to school every day.",
      name: "Mr. Manoj Patel",
      image: "/asset/parent_img/img5.jpg",
    },
    {
      id: 5,
      rating: 5,
      comment:
        "The teachers are caring and pay attention to each child individually. I highly recommend Podar School.",
      name: "Mrs. Neha Desai",
      image: "/asset/parent_img/img4.jpg",
    },
    {
      id: 6,
      rating: 4,
      comment:
        "Modern classrooms, digital tools, and supportive teachers make this school stand out.",
      name: "Mr. Rohit Verma",
      image: "/asset/parent_img/img3.jpg",
    },
    {
      id: 7,
      rating: 5,
      comment:
        "Podar School has provided a perfect balance of academics and life skills for my daughter.",
      name: "Mrs. Priya Iyer",
      image: "/asset/parent_img/img1.jpg",
    },
    {
      id: 8,
      rating: 5,
      comment:
        "Excellent infrastructure and an amazing community. Truly happy with the school.",
      name: "Mr. Sameer Khan",
      image: "/asset/parent_img/img5.jpg",
    },
    {
      id: 9,
      rating: 4,
      comment:
        "The school has exceeded our expectations. My child is more confident and curious than ever before.",
      name: "Mrs. Sunita Reddy",
      image: "/asset/parent_img/img4.jpg",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={images[currentImage]}
          alt="Hero Background"
          fill
          className="object-cover transition-all duration-1000"
          priority
        />

        {/* Overlay Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                flex flex-col items-center justify-center text-center px-4 
                bg-gray-400/80 h-[80%] w-[70%] rounded-lg">
          <h1 className="text-5xl font-bold text-purple-700 00 mb-4">
            Shaping Future Leaders Through
          </h1>
          <h2 className="text-4xl font-bold text-purple-700/90 mb-4">Quality Education</h2>
          <p className="text-2xl text-black font-semibold mb-8 max-w-2xl">
            Welcome to Podar School, where tradition meets innovation to nurture
            young minds and build character for tomorrow&apos;s challenges.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/contact">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Apply For Admission
            </button>
          </Link>
          <Link href="/gallery">
            <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition">
              Virtual Tour
            </button>
          </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Podar Section */}
      <section className="bg-white py-16 px-4">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold text-purple-700 mb-2">
          Why Choose Podar School
        </h1>
        <p className="text-lg text-gray-700 font-medium">
          Discover what makes us one of India&apos;s most trusted educational institutions
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <WhyCard
          icon={<GraduationCap className="w-12 h-12 text-purple-600 transition-all duration-300 hover:bg-yellow-100 hover:shadow-[0_0_15px_3px_rgba(255,255,0,0.5)]" />}
          title="Excellence in Education"
          description="Over 5+ years of educational excellence across India"
        />
        <WhyCard
          icon={<Award className="w-12 h-12 text-yellow-500 transition-all duration-300 hover:bg-yellow-100 hover:shadow-[0_0_15px_3px_rgba(255,255,0,0.5)]" />}
          title="Awards & Recognition"
          description="Recognized nationally for academic excellence"
        />
        <WhyCard
          icon={<BookOpen className="w-12 h-12 text-green-600 transition-all duration-300 hover:bg-yellow-100 hover:shadow-[0_0_15px_3px_rgba(255,255,0,0.5)]" />}
          title="Holistic Learning"
          description="Balancing academics, sports, and cultural activities"
        />
        <WhyCard
          icon={<Users className="w-12 h-12 text-blue-600 transition-all duration-300 hover:bg-yellow-100 hover:shadow-[0_0_15px_3px_rgba(255,255,0,0.5)]" />}
          title="Community & Values"
          description="Building responsible citizens with strong values"
        />
      </div>
    </section>

      {/* Podar School at a Glance */}
      <section className="bg-[#FAF9F6] py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-purple-700 mb-2">
          Podar School at a Glance
        </h2>
        <p className="text-lg text-gray-700 font-medium">
          Our impressive numbers reflect our commitment to educational excellence
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto ">
        <GlanceCard
          icon={<BookOpen className="w-7 h-7 " />}
          number="300+"
          title="Total Students"
          description="Bright minds learning together"
        />
        <GlanceCard
          icon={<Users className="w-7 h-7" />}
          number="25+"
          title="Expert Teachers"
          description="Dedicated educators"
        />
        <GlanceCard
          icon={<School className="w-7 h-7" />}
          number="20+"
          title="Smart Classrooms"
          description="Modern learning spaces"
        />
        <GlanceCard 
          icon={<Award  className="w-7 h-7 " />}
          number="25+"
          title="Activities"
          description="Diverse learning experiences"
        />
      </div>
    </section>

      {/* Announcements and Quick Actions */}
       <section className="bg-white py-16 w-full">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Latest Announcements */}
        <div className="flex-1 bg-[#FAF9F6] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-500 mb-6">Latest Announcements</h2>
          <div className="max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-md">
            {announcements.map((a, idx) => (
              <div key={a.id} className={`flex items-start gap-4 py-4 ${idx !== announcements.length - 1 ? "border-b border-gray-300" : ""}`}>
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 text-xl">📢</div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{a.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{a.subtitle}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400"><CalendarIcon />{a.date}</div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  {a.tags.map(tag => (
                    <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium ${tag === 'Admissions' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex-1 bg-[#FAF9F6] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-500 mb-6">Quick Actions</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-1">Admission Inquiry</h3>
              <p className="text-xs text-gray-600 mb-3">Get information about our admission process</p>
              
              <Link href="/contact">
            <button className="bg-green-600 text-xs font-medium text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
              Start Application
            </button>
          </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-1">Contact Information</h3>
              <div className="text-xs text-gray-600 mb-3 leading-relaxed">
                📍 ICT Education Street, Mumbai<br />
                📞 +91 1234567890
              </div>
              <a href="#" className="text-white bg-gray-400 py-2 px-4  text-xs font-medium hover:bg-gray-500 rounded-lg">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Facilities Section */}
      <section className="bg-[#FAF9F6] py-16 px-4">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold text-purple-700 mb-2">
          World-Class Facilities
        </h1>
        <p className="text-lg text-gray-700 font-medium">
          Modern infrastructure designed to enhance learning and development
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {facilities.slice(0, visibleCount).map((facility) => (
          <div
            key={facility.id}
            className="bg-white border rounded-lg shadow p-6 text-center transition hover:scale-105 flex flex-col items-start"
          >
            <div className="bg-gray-200 rounded-lg w-80 h-60 mb-4">
              {/* Image placeholder */}
              <img src={facility.image} alt={facility.title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <h2 className="font-bold mb-2 text-gray-800 ">
              {facility.title}
            </h2>
            <p className="text-gray-600 text-sm items-start">{facility.desc}</p>
          </div>
        ))}
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center mt-10">
        {visibleCount < facilities.length ? (
          <button
            onClick={handleShowMore}
            className="bg-purple-600 text-white px-6 py-2 rounded shadow hover:bg-purple-700 transition"
          >
            View More Facilities
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="bg-gray-600 text-white px-6 py-2 rounded shadow hover:bg-gray-700 transition"
          >
            Show Less
          </button>
        )}
      </div>
    </section>

    {/* community reviews */}
      <section className="bg-white py-16 px-4">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold text-purple-700 mb-2">
          What Our Community Says
        </h2>
        <p className="text-lg text-gray-700 font-medium">
          Hear from parents about their experience with Podar School
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {(showAll ? reviews : reviews.slice(0, 6)).map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow p-6 flex flex-col"
          >
            {/* Rating */}
            <div className="flex mb-3">
              {"⭐".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>

            {/* Comment */}
            <p className="text-gray-600 mb-6 text-left">"{review.comment}"</p>

            {/* Parent Info */}
            <div className="flex items-center space-x-3 mt-auto">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="font-semibold text-gray-800">{review.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* View More / Show Less button */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          {showAll ? "Show Less" : "View More"}
        </button>
      </div>
    </section>

     

    </main>
  );
}
