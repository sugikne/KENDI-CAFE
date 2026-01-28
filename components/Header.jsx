
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, TRANSLATIONS } from '../constants.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const Header = ({ currentView, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    if (currentView !== 'home') {
      setActiveSection('');
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    NAV_LINKS.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [currentView]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    closeMenu();

    if (href === '#smoothie') {
      navigateTo('smoothie-menu');
      return;
    }

    if (currentView !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 85, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(href);
    } else if (href === '#') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       setActiveSection('');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        <a 
          href="#" 
          onClick={(e) => handleNavLinkClick(e, '#')} 
          className="flex items-center gap-3 group"
        >
          <div className="size-8 bg-primary rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-12">
            <span className="material-symbols-outlined !text-xl">energy_savings_leaf</span>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight uppercase">Kendi Cafe</h2>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className={`text-sm font-semibold transition-all duration-300 hover:text-primary relative py-1 ${
                (activeSection === link.href || (link.href === '#smoothie' && currentView === 'smoothie-menu')) ? 'text-primary' : 'text-white/70'
              }`}
            >
              {link.label[language]}
              {(activeSection === link.href || (link.href === '#smoothie' && currentView === 'smoothie-menu')) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-in fade-in slide-in-from-left-2 duration-300"></span>
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <span className={language === 'EN' ? 'text-primary' : 'text-white/40'}>EN</span>
            <span className="w-px h-3 bg-white/20"></span>
            <span className={language === 'ID' ? 'text-primary' : 'text-white/40'}>ID</span>
          </button>

          <a 
            href="#menu"
            onClick={(e) => handleNavLinkClick(e, '#menu')}
            className="hidden sm:block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            {TRANSLATIONS.hero.order[language]}
          </a>
          
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined !text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 z-40 bg-background-dark/98 backdrop-blur-2xl transition-all duration-500 md:hidden ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <nav className="flex flex-col items-center h-full px-6 text-center">
          <div className="h-32 w-full shrink-0"></div>
          
          <div className="flex flex-col gap-10 w-full">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`text-3xl font-black uppercase tracking-[0.1em] transition-all duration-500 transform ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } ${
                  (activeSection === link.href || (link.href === '#smoothie' && currentView === 'smoothie-menu')) ? 'text-primary' : 'text-white hover:text-primary'
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                {link.label[language]}
              </a>
            ))}
          </div>

          <div className={`mt-12 w-full max-w-[300px] transition-all duration-700 delay-300 transform ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <a 
              href="#menu"
              onClick={(e) => handleNavLinkClick(e, '#menu')}
              className="block w-full bg-primary text-white py-5 rounded-full text-xl font-black shadow-2xl shadow-primary/40 active:scale-95 transition-transform"
            >
              {TRANSLATIONS.hero.order[language]}
            </a>
          </div>
          
          <div className="flex-grow"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
