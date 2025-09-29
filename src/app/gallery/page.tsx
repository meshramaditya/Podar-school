"use client";
import { useState } from "react";

export default function Gallery() {
  const images = [
    { src: '/asset/facility_img/facility1.svg', alt: 'School Campus' },
    { src: '/asset/facility_img/facility1.svg', alt: 'Science Lab' },
    { src: '/asset/facility_img/facility1.svg', alt: 'Library' },
    { src: '/asset/facility_img/facility1.svg', alt: 'Sports Ground' },
    { src: '/asset/facility_img/facility1.svg', alt: 'Auditorium' },
    { src: '/asset/facility_img/facility1.svg', alt: 'Classroom' },
    { src: '/asset/facility_img/facility1.svg', alt: 'Computer Lab' },
    { src: '/asset/facility_img/facility1.svg', alt: 'Art Room' },
  ];

  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'School Annual Day' },
    { id: '9bZkp7q19f0', title: 'Science Exhibition' },
    { id: '3JZ_D3ELwOQ', title: 'Sports Meet' },
    { id: 'L_jWHffIx5E', title: 'Cultural Fest' },
    { id: 'kJQP7kiw5Fk', title: 'Music Concert' },
    { id: 'e-ORhEE9VVg', title: 'Debate Competition' },
    { id: '60ItHLz5WEA', title: 'Art Exhibition' },
    { id: 'YQHsXMglC9A', title: 'Annual Sports' },
  ];

  const [showAllImages, setShowAllImages] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);

  const displayedImages = showAllImages ? images : images.slice(0, 6);
  const displayedVideos = showAllVideos ? videos : videos.slice(0, 6);

  return (
    <main className="w-full min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Image Gallery Section */}
        <h1 className=" mb-12 text-center text-5xl font-semibold text-purple-700">
          School Image Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedImages.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-700 text-center">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            className="px-6 py-2 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
            onClick={() => setShowAllImages(!showAllImages)}
          >
            {showAllImages ? "View Less" : "View More"}
          </button>
        </div>

        {/* Video Gallery Section */}
        <h1 className=" mb-12 mt-12 text-center text-5xl font-semibold text-purple-700">
          School Video Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedVideos.map((vid, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${vid.id}`}
                title={vid.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-t-xl"
              ></iframe>
              <div className="p-4 bg-white">
                <p className="text-gray-700 text-center">{vid.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            className="px-6 py-2 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
            onClick={() => setShowAllVideos(!showAllVideos)}
          >
            {showAllVideos ? "View Less" : "View More"}
          </button>
        </div>

        {/* Closing */}
        <p className="text-center text-gray-600 mt-16 max-w-2xl mx-auto">
          Explore our vibrant campus life, state-of-the-art facilities, and engaging learning environment.
        </p>
      </div>
    </main>
  );
}
