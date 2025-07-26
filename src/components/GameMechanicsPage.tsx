import React from 'react';
import tempoGif from '../assets/mechanics/Tempo_and_Rage.gif';
import hyperArmorGif from '../assets/mechanics/HyperArmor.gif';
import clashGif from '../assets/mechanics/Normal_Clash.gif';
import feintGif from '../assets/mechanics/Feint_Hit.gif';
import kickGif from '../assets/mechanics/Kick.gif';
import parryGif from '../assets/mechanics/Parry.gif';

const mechanics = [
  { id: 1, name: 'Tempo & Rage', image: tempoGif, description: 'Build up tempo and rage to unleash powerful attacks.' },
  { id: 2, name: 'Hyper Armor', image: hyperArmorGif, description: 'Gain temporary invulnerability with hyper armor moves.' },
  { id: 3, name: 'Normal Clash', image: clashGif, description: 'Clash with your opponent when both attack at the same time.' },
  { id: 4, name: 'Feint Hit', image: feintGif, description: 'Fake out your opponent with a feint move.' },
  { id: 5, name: 'Kick', image: kickGif, description: 'Use kicks to break through defenses.' },
  { id: 6, name: 'Parry', image: parryGif, description: 'Parry an attack with perfect timing to gain an advantage.' },
];

const GameMechanicsPage: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = React.useState<{ type: 'image' | 'video'; src: string } | null>(null);
  return (
    <div className="min-h-screen pt-24 px-4 animate-fadeIn pb-24">
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedMedia(null)}>
          <div className="relative max-w-3xl w-full bg-gray-900/50 rounded-2xl overflow-hidden border border-blue-500/20 backdrop-blur-sm shadow-2xl animate-zoomIn">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50"></div>
            <div className="relative p-2">
              {selectedMedia.type === 'image' ? (
                <img src={selectedMedia.src} alt="Game Mechanic" className="w-full h-[70vh] object-contain rounded-xl" />
              ) : (
                <video 
                  src={selectedMedia.src} 
                  controls 
                  autoPlay 
                  className="w-full h-[70vh] object-contain rounded-xl"
                />
              )}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedMedia(null);
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 samurai-title animate-brush-fade">Game Mechanics</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-jpserif animate-brush-fade" style={{animationDelay: '0.2s'}}>Learn about the core mechanics of Age of Honor. Click a gif to enlarge.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mechanics.map((mech) => (
            <div key={mech.id} className="group relative backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:scale-105 shadow-xl animate-brush-fade hover:animate-samurai-swing" style={{animationDelay: `${0.3 + mech.id * 0.07}s`}}>
              <div className="relative h-48 overflow-hidden cursor-pointer bg-black" onClick={() => setSelectedMedia({ type: 'image', src: mech.image })}>
                <img src={mech.image} alt={mech.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                    <span className="text-white text-sm font-semibold">Click to view</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-400 group-hover:text-pink-400 transition-colors duration-300 drop-shadow-lg animate-fadeInUp jpserif-title">{mech.name}</h3>
                <p className="text-gray-400 text-sm mt-2 font-body">{mech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameMechanicsPage; 