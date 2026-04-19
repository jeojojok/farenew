'use client';

import { useState } from 'react';

const SAMPLE_VIDEOS = [
  {
    id: 1,
    title: 'Farewell Party Highlights',
    description: 'Best moments from the celebration',
    thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=225&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '3:45',
  },
  {
    id: 2,
    title: 'Group Games & Activities',
    description: 'Fun and laughter throughout the day',
    thumbnail: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=225&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '5:20',
  },
  {
    id: 3,
    title: 'Memorable Speech Moments',
    description: 'Heartfelt words and emotional moments',
    thumbnail: 'https://images.unsplash.com/photo-1516762689334-1d18757b9592?w=400&h=225&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '4:10',
  },
  {
    id: 4,
    title: 'Dance & Music Night',
    description: 'DJ set and dancing till late',
    thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=225&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '6:55',
  },
  {
    id: 5,
    title: 'Sunset & Evening Vibes',
    description: 'Golden hour moments with the batch',
    thumbnail: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=225&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '3:30',
  },
  {
    id: 6,
    title: 'Gratitude & Farewells',
    description: 'Emotional goodbye moments',
    thumbnail: 'https://images.unsplash.com/photo-1533627992211-118fcgfa312e?w=400&h=225&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '4:45',
  },
];

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      <section className="px-4 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Video Memories
          </h1>
          <p className="text-slate-600 text-lg">
            Relive the unforgettable moments captured on camera
          </p>
        </div>

        {/* Video Player Modal */}
        {selectedVideo !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl aspect-video animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full rounded-lg"
                src={SAMPLE_VIDEOS[selectedVideo].videoUrl}
                title={SAMPLE_VIDEOS[selectedVideo].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SAMPLE_VIDEOS.map((video, index) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(index)}
              className="group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm border border-slate-200/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden bg-black aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-2">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
