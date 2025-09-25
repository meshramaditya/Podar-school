export default function Gallery() {
  const images = [
    { src: '/asset/facility_img/facility1.svg', alt: 'School Campus' },
    { src: '/asset/facility_img/facility1.svg', alt: 'Science Lab' },
    { src: '/asset/facility_img/facility1.svg', alt: 'Library' },
    { src: '/asset/facility_img/facility1.svg', alt: 'Sports Ground' },
    { src: '/asset/facility_img/facility1.svg', alt: 'Auditorium' },
    { src: '/asset/facility_img/facility1.svg', alt: 'Classroom' },
  ];

  return (
    <main className="w-full min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-12 text-center text-blue-600">
          School Image Gallery
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:scale-105"
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

        {/* Closing */}
        <p className="text-center text-gray-600 mt-16 max-w-2xl mx-auto">
          Explore our vibrant campus life, state-of-the-art facilities, and engaging learning environment.
        </p>
      </div>
    </main>
  );
}
