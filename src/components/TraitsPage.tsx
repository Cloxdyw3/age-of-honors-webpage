import React from 'react';
import { Crown, Zap, Star, Shield, Sword } from 'lucide-react';

const TraitsPage: React.FC = () => {
  const traitCategories = [
    {
      name: 'Celestial',
      icon: Crown,
      color: 'from-yellow-400 to-orange-400',
      borderColor: 'border-yellow-400/50',
      textColor: 'text-yellow-400',
      traits: [
        {
          name: 'Challenger',
          description: "Opponent's attacks deal 80% less damage after kill (stacks to 10)",
        },
        {
          name: 'Ghost',
          description: 'Turn invisible after every Feint',
        },
        {
          name: 'Berserker',
          description: 'x1.3 damage for all attacks',
        },
      ],
    },
    {
      name: 'Mythical',
      icon: Zap,
      color: 'from-purple-400 to-pink-400',
      borderColor: 'border-purple-400/50',
      textColor: 'text-purple-400',
      traits: [
        {
          name: 'FinalResort',
          description: 'Deal x1.3 damage when under 20% HP',
        },
        {
          name: 'ParryGod',
          description: 'x4 damage with Perfect Parry',
        },
        {
          name: 'Thorns',
          description: 'Reflect 75% damage during Unstoppable',
        },
      ],
    },
    {
      name: 'Legendary',
      icon: Star,
      color: 'from-blue-400 to-cyan-400',
      borderColor: 'border-blue-400/50',
      textColor: 'text-blue-400',
      traits: [
        {
          name: 'Juggernaut',
          description: '1/2 damage during Unstoppable',
        },
        {
          name: 'Executioner',
          description: '+10 damage on Executions',
        },
        {
          name: 'Overdrive',
          description: 'x1.2 damage with Tempo Attacks',
        },
        {
          name: 'Groundbreaker',
          description: 'x1.25 damage with Groundslam moves',
        },
        {
          name: 'Bulldozer',
          description: 'Dazing opponents lasts 1.5x seconds longer',
        },
        {
          name: 'Tempered',
          description: 'Rage stacks up 1.5x faster',
        },
      ],
    },
    {
      name: 'Rare',
      icon: Shield,
      color: 'from-green-400 to-emerald-400',
      borderColor: 'border-green-400/50',
      textColor: 'text-green-400',
      traits: [
        {
          name: 'Bloodthirsty',
          description: '2x Heal on Kill',
        },
        {
          name: 'Flashstep',
          description: 'Further Front Dash',
        },
        {
          name: 'Rhythmical',
          description: 'x1.5 Tempo Gain',
        },
        {
          name: 'KickMaster',
          description: '+5 damage with Kicks',
        },
        {
          name: 'HeavyHands',
          description: 'Deal more Parry Knockbacks',
        },
      ],
    },
    {
      name: 'Common',
      icon: Sword,
      color: 'from-gray-400 to-gray-500',
      borderColor: 'border-gray-400/50',
      textColor: 'text-gray-400',
      traits: [
        {
          name: 'Regeneration',
          description: '2x Regeneration',
        },
        {
          name: 'Payday',
          description: 'Gain x2 Credit',
        },
        {
          name: 'Tanker',
          description: '7.5% Damage Reduction from All Attacks',
        },
        {
          name: 'Fast Feet',
          description: '+2 Sprint speed',
        },
        {
          name: 'Prodigy',
          description: 'Gain x2 Mastery',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 samurai-title">
            Warrior Traits
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-jpserif">
            Unlock powerful abilities to enhance your combat prowess
          </p>
        </div>

        <div className="space-y-12">
          {traitCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className={`text-3xl font-bold ${category.textColor} jpserif-title`}>
                  {category.name}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-700/50 to-transparent"></div>
              </div>

              {/* Traits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.traits.map((trait, traitIndex) => (
                  <div
                    key={traitIndex}
                    className={`group relative backdrop-blur-sm bg-gray-900/30 border ${category.borderColor} rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:bg-gray-900/40`}
                  >
                    {/* Trait Name */}
                    <div className="flex items-center justify-between mb-3">
                      <h4 className={`text-lg font-bold ${category.textColor} group-hover:text-white transition-colors duration-300 jpserif-title`}>
                        {trait.name}
                      </h4>
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    </div>

                    {/* Trait Description */}
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 font-body">
                      {trait.description}
                    </p>

                    {/* Hover Effect Border */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6">
          {traitCategories.map((category, index) => (
            <div
              key={index}
              className="text-center p-6 backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-lg hover:border-gray-600/50 transition-all duration-300"
            >
              <div className={`text-2xl font-bold ${category.textColor} mb-2`}>
                {category.traits.length}
              </div>
              <div className="text-gray-400 text-sm">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TraitsPage;