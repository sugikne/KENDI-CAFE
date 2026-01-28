
import React from 'react';
import { TRANSLATIONS } from '../constants.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const Philosophy = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.philosophy;

  return (
    <section className="bg-white/5 py-24" id="story">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-white">{t.title[language]}</h2>
        <p className="text-xl md:text-2xl font-normal leading-relaxed text-white/80 italic">
          {t.quote[language]}
        </p>
        <div className="mt-12 flex justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-primary !text-4xl mb-2">restaurant</span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">{t.chef[language]}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-primary !text-4xl mb-2">local_shipping</span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">{t.harvest[language]}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-primary !text-4xl mb-2">volunteer_activism</span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">{t.love[language]}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
