'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

export default function GalleryClient({ categoriesData }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Flatten all images for "All" category
  const allImages = categoriesData.flatMap(cat => cat.images);

  // Get unique categories for buttons
  const categories = ['All', ...categoriesData.map(cat => cat.category)];

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'All' 
    ? allImages 
    : categoriesData.find(cat => cat.category === selectedCategory)?.images || [];

  // Lightbox Navigation Functions
  const handleNext = () => {
    const currentIndex = filteredImages.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = filteredImages.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-gradient">Gallery</span>
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Explore our craftsmanship through our work. We deliver high-quality engineering solutions tailored to your needs.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-amber-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up delay-100">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover-scale
              ${selectedCategory === category 
                ? 'bg-gradient-to-r from-primary to-amber-500 text-white shadow-glow' 
                : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
              } glass-effect`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in-up delay-200">
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <div 
              key={image} 
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-800 aspect-square hover-lift gradient-border animate-float"
              style={{ animationDelay: `${(index % 4) * 100}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`${selectedCategory} Work Example ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <div className="p-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/40 text-primary-hover transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 size={24} />
                </div>
                <span className="text-white text-xs font-medium uppercase tracking-wider mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  View Detail
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-neutral-500">
            No images found in this category.
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md glass-dark transition-all duration-300 animate-slide-down"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors border border-neutral-800 z-50"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X size={24} />
          </button>

          {/* Previous Arrow */}
          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-all hover-scale border border-neutral-800 z-50 disabled:opacity-50"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            disabled={filteredImages.length <= 1}
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next Arrow */}
          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-all hover-scale border border-neutral-800 z-50 disabled:opacity-50"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            disabled={filteredImages.length <= 1}
          >
            <ChevronRight size={32} />
          </button>

          {/* Main Image */}
          <div 
            className="relative w-[90vw] h-[85vh] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery Preview"
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
