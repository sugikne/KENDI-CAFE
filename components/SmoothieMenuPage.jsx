
import React from 'react';
import { MENU_ITEMS, TRANSLATIONS } from '../constants.js';
import { Category } from '../types.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const SmoothieMenuPage = ({ navigateTo }) => {
  const { language } = useLanguage();
  const smoothieItems = MENU_ITEMS.filter(item => item.category === Category.SMOOTHIE);
  const t = TRANSLATIONS.smoothie;

  return (
    <div className="bg-background-dark pb-24">
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background-dark z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?q=80&w=1200&auto=format&fit=crop" 
          alt="Smoothie Background" 
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px]"
        />
        <div className="relative z-20 text-center px-6">
          <button 
            onClick={() => navigateTo('home')}
            className="mb-8 inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            {language === 'EN' ? 'Back to Home' : 'Kembali'}
          </button>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter uppercase mb-4">
            {t.title[language]}
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
            {t.desc[language]}
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 -mt-10 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {smoothieItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] overflow-hidden hover:bg-white/[0.08] transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 aspect-square overflow-hidden relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    {item.price}K
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    {item.description[language]}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {item.description[language].split(',').map((ing, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-white/40 uppercase font-bold tracking-tighter">
                        {ing.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-primary/5 rounded-[3rem] border border-primary/10 text-center">
          <span className="material-symbols-outlined text-primary !text-5xl mb-6">nutrition</span>
          <h2 className="text-2xl font-bold text-white mb-4">
            {language === 'EN' ? 'Nutrient-Dense & Guilt-Free' : 'Padat Nutrisi & Tanpa Rasa Bersalah'}
          </h2>
          <p className="max-w-xl mx-auto text-white/60">
            {language === 'EN' 
              ? 'Our bowls are strictly plant-based, made with fresh coconut milk or house-made soy milk. We use zero refined sugars, relying only on the natural sweetness of ripe tropical fruits.' 
              : 'Bowl kami murni berbasis tanaman, dibuat dengan santan segar atau susu kedelai buatan sendiri. Kami tidak menggunakan gula rafinasi, hanya mengandalkan rasa manis alami dari buah tropis matang.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmoothieMenuPage;
