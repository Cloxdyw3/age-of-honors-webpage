import React from 'react';
import blessedSpinImg from '../assets/gamepasses/Blessed_Spin_Orbs.png';
import blessedSpin2Img from '../assets/gamepasses/Blessed_Spin_Orbs2.png';
import traitSaverImg from '../assets/gamepasses/Trait_Saver.png';
import spinSkipperImg from '../assets/gamepasses/Spin_Skipper.png';
import emoteWheelImg from '../assets/gamepasses/Emote_Wheel.png';
import musicianImg from '../assets/gamepasses/Musician.png';
import tunaStudioImg from '../assets/gamepasses/TunaStudio.png';

const gamepasses = [
  { id: 1, name: 'Blessed Spin Orbs', image: blessedSpinImg, description: 'Unlock exclusive blessed spin orbs for trait rolls.' },
  { id: 2, name: 'Blessed Spin Orbs 2', image: blessedSpin2Img, description: 'Another style of blessed spin orbs.' },
  { id: 3, name: 'Trait Saver', image: traitSaverImg, description: 'Save and select your favorite traits.' },
  { id: 4, name: 'Spin Skipper', image: spinSkipperImg, description: 'Skip spins for faster trait rolling.' },
  { id: 5, name: 'Emote Wheel', image: emoteWheelImg, description: 'Express yourself with the emote wheel.' },
  { id: 6, name: 'Musician', image: musicianImg, description: 'Play music in-game with the Musician gamepass.' },
  { id: 7, name: 'TunaStudio', image: tunaStudioImg, description: 'Support the developers and get a special badge.' },
];

const GamepassesPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  return (
    <div className="min-h-screen pt-24 px-4 animate-fadeIn pb-24">
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-3xl w-full bg-gray-900/50 rounded-2xl overflow-hidden border border-blue-500/20 backdrop-blur-sm shadow-2xl animate-zoomIn">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50"></div>
            <div className="relative p-2">
              <img src={selectedImage} alt="Gamepass" className="w-full h-[70vh] object-contain rounded-xl" />
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 samurai-title animate-brush-fade">Gamepasses</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-jpserif animate-brush-fade" style={{animationDelay: '0.2s'}}>Unlock special features and cosmetics with gamepasses. Click a photo to enlarge.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gamepasses.map((gp) => (
            <div key={gp.id} className="group relative backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:scale-105 shadow-xl animate-brush-fade hover:animate-samurai-swing" style={{animationDelay: `${0.3 + gp.id * 0.07}s`}}>
              <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setSelectedImage(gp.image)}>
                <img src={gp.image} alt={gp.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 hover:brightness-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                    <span className="text-white text-sm font-semibold">Click to view</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-400 group-hover:text-pink-400 transition-colors duration-300 drop-shadow-lg animate-fadeInUp jpserif-title">{gp.name}</h3>
                <p className="text-gray-400 text-sm mt-2 font-body">{gp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamepassesPage; 