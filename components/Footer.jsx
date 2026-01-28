
import React from 'react';
import { TRANSLATIONS } from '../constants.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const Footer = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.footer;

  return (
    <footer className="bg-background-dark text-white py-12 border-t border-white/5 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-full flex items-center justify-center text-white">
              <span className="material-symbols-outlined !text-xl">energy_savings_leaf</span>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight uppercase">Kendi Cafe</h2>
          </div>
          <div className="flex gap-6">
            <a className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all" href="#">Instagram</a>
            <a className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all" href="#">Twitter</a>
            <a className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all" href="#">Facebook</a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs opacity-30">© 2024 Kendi Cafe. {t.desc[language]}</p>
          <div className="flex gap-6 text-xs opacity-30">
            <a className="hover:underline" href="#">{t.privacy[language]}</a>
            <a className="hover:underline" href="#">{t.terms[language]}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
