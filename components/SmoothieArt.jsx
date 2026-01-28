
import React from 'react';
import { IMAGES, TRANSLATIONS } from '../constants.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const SmoothieArt = ({ navigateTo }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.smoothie;

  return (
    <section className="py-24 overflow-hidden" id="smoothie">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-primary/10 rounded-[4rem] p-8 md:p-20 flex flex-col md:flex-row items-center gap-16 border border-primary/10">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">{t.title[language].split(' Art')[0]} <span className="text-primary font-light italic">{language === 'EN' ? 'Art' : 'Seni'}</span></h2>
            <p className="text-lg mb-8 leading-relaxed text-white/80">
              {t.desc[language]}
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-medium text-white/90">{t.feat1[language]}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-medium text-white/90">{t.feat2[language]}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-medium text-white/90">{t.feat3[language]}</span>
              </li>
            </ul>
            <button 
              onClick={() => navigateTo('smoothie-menu')}
              className="inline-block bg-white text-background-dark px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-xl"
            >
              {t.cta[language]}
            </button>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
              <img 
                alt="Signature Smoothie Bowl" 
                className="relative w-full aspect-square object-cover rounded-full border-8 border-background-dark shadow-2xl hover:rotate-6 transition-transform duration-500" 
                src={IMAGES.smoothie}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmoothieArt;
