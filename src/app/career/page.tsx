"use client";
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Users, Building2, ShieldCheck } from "lucide-react";
import { DollarSign, Heart, BookOpenCheck, Clock, ArrowUp } from "lucide-react";

export default function Careers() {

  const router = useRouter();

  const jobs = [
  {
    title: 'Primary School Teacher',
    urgent: true,
    category: 'Primary Education',
    type: 'Full-time',
    location: 'Mumbai',
    experience: '2-5 years experience required',
    description:
      'We are looking for an enthusiastic primary school teacher to join our team. The ideal candidate should have experience in elementary education and a passion for nurturing young minds.',
    requirements: [
      "Bachelor's in Education (B.Ed) or equivalent",
      '2+ years of teaching experience',
      'Strong communication skills',
      'Patience and creativity with children'
    ]
  },
  {
    title: 'Science Teacher (Secondary)',
    urgent: false,
    category: 'Secondary Education',
    type: 'Full-time',
    location: 'Mumbai',
    experience: '3-7 years experience required',
    description:
      'Join our science department to inspire and educate students in physics, chemistry, and biology. Looking for someone with strong subject knowledge and innovative teaching methods.',
    requirements: [
      "Master's in Science + B.Ed",
      '3+ years secondary teaching experience',
      'Lab management experience',
      'Knowledge of CBSE curriculum'
    ]
  },
  {
    title: 'Math Teacher',
    urgent: false,
    category: 'Secondary Education',
    type: 'Full-time',
    location: 'Mumbai',
    experience: '2-6 years experience required',
    description:
      'Deliver engaging mathematics lessons and prepare students for exams. We need someone who can make complex mathematical concepts accessible and interesting.',
    requirements: [
      "Master's in Mathematics + B.Ed",
      '2+ years of teaching experience',
      'Strong analytical skills',
      'Experience with competitive exam preparation'
    ]
  },
  {
    title: 'Librarian',
    urgent: true,
    category: 'Administrative',
    type: 'Part-time',
    location: 'Mumbai',
    experience: '1-3 years experience required',
    description:
      'Manage library resources, assist students, and organize events. Perfect for someone passionate about books and student development.',
    requirements: [
      'Library Science degree',
      '1+ years library experience',
      'Digital cataloging skills',
      'Event organization experience'
    ]
  },
  {
    title: 'Art Teacher',
    urgent: false,
    category: 'Arts & Creativity',
    type: 'Full-time',
    location: 'Mumbai',
    experience: '1-4 years experience required',
    description:
      'Encourage creativity and artistic expression in students through engaging art lessons and projects.',
    requirements: [
      "Bachelor's in Fine Arts or equivalent",
      '1+ years teaching experience',
      'Knowledge of various art techniques',
      'Patience and creativity'
    ]
  },
  {
    title: 'Sports Coach',
    urgent: true,
    category: 'Physical Education',
    type: 'Full-time',
    location: 'Mumbai',
    experience: '2-6 years experience required',
    description:
      'Develop students’ athletic skills and promote teamwork, health, and fitness through structured sports programs.',
    requirements: [
      "Bachelor's in Physical Education or equivalent",
      '2+ years coaching experience',
      'Knowledge of multiple sports',
      'Motivational and leadership skills'
    ]
  }
];

  const LocationIcon = () => (
    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

   const cards = [
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600 group-hover:text-white transition" />,
      title: "Make a Real Impact",
      description: "Shape the future by educating and inspiring the next generation of leaders."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600 group-hover:text-white transition" />,
      title: "Prestigious Institution",
      description: "Be part of India's most respected educational network with 150+ schools."
    },
    {
      icon: <Building2 className="w-8 h-8 text-purple-600 group-hover:text-white transition" />,
      title: "Innovative Teaching",
      description: "Use modern technology and progressive teaching methods in your classroom."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-600 group-hover:text-white transition" />,
      title: "Job Security",
      description: "Stable employment with a financially strong and growing organization."
    }
  ];

  const perks = [
    {
      icon: <DollarSign className="w-8 h-8 text-purple-600 transition group-hover:text-yellow-400 drop-shadow-lg" />,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses"
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-600 transition group-hover:text-yellow-400 drop-shadow-lg" />,
      title: "Health Benefits",
      description: "Comprehensive medical insurance for you and your family"
    },
    {
      icon: <BookOpenCheck className="w-8 h-8 text-purple-600 transition group-hover:text-yellow-400 drop-shadow-lg" />,
      title: "Professional Development",
      description: "Continuous learning opportunities and training programs"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600 transition group-hover:text-yellow-400 drop-shadow-lg" />,
      title: "Work-Life Balance",
      description: "Flexible schedules and ample vacation time"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600 transition group-hover:text-yellow-400 drop-shadow-lg" />,
      title: "Collaborative Environment",
      description: "Work with passionate educators in a supportive team"
    },
    {
      icon: <ArrowUp className="w-8 h-8 text-purple-600 transition group-hover:text-yellow-400 drop-shadow-lg" />,
      title: "Career Growth",
      description: "Clear advancement paths and leadership opportunities"
    }
  ];

  return (
    <main className="w-full min-h-screen bg-white">
      <div className='w-full'>
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/asset/Image/hero-bg4.jpg"
          alt="Hero Background"
          fill
          className="object-cover transition-all duration-1000"
          priority
        />

        {/* Overlay Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        flex flex-col items-center justify-center text-center px-4 
                        bg-gray-500/80 h-full w-full rounded-lg">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-purple-700 mb-4">
            Build Your Career at
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-purple-700/90 mb-4">
            Podar School
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-black font-semibold mb-8 max-w-2xl">
            Join a community of passionate educators dedicated to shaping young minds and building a brighter future through quality education.
          </p>

        </div>
      </section>


     {/* Why Choose Us Section */}
          <section className="bg-white py-16 px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-4xl font-semibold text-purple-700 mb-4">
                Why Choose Podar School?
              </h2>
              <p className="text-lg text-gray-700 font-medium">
                Discover the advantages of being part of one of India's most prestigious educational institutions
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl group"
                >
                  {/* Icon Container */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-700 mb-4
                                  transition-all duration-300
                                  group-hover:bg-yellow-100
                                  group-hover:shadow-[0_0_20px_5px_rgba(255,255,0,0.6)] mx-auto">
                    <span className="mx-auto">{card.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{card.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm text-center">{card.description}</p>
                </div>
              ))}
            </div>
          </section>

      {/* Jobs Section */}
      <section className="py-16 px-6 bg-[#FAF9F6]">
            <h1 className="text-4xl font-semibold text-purple-700 text-center">
              Current Job Openings
            </h1>
            <h2 className="font-semibold text-gray-600 mb-12 text-center">
              Explore exciting career opportunities in our growing educational community
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.slice(0, 6).map((job, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        {job.urgent && (
                          <span className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                            Urgent
                          </span>
                        )}
                      </div>
                      <div className="flex gap-3">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                          {job.category}
                        </span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>

                  {/* Location and Experience */}
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <LocationIcon />
                      <span className="text-sm text-gray-600">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon />
                      <span className="text-sm text-gray-600">{job.experience}</span>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="text-base font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIdx) => (
                        <li key={reqIdx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckIcon />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={() =>
                      router.push(
                        `/application_form?position=${encodeURIComponent(job.title)}`
                      )
                    }
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Apply for this Position
                  </button>
                </div>
              ))}
            </div>
          </section>

        {/* Benefits & Perks Section */}
      <section className="bg-white py-16 px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-purple-700 mb-4">
            Benefits & Perks
          </h2>
          <p className="text-lg text-gray-700 font-medium">
            We offer comprehensive benefits to support your professional and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {perks.map((perk, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl group"
            >
              {/* Icon Container with Yellow Glow */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-700 mb-4
                              transition-all duration-300
                              group-hover:bg-yellow-100
                              group-hover:shadow-[0_0_20px_5px_rgba(255,255,0,0.6)] mx-auto">
                <span className="mx-auto">{perk.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{perk.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm text-center">{perk.description}</p>
            </div>
          ))}
        </div>
      </section>


      </div>
    </main>
  );
}
