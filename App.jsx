
import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Philosophy from './components/Philosophy.jsx';
import SmoothieArt from './components/SmoothieArt.jsx';
import Menu from './components/Menu.jsx';
import Gallery from './components/Gallery.jsx';
import Visit from './components/Visit.jsx';
import Footer from './components/Footer.jsx';
import SmoothieMenuPage from './components/SmoothieMenuPage.jsx';
import { LanguageProvider } from './contexts/LanguageContext.jsx';

const App = () => {
  const [view, setView] = useState('home');

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#smoothie-menu') {
        setView('smoothie-menu');
      } else {
        setView('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (newView) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-background-dark">
        <Header currentView={view} navigateTo={navigateTo} />
        
        <main className="flex-1 overflow-x-hidden">
          {view === 'home' ? (
            <div className="animate-in fade-in duration-700">
              <Hero />
              <Philosophy />
              <SmoothieArt navigateTo={navigateTo} />
              <Menu />
              <Gallery />
              <Visit />
            </div>
          ) : (
            <div className="animate-in slide-in-from-bottom-10 duration-500 h-full">
              <SmoothieMenuPage navigateTo={navigateTo} />
            </div>
          )}
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
