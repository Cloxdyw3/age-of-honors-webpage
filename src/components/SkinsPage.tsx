import React from 'react';

// Skin görsellerini import et
import noc2 from '../assets/skins/noc2.png';
import hell from '../assets/skins/hell.png';
import cosmic from '../assets/skins/cosmic.png';

const skins = [
  {
    id: 1,
    name: 'Katana: Nocturne',
    image: noc2,
  },
  {
    id: 2,
    name: 'Broadsword: Hellbringer',
    image: hell,
  },
  {
    id: 3,
    name: 'Greatsword: Cosmic',
    image: cosmic,
  },
];

const SkinsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24 px-4 animate-fadeIn">
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-3xl w-full bg-gray-900/50 rounded-2xl overflow-hidden border border-blue-500/20 backdrop-blur-sm shadow-2xl animate-zoomIn">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50"></div>
            <div className="relative p-2">
              <img src={selectedImage} alt="Skin" className="w-full h-[70vh] object-contain rounded-xl" />
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slideDown samurai-title">
            Skins
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fadeIn delay-200 font-jpserif">
            Discover the entire skin collection. Click on the image to enlarge it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skins.map((skin) => (
            <div
              key={skin.id}
              className="group relative backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:scale-105 shadow-xl animate-fadeInUp"
            >
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(skin.image)}
              >
                <img
                  src={skin.image}
                  alt={skin.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                    <span className="text-white text-sm font-semibold">Click to view</span>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 animate-fadeInUp delay-200 drop-shadow jpserif-title">
                  {skin.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkinsPage;