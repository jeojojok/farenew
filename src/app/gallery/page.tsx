'use client';

import { useState } from 'react';

const SAMPLE_IMAGES = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=500&fit=crop',
    alt: 'Farewell party moment 1',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    alt: 'Group photo 1',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1516762689334-1d18757b9592?w=500&h=500&fit=crop',
    alt: 'Celebration moment',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=500&fit=crop',
    alt: 'Friends gathering',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop',
    alt: 'Team bonding',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1445274260902-1fbb9b5098f1?w=500&h=500&fit=crop',
    alt: 'Evening event',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=500&fit=crop',
    alt: 'Party moment',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=500&fit=crop',
    alt: 'Sunset gathering',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    alt: 'Night celebration',
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1426438763331-1f9d93a4f02c?w=500&h=500&fit=crop',
    alt: 'Group jumping',
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1552058544-f6b08422138a?w=500&h=500&fit=crop',
    alt: 'Candid moment',
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=500&fit=crop',
    alt: 'Final memory',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      <section className="px-4 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Photo Gallery
          </h1>
          <p className="text-slate-600 text-lg">
            Cherish the moments from our unforgettable farewell party
          </p>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] w-full animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={SAMPLE_IMAGES[selectedImage].url}
                alt={SAMPLE_IMAGES[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button
                onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : SAMPLE_IMAGES.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setSelectedImage(selectedImage < SAMPLE_IMAGES.length - 1 ? selectedImage + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {SAMPLE_IMAGES.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
