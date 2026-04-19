'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-60 sm:w-72 h-60 sm:h-72 bg-amber-200 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-60 sm:w-72 h-60 sm:h-72 bg-orange-200 opacity-20 rounded-full mix-blend-multiply filter blur-3xl" style={{animationDelay: '2s'}} />

        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Main Title */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              BTech Class of
              <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent animate-pulse">
                2022-2026
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-600 mb-2 sm:mb-4">
              Electrical and Electronics Engineering
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              "use client";

              import React from "react";

              export default function HomeFrame() {
                return (
                  <div className="min-h-screen h-screen">
                    <iframe src="/indexfare.html" title="Farewell Theme" style={{width: '100%', height: '100%', border: '0'}} />
                  </div>
                );
              }
            </h3>
