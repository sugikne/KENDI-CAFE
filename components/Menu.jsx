
import React, { useState } from 'react';
import { MENU_ITEMS, TRANSLATIONS, CATEGORY_LABELS } from '../constants.js';
import { Category } from '../types.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { language } = useLanguage();
  const t = TRANSLATIONS.menu;

  const categories = [
    'All', 
    Category.BREAKFAST, 
    Category.HEALTHY, 
    Category.TOASTS, 
    Category.PANCAKES, 
    Category.SMOOTHIE, 
    Category.DRINKS
  ];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24" id="menu">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase text-white">{t.title[language]}</h2>
          <p className="text-lg text-white/60">{t.desc[language]}</p>
        </div>
        <div className="flex gap-2 md:gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 border-2 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat 
                  ? 'border-primary text-primary bg-primary/5' 
                  : 'border-transparent hover:bg-white/5 text-white/60 hover:text-white'
              }`}
            >
              {cat === 'All' ? t.all[language] : CATEGORY_LABELS[cat][language]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 min-h-[400px]">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            className="group flex gap-6 items-center p-4 rounded-3xl transition-all hover:bg-white/[0.03] border border-transparent hover:border-white/5"
          >
            {item.imageUrl && (
              <div className="size-24 md:size-32 flex-shrink-0 overflow-hidden rounded-2xl relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            )}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-baseline gap-2 mb-1">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight">{item.name}</h3>
                <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}K</span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed line-clamp-2 md:line-clamp-none">
                {item.description[language]}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <button className="bg-primary/10 text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/20 transition-all active:scale-95">
          {t.pdf[language]}
        </button>
      </div>
    </section>
  );
};

export default Menu;
