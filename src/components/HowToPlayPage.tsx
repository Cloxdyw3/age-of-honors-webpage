import React from 'react';
import { Gamepad2, Zap, Info } from 'lucide-react';

const GameControlsPage: React.FC = () => {
  const controls = [
    { key: 'CTRL', action: 'Shift Lock' },
    { key: 'SHIFT or Wx2', action: 'Sprint' },
    { key: 'M1 (Left Mouse Click)', action: 'Attack' },
    { key: 'R', action: 'Special Attack' },
    { key: 'T', action: 'Tempo Attack (Charged by successful Parries & Attacks)' },
    { key: 'C', action: 'Kick (Evades Parries & Dodges. Can be countered with a Kick which will make the opponent Dazed)' },
    { key: 'F', action: 'Parry (Deflects all incoming damages except Kicks. Cooldown resets when successfully Parried)' },
    { key: 'Q or ALT', action: 'Footwork/Dodge (Front Footwork covers more distance, Left, Right, & Back is a Dodge)' },
    { key: 'X', action: 'Execute (face Dazed opponents)' },
  ];

  const comboAttacks = [
    { combo: 'Jump + M1', result: 'Jump Attack' },
    { combo: 'Sprint/Front Footwork + M1', result: 'Sprint Attack' },
    { combo: 'Jump + Kick', result: 'Jump Kick' },
    { combo: 'Sprint/Front Footwork + Kick', result: 'Sprint Kick' },
  ];

  const definitions = [
    {
      term: 'Perfect Parry',
      definition: "Parry an opponent's attack perfectly and deflect 10% of the damage."
    },
    {
      term: 'Clash',
      definition: 'Knock opponent away if both players are attacking at the same time. Kicks cannot be Clashed.'
    },
    {
      term: 'Perfect Clash',
      definition: 'Perfectly Clash, charges Tempo instantly.'
    },
    {
      term: 'Daze',
      definition: 'When Kick Countered or Wallbanged, which will make the player vulnerable for .8 seconds.'
    },
    {
      term: 'Parry Knockback',
      definition: 'Some moves will have enough force to knock opponents back when parried, which can result in a Wallbang.'
    },
    {
      term: 'Wallbang',
      definition: 'When knocked towards a wall, the player will be Dazed.'
    },
    {
      term: 'Feint',
      definition: 'Cancels an an attack. Use Footwork/Dodge into a different direction before the hitbox plays.'
    },
    {
      term: 'Unstoppable',
      definition: 'Moves that grant hyper armor (white highlight around the player).'
    },
    {
      term: 'Rage',
      definition: 'The shorter bar below the Tempo Bar. When Rage Bar is above 80%, enter Rage dealing x1.15 damage.'
    },
    {
      term: 'Kick Counter',
      definition: 'Deflect Kick damage with another Kick, stunning the opponent.'
    },
  ];

  const controllerControls = [
    { key: 'Left Stick Click', action: 'Sprint' },
    { key: 'Right Trigger', action: 'Attack' },
    { key: 'Y / Triangle', action: 'Special Attack' },
    { key: 'X / Square', action: 'Tempo' },
    { key: 'B / Circle', action: 'Dash' },
    { key: 'A / X', action: 'Jump' },
    { key: 'Left Bumper', action: 'Parry' },
    { key: 'Right Bumper', action: 'Kick' },
    { key: 'Left Trigger', action: 'Execute' },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 samurai-title">
            Game Controls
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-jpserif">
            Master the controls to become a legendary samurai warrior
          </p>
        </div>

        {/* Basic Controls */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Gamepad2 size={32} className="text-blue-400" />
            <h3 className="text-3xl font-bold text-blue-400 font-jpserif">Basic Controls</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {controls.map((control, index) => (
              <div
                key={index}
                className="group backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-lg p-4 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-400/20 text-blue-400 px-3 py-1 rounded-lg font-mono text-sm font-semibold min-w-fit">
                    {control.key}
                  </div>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    {control.action}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controller Controls */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Gamepad2 size={32} className="text-pink-400" />
            <h3 className="text-3xl font-bold text-pink-400 font-jpserif">Controller Controls</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {controllerControls.map((control, index) => (
              <div
                key={index}
                className="group backdrop-blur-sm bg-gray-900/30 border border-pink-400/30 rounded-lg p-4 hover:border-pink-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-400/20 text-pink-400 px-3 py-1 rounded-lg font-mono text-sm font-semibold min-w-fit animate-pulse">
                    {control.key}
                  </div>
                  <div className="text-white text-sm leading-relaxed">
                    {control.action}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Combo Attacks */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Zap size={32} className="text-blue-400" />
            <h3 className="text-3xl font-bold text-blue-400 font-jpserif">Combo Attacks</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comboAttacks.map((combo, index) => (
              <div
                key={index}
                className="group backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-lg p-4 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="text-gray-300 font-semibold">
                    {combo.combo}
                  </div>
                  <div className="text-blue-400 font-semibold">
                    = {combo.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Definitions */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Info size={32} className="text-blue-400" />
            <h3 className="text-3xl font-bold text-blue-400 font-jpserif">Definitions</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {definitions.map((def, index) => (
              <div
                key={index}
                className="group backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-blue-400 mb-3 group-hover:text-white transition-colors duration-300">
                  {def.term}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {def.definition}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="text-center">
          <div className="backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-400 mb-4 font-jpserif">Master's Tip</h3>
            <p className="text-gray-400 mb-6">
              Perfect timing is everything. Master your Parries and Tempo Attacks to dominate the battlefield.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-blue-400 font-semibold font-jpserif">Practice</div>
                <div className="text-gray-500">Perfect your timing</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold font-jpserif">Adapt</div>
                <div className="text-gray-500">Read your opponent</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold font-jpserif">Honor</div>
                <div className="text-gray-500">Fight with integrity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameControlsPage;