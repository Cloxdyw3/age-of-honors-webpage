import React from 'react';
import bonfireImg from '../assets/locations/Bonfire_Spawn.png';
import caveImg from '../assets/locations/Cave_Spawn.png';
import cherryImg from '../assets/locations/Cherry_Blossom_Spawn.png';
import marketImg from '../assets/locations/Main_MarketPlace.png';
import traitRollsImg from '../assets/locations/Trait_Spinner.png';
import traitLanternsImg from '../assets/locations/Trait_Selectors.png';
import masteryCheckerImg from '../assets/locations/Mastery_Checker.png';
import weaponAlterImg from '../assets/locations/Weapon_Alter.png';
import weaponSkinsImg from '../assets/locations/Weapon_Skins.png';
import goldenWeaponImg from '../assets/locations/Golden_Weapon.png';
import zenithImg from '../assets/locations/Zenith.png';
import feiOsborneImg from '../assets/locations/Fei_Osborne.png';

const locations = [
  { id: 1, name: 'Bonfire Spawnpoint', image: bonfireImg, description: 'To set your spawn here just interact with the bonfire. You also heal passively near it.' },
  { id: 2, name: 'Cave', image: caveImg, description: 'To set your spawn here interact with the Lantern.' },
  { id: 3, name: 'Cherry Blossom', image: cherryImg, description: 'To set your spawn here interact with the Lantern.' },
  { id: 4, name: 'Market', image: marketImg, description: 'To get to the Market Place you can Press M on pc or DPad Down on controller.' },
  { id: 5, name: 'Trait Rolls', image: traitRollsImg, description: 'Here you can spin 100 credits or use Blessed Spins to spin for a random Trait.' },
  { id: 6, name: 'Trait Lanterns', image: traitLanternsImg, description: 'Here you can see all available traits or select traits if you have the Trait Saver.' },
  { id: 7, name: 'Mastery Checker', image: masteryCheckerImg, description: 'Here is where you can check your weapon mastery.' },
  { id: 8, name: 'Weapon Alter', image: weaponAlterImg, description: 'Here you can buy weapon with credits or access Early Access weapons.' },
  { id: 9, name: 'Weapon Skins', image: weaponSkinsImg, description: 'Here is where you can buy weapon skins and equip them.' },
  { id: 10, name: 'Golden...', image: goldenWeaponImg, description: 'Here you can exchange your current weapon for a gold version once you have 1 million mastery for that weapon.' },
  { id: 11, name: 'Zenith', image: zenithImg, description: 'Interacting with Zenith will teleport you in or out of the Market' },
  { id: 12, name: 'Fei Osborne', image: feiOsborneImg, description: 'You can interact with Fei Osborne to play a random tune with the Musician gamepass.' },
];

const LocationsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  return (
    <div className="min-h-screen pt-24 px-4 animate-fadeIn pb-24">
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-3xl w-full bg-gray-900/50 rounded-2xl overflow-hidden border border-blue-500/20 backdrop-blur-sm shadow-2xl animate-zoomIn">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50"></div>
            <div className="relative p-2">
              <img src={selectedImage} alt="Location" className="w-full h-[70vh] object-contain rounded-xl" />
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 samurai-title animate-brush-fade">Locations</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-jpserif animate-brush-fade" style={{animationDelay: '0.2s'}}>Explore the iconic locations of Age of Honor. Click a photo to enlarge.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <div key={loc.id} className="group relative backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:scale-105 shadow-xl animate-brush-fade hover:animate-samurai-swing" style={{animationDelay: `${0.3 + loc.id * 0.07}s`}}>
              <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setSelectedImage(loc.image)}>
                <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 hover:brightness-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                    <span className="text-white text-sm font-semibold">Click to view</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-400 group-hover:text-pink-400 transition-colors duration-300 drop-shadow-lg animate-fadeInUp jpserif-title">{loc.name}</h3>
                <p className="text-gray-400 text-sm mt-2 font-body">{loc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsPage; 