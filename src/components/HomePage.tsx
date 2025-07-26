import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative animate-fadeIn">
      <div className="text-center space-y-8 px-4">
        {/* Animated Logo */}
        <div className="space-y-4">
          <h1 className="text-7xl md:text-9xl font-bold text-white font-harukaze animate-brush-fade">
            Age of Honor
          </h1>
          <div className="text-4xl md:text-6xl text-blue-400 font-bold font-zen">
            義
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed jpserif-title">
          Enter the Era of the <span className="text-blue-400 font-semibold">Samurai</span>
        </p>

        {/* Call to Action */}
        <div className="space-y-4">
          <button 
            onClick={() => window.open('https://www.roblox.com/games/18176197331/GREATSWORD-Age-of-Honor', '_blank')}
            className="group relative px-8 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center space-x-3 text-white group-hover:text-blue-400">
              <Play size={24} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-semibold">Play</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
          
          <p className="text-sm text-gray-500 font-body">
            Enter the world of Age of Honor on Roblox
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { title: 'Honor System', desc: 'Fight with integrity' },
            { title: 'Legendary Weapons', desc: 'Master ancient arts' },
            { title: 'Epic Battles', desc: 'Prove your worth' },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-lg hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;