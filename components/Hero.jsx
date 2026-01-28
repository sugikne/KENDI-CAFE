
import React from 'react';
import { IMAGES, TRANSLATIONS } from '../constants.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const Hero = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.hero;

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/10 text-sage text-xs font-bold uppercase tracking-widest w-fit">
            <span className="material-symbols-outlined !text-sm">eco</span> {t.badge[language]}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white">
            {t.title[language].split(',')[0]}<br/><span className="text-primary italic">{t.title[language].split(',')[1]}</span>
          </h1>
          <p className="text-lg text-white/70 max-w-md leading-relaxed">
            {t.desc[language]}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#menu" 
              className="bg-primary text-white px-8 py-4 rounded-full text-base font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95"
            >
              {t.order[language]} <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a 
              href="#gallery" 
              className="bg-sage/20 text-sage px-8 py-4 rounded-full text-base font-bold hover:bg-sage/30 transition-colors"
            >
              {t.gallery[language]}
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            <img 
              alt="Kendi Cafe Atmosphere" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              src={IMAGES.hero}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
