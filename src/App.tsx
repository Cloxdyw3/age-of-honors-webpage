import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import HomePage from './components/HomePage';
import GameControlsPage from './components/HowToPlayPage';
import WeaponsPage from './components/WeaponsPage';
import TraitsPage from './components/TraitsPage';
import SkinsPage from './components/SkinsPage';
import SocialsPage from './components/SocialsPage';
import LocationsPage from './components/LocationsPage';
import GamepassesPage from './components/GamepassesPage';
import GameMechanicsPage from './components/GameMechanicsPage';
import ClansPage from './components/ClansPage';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage />;
      case 'locations':
        return <LocationsPage />;
      case 'mechanics':
        return <GameMechanicsPage />;
      case 'gamepasses':
        return <GamepassesPage />;
      case 'gamecontrols':
        return <GameControlsPage />;
      case 'weapons':
        return <WeaponsPage />;
      case 'traits':
        return <TraitsPage />;
      case 'skins':
        return <SkinsPage />;
      case 'clans':
        return <ClansPage />;
      case 'socials':
        return <SocialsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {loading && (
        <>
          <div className="samurai-loader">
            <span className="samurai-loader-kanji">義</span>
          </div>
          <div className="samurai-loader-blur"></div>
        </>
      )}
      {!loading && (
        <>
          <ParticleBackground />
          <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
          <main className="relative z-10 pt-20">
            <div className="transition-all duration-700 ease-in-out transform">
              {renderSection()}
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default App;