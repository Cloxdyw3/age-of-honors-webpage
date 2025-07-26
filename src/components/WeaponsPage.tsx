import React from 'react';
import { Sword, Zap, Shield } from 'lucide-react';

import broad from '../assets/weapons/broad.png';
import bo from '../assets/weapons/bo.png';
import great from '../assets/weapons/great.png';
import sch from '../assets/weapons/sch.png';
import bow from '../assets/weapons/bow.png';
import dual from '../assets/weapons/dual.png';
import axe from '../assets/weapons/axe.png';
import katana from '../assets/weapons/katana.png';
import spikes from '../assets/weapons/spikes.png';

const WeaponsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const weapons = [
    {
      id: 1,
      name: 'Broadsword',
      damage: '25',
      speed: '?',
      range: '?',
      image: broad,
    },
    {
      id: 2,
      name: 'Bo Staff',
      damage: '20',
      speed: '?',
      range: '?',
      image: bo,
    },
    {
      id: 3,
      name: 'Greatsword',
      damage: '25',
      speed: '?',
      range: '?',
      image: great,
    },
    {
      id: 4,
      name: 'Scythe',
      damage: '23',
      speed: '?',
      range: '?',
      image: sch,
    },
    {
      id: 5,
      name: 'Longbow',
      damage: '20',
      speed: '?',
      range: '?',
      image: bow,
    },
    {
      id: 6,
      name: 'Dual Blades',
      damage: '24',
      speed: '?',
      range: '?',
      image: dual,
    },
    {
      id: 7,
      name: 'Greataxe',
      damage: '33',
      speed: '?',
      range: '?',
      image: axe,
    },
    {
      id: 8,
      name: 'Katana',
      damage: '23',
      speed: '?',
      range: '?',
      image: katana,
    },
    {
      id: 9,
      name: 'Spiked Gauntlet',
      damage: '23',
      speed: '?',
      range: '?',
      image: spikes,
    },
  ];

  const getStatColor = (value: number) => {
    if (value >= 90) return 'text-green-400';
    if (value >= 75) return 'text-yellow-400';
    if (value >= 60) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen pt-24 px-4 animate-fadeIn pb-24">
      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-3xl w-full bg-gray-900/50 rounded-2xl overflow-hidden border border-blue-500/20 backdrop-blur-sm shadow-2xl animate-zoomIn">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50"></div>
            <div className="relative p-2">
              <img src={selectedImage} alt="Weapon" className="w-full h-[70vh] object-contain rounded-xl" />
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }} 
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors backdrop-blur-sm border border-white/10 group"
              >
                <span className="text-2xl group-hover:rotate-90 inline-block transition-transform duration-300">✕</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 samurai-title">
            Legendary Weapons
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-jpserif">
            Master the art of combat with these legendary blades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weapons.map((weapon) => (
            <div
              key={weapon.id}
              className="group relative backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:scale-105"
            >
              {/* Image */}
              <div 
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(weapon.image)}
              >
                <img
                  src={weapon.image}
                  alt={weapon.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                {/* Click indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                    <span className="text-white text-sm font-semibold">Click to view</span>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-blue-400 group-hover:text-pink-400 transition-colors duration-300 drop-shadow-lg animate-fadeInUp jpserif-title">
                    {weapon.name}
                  </h3>
                </div>
                {/* Stats */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-pink-400 text-sm flex items-center font-semibold drop-shadow-sm font-jpserif">
                      <Zap size={16} className="mr-1 text-yellow-400 animate-bounce" /> Damage
                    </span>
                    <span className="font-bold text-yellow-300 animate-pulse text-lg drop-shadow">
                      {weapon.damage}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm flex items-center font-semibold drop-shadow-sm font-jpserif">
                      <Zap size={16} className="mr-1 text-cyan-300 animate-bounce" /> Speed
                    </span>
                    <span className="font-bold text-cyan-300 animate-pulse text-lg drop-shadow">
                      {weapon.speed}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 text-sm flex items-center font-semibold drop-shadow-sm font-jpserif">
                      <Shield size={16} className="mr-1 text-purple-300 animate-bounce" /> Range
                    </span>
                    <span className="font-bold text-purple-300 animate-pulse text-lg drop-shadow">
                      {weapon.range}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weapon categories */}
      </div>
    </div>
  );
};

export default WeaponsPage;