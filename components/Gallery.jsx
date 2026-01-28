
import React from 'react';
import { IMAGES } from '../constants.js';

const Gallery = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5" id="gallery">
      <h2 className="text-4xl font-extrabold tracking-tight mb-12 text-center text-white">GALLERY</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl h-80 md:h-[600px] group relative">
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
            <span className="text-white font-bold tracking-widest border-2 border-white px-6 py-2 rounded-full uppercase">Atmosphere</span>
          </div>
          <img 
            alt="Cafe Interior" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src={IMAGES.gallery[0]}
          />
        </div>
        <div className="overflow-hidden rounded-2xl h-40 md:h-[290px] group">
          <img 
            alt="Coffee" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src={IMAGES.gallery[1]}
          />
        </div>
        <div className="overflow-hidden rounded-2xl h-40 md:h-[290px] group">
          <img 
            alt="Breakfast Platter" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src={IMAGES.gallery[2]}
          />
        </div>
        <div className="col-span-2 overflow-hidden rounded-2xl h-40 md:h-[294px] group">
          <img 
            alt="Food prep" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src={IMAGES.gallery[3]}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
