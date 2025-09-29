// src/app/page.tsx
'use client';

import { useState } from 'react';
import BookGrid from './components/BookGrid';
import { books } from './data/books';

export default function HomePage() {
  // Simple cart handler for demo purposes
  const handleAddToCart = (bookId: string) => {
    console.log(`Added book ${bookId} to cart`);
    // Here you would typically dispatch to a cart state or call an API
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <section className="relative text-center bg-gradient-to-r from-gray-100 via-beige-50 to-gray-200 p-16 rounded-2xl mb-14 shadow-xl overflow-hidden animate-fade-in-custom">
        <style>{`
          @keyframes fadeInCustom { 0% { opacity: 0; transform: translateY(30px);} 100% { opacity: 1; transform: translateY(0);} }
          .animate-fade-in-custom { animation: fadeInCustom 1.2s cubic-bezier(0.4,0,0.2,1) both; }
          @keyframes floatIcon { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
          .animate-float-icon { animation: floatIcon 2.5s ease-in-out infinite; }
        `}</style>
        <div className="flex flex-col items-center justify-center gap-4">
          <img src="/globe.svg" alt="Bookstore Icon" className="h-20 w-20 mb-4 drop-shadow-lg animate-float-icon" />
          <h1 className="text-5xl font-serif font-bold text-gray-800 mb-4 drop-shadow-sm">Welcome to the Amana Bookstore!</h1>
          <p className="text-2xl text-gray-600 mb-6 max-w-2xl font-light">
            Your one-stop shop for the best books.<br />Discover new worlds and adventures.
          </p>
          <a href="#" className="inline-block bg-gray-800 text-white text-lg font-medium px-8 py-4 rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300">Browse Books</a>
        </div>
        {/* Decorative SVG removed as requested */}
      </section>

      {/* Book Grid */}
      <BookGrid books={books} onAddToCart={handleAddToCart} />
    </div>
  );
}
