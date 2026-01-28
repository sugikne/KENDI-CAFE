
import React from 'react';
import { IMAGES, TRANSLATIONS, MAP_LINK, WHATSAPP_LINK } from '../constants.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const Visit = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.visit;

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5" id="location">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">{t.badge[language]}</h4>
          <p className="text-2xl font-bold text-white leading-tight mb-4">{t.title[language]}</p>
          <a 
            href={MAP_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block text-white/70 mb-8 hover:text-primary transition-colors flex items-center gap-2 group"
          >
            <span className="material-symbols-outlined !text-lg text-primary">location_on</span>
            <span className="group-hover:underline underline-offset-4">{t.address[language]}</span>
          </a>
          <div className="space-y-2 mb-10 text-white/80">
            <p className="flex items-center gap-2"><span className="font-bold">{t.monFri[language]}:</span> 7am - 8pm</p>
            <p className="flex items-center gap-2"><span className="font-bold">{t.satSun[language]}:</span> 8am - 6pm</p>
          </div>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-xl active:scale-95"
          >
            <span className="material-symbols-outlined">chat</span> {t.wa[language]}
          </a>
        </div>
        <div className="md:col-span-2">
          <a 
            href={MAP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full h-[400px] bg-white/5 rounded-[3rem] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 group shadow-2xl"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000" 
              style={{ backgroundImage: `url('${IMAGES.map}')` }}
            ></div>
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
            
            <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-background-dark/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-white flex items-center gap-2 border border-white/10">
              <span className="material-symbols-outlined !text-sm">open_in_new</span>
              {language === 'EN' ? 'VIEW ON GOOGLE MAPS' : 'LIHAT DI GOOGLE MAPS'}
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-background-dark p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-2 relative border border-white/10">
                <div className="size-4 bg-primary rounded-full animate-ping absolute"></div>
                <div className="size-4 bg-primary rounded-full relative"></div>
                <span className="font-bold text-sm text-white">Kendi Cafe</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Visit;
