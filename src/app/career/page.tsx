import React from 'react';

export default function Careers() {
  const jobs = [
    {
      title: 'Primary School Teacher',
      urgent: true,
      category: 'Primary Education',
      type: 'Full-time',
      location: 'Mumbai',
      experience: '2-5 years experience required',
      description: 'We are looking for an enthusiastic primary school teacher to join our team. The ideal candidate should have experience in elementary education and a passion for nurturing young minds.',
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
      description: 'Join our science department to inspire and educate students in physics, chemistry, and biology. Looking for someone with strong subject knowledge and innovative teaching methods.',
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
      description: 'Deliver engaging mathematics lessons and prepare students for exams. We need someone who can make complex mathematical concepts accessible and interesting.',
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
      description: 'Manage library resources, assist students, and organize events. Perfect for someone passionate about books and student development.',
      requirements: [
        'Library Science degree',
        '1+ years library experience',
        'Digital cataloging skills',
        'Event organization experience'
      ]
    }
  ];

  const LocationIcon = () => (
    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  return (
    <main className="w-full min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-12 text-center text-blue-600">
          Career Opportunities
        </h1>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
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
              <p className="text-gray-600 mb-4 leading-relaxed">
                {job.description}
              </p>

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
                <h3 className="text-base font-semibold text-gray-900 mb-3">Requirements:</h3>
                <div className="space-y-2">
                  {job.requirements.map((req, reqIdx) => (
                    <div key={reqIdx} className="flex items-start gap-2">
                      <CheckIcon />
                      <span className="text-sm text-gray-600 leading-relaxed">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Apply for this Position
              </button>
            </div>
          ))}
        </div>

        {/* Closing */}
        <p className="text-center text-gray-600 mt-16 max-w-2xl mx-auto">
          Join our team of dedicated educators and staff who are passionate about shaping the future of students.
        </p>
      </div>
    </main>
  );
}