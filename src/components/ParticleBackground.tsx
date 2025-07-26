import React from 'react';

const ParticleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none bg-black">
      {/* Geleneksel Japon gecesi arka planı */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-indigo-900/5"></div>
      
      {/* Ay ışığı büyülü orb'ları */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl animate-moonlight"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-300/6 rounded-full blur-3xl animate-moonlight delay-4000"></div>
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-indigo-200/5 rounded-full blur-2xl animate-spirit-float"></div>
      
      {/* Katana kılıç auraları */}
      <div className="absolute top-1/4 left-1/3 w-4 h-80 bg-gradient-to-b from-blue-300/40 via-slate-400/20 to-transparent rotate-45 blur-md animate-katana-aura opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-4 h-72 bg-gradient-to-t from-indigo-300/35 via-gray-400/15 to-transparent -rotate-45 blur-md animate-katana-aura delay-3000 opacity-45"></div>
      <div className="absolute top-1/3 right-1/2 w-3 h-60 bg-gradient-to-b from-slate-400/30 to-transparent rotate-12 blur-md animate-katana-aura delay-5000 opacity-40"></div>
      
      {/* Bambu yaprakları rüzgarı */}
      <div className="absolute top-10 left-1/4 w-8 h-2 bg-slate-400/20 rounded-full rotate-45 animate-bamboo-leaf"></div>
      <div className="absolute top-32 right-1/3 w-6 h-1.5 bg-gray-400/18 rounded-full rotate-12 animate-bamboo-leaf delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-10 h-2.5 bg-slate-300/15 rounded-full -rotate-30 animate-bamboo-leaf delay-4000"></div>
      <div className="absolute bottom-40 right-1/4 w-7 h-2 bg-indigo-400/12 rounded-full rotate-60 animate-bamboo-leaf delay-6000"></div>
      
      {/* Sakura çiçek yaprakları */}
      <div className="absolute top-1/4 left-1/2 w-3 h-3 bg-pink-200/30 rounded-full animate-sakura-fall"></div>
      <div className="absolute top-1/3 right-1/3 w-2.5 h-2.5 bg-pink-100/25 rounded-full animate-sakura-fall delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-3.5 h-3.5 bg-rose-200/20 rounded-full animate-sakura-fall delay-3000"></div>
      <div className="absolute top-2/3 right-1/2 w-2 h-2 bg-pink-300/35 rounded-full animate-sakura-fall delay-5000"></div>
      
      {/* Mistik kar tanecikleri */}
      <div className="absolute top-0 left-1/6 w-1 h-1 bg-slate-200/40 rounded-full animate-snow-fall"></div>
      <div className="absolute top-0 left-2/6 w-0.5 h-0.5 bg-gray-200/30 rounded-full animate-snow-fall delay-1000"></div>
      <div className="absolute top-0 right-1/5 w-1.5 h-1.5 bg-blue-100/20 rounded-full animate-snow-fall delay-2000"></div>
      <div className="absolute top-0 right-2/5 w-1 h-1 bg-indigo-100/25 rounded-full animate-snow-fall delay-3000"></div>
      <div className="absolute top-0 left-1/2 w-0.5 h-0.5 bg-slate-100/35 rounded-full animate-snow-fall delay-4000"></div>
      
      {/* Ruh alevleri (will-o'-wisp) */}
      <div className="absolute top-1/3 right-20 w-16 h-24 bg-gradient-to-t from-blue-400/30 via-slate-300/15 to-transparent rounded-full blur-lg animate-spirit-flame opacity-60"></div>
      <div className="absolute bottom-1/4 left-16 w-12 h-20 bg-gradient-to-t from-indigo-400/25 via-gray-300/10 to-transparent rounded-full blur-lg animate-spirit-flame delay-2000 opacity-50"></div>
      <div className="absolute top-1/2 left-1/3 w-14 h-22 bg-gradient-to-t from-slate-400/20 via-blue-200/8 to-transparent rounded-full blur-lg animate-spirit-flame delay-4000 opacity-45"></div>
      
      {/* Samuray ruh çizgileri */}
      <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-300/15 via-transparent to-slate-300/10 animate-spirit-line"></div>
      <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-indigo-300/12 via-transparent to-gray-300/8 animate-spirit-line delay-2000"></div>
      
      {/* Ay ışığı şeritleri */}
      <div className="absolute top-16 right-32 w-64 h-0.5 bg-gradient-to-r from-transparent via-slate-300/40 to-transparent rotate-12 blur-sm animate-moonbeam opacity-30"></div>
      <div className="absolute bottom-24 left-40 w-48 h-0.5 bg-gradient-to-l from-transparent via-blue-300/35 to-transparent -rotate-12 blur-sm animate-moonbeam delay-3000 opacity-25"></div>
      <div className="absolute top-1/2 left-20 w-56 h-0.5 bg-gradient-to-r from-transparent via-indigo-300/25 to-transparent rotate-6 blur-sm animate-moonbeam delay-5000 opacity-20"></div>
      
      {/* Hayalet bulutlar */}
      <div className="absolute top-1/4 left-0 w-full h-8 bg-gradient-to-r from-transparent via-slate-400/8 to-transparent animate-ghost-cloud opacity-15"></div>
      <div className="absolute bottom-1/3 left-0 w-full h-6 bg-gradient-to-r from-transparent via-gray-400/6 to-transparent animate-ghost-cloud delay-4000 opacity-12"></div>
      
      {/* Mistik enerji orb'ları */}
      <div className="absolute top-20 left-40 w-2 h-2 bg-blue-300/50 rounded-full animate-mystic-orb blur-sm"></div>
      <div className="absolute top-60 right-60 w-1.5 h-1.5 bg-slate-300/45 rounded-full animate-mystic-orb delay-2000 blur-sm"></div>
      <div className="absolute bottom-32 left-80 w-2.5 h-2.5 bg-indigo-300/40 rounded-full animate-mystic-orb delay-4000 blur-sm"></div>
      <div className="absolute bottom-60 right-40 w-1.5 h-1.5 bg-gray-300/35 rounded-full animate-mystic-orb delay-6000 blur-sm"></div>
      
      {/* Katana kesim izleri */}
      <div className="absolute top-1/6 right-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-slate-400/50 to-transparent rotate-45 blur-md animate-slash-trail opacity-40"></div>
      <div className="absolute bottom-1/6 left-1/4 w-80 h-1 bg-gradient-to-l from-transparent via-blue-400/45 to-transparent -rotate-45 blur-md animate-slash-trail delay-4000 opacity-35"></div>
    </div>
  );
};

// Geleneksel Japon temalı animasyonlar
const style = document.createElement('style');
style.textContent = `
  @keyframes moonlight {
    0%, 100% { opacity: 0.08; transform: scale(1); }
    50% { opacity: 0.15; transform: scale(1.02); }
  }
  
  @keyframes spirit-float {
    0%, 100% { transform: translateY(0px); opacity: 0.05; }
    50% { transform: translateY(-15px); opacity: 0.1; }
  }
  
  @keyframes katana-aura {
    0% { opacity: 0; transform: scale(0.9) rotate(45deg); }
    30% { opacity: 0.5; transform: scale(1) rotate(45deg); }
    70% { opacity: 0.3; transform: scale(1.05) rotate(45deg); }
    100% { opacity: 0; transform: scale(1.1) rotate(45deg); }
  }
  
  @keyframes bamboo-leaf {
    0% { transform: rotate(45deg) translateX(0); opacity: 0.2; }
    25% { transform: rotate(50deg) translateX(20px); opacity: 0.15; }
    50% { transform: rotate(40deg) translateX(40px); opacity: 0.18; }
    75% { transform: rotate(55deg) translateX(60px); opacity: 0.12; }
    100% { transform: rotate(45deg) translateX(80px); opacity: 0; }
  }
  
  @keyframes sakura-fall {
    0% { transform: translateY(-20px) rotate(0deg); opacity: 0.3; }
    25% { transform: translateY(25vh) rotate(90deg); opacity: 0.25; }
    50% { transform: translateY(50vh) rotate(180deg); opacity: 0.2; }
    75% { transform: translateY(75vh) rotate(270deg); opacity: 0.15; }
    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
  }
  
  @keyframes snow-fall {
    0% { transform: translateY(-10px); opacity: 0.4; }
    100% { transform: translateY(100vh); opacity: 0; }
  }
  
  @keyframes spirit-flame {
    0%, 100% { transform: scaleY(1) scaleX(1); opacity: 0.6; }
    25% { transform: scaleY(1.1) scaleX(0.9); opacity: 0.5; }
    50% { transform: scaleY(0.9) scaleX(1.1); opacity: 0.45; }
    75% { transform: scaleY(1.05) scaleX(0.95); opacity: 0.55; }
  }
  
  @keyframes spirit-line {
    0%, 90%, 100% { opacity: 0; }
    5% { opacity: 0.15; }
    10% { opacity: 0.05; }
    15% { opacity: 0.12; }
    20% { opacity: 0.08; }
  }
  
  @keyframes moonbeam {
    0% { transform: scale(0) rotate(12deg); opacity: 0; }
    40% { transform: scale(1) rotate(12deg); opacity: 0.3; }
    100% { transform: scale(1.2) rotate(12deg); opacity: 0; }
  }
  
  @keyframes ghost-cloud {
    0% { transform: translateX(-100%); opacity: 0; }
    30% { opacity: 0.15; }
    70% { opacity: 0.12; }
    100% { transform: translateX(100%); opacity: 0; }
  }
  
  @keyframes mystic-orb {
    0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
    25% { transform: translate(30px, -20px) scale(1.1); opacity: 0.4; }
    50% { transform: translate(60px, 10px) scale(0.9); opacity: 0.35; }
    75% { transform: translate(40px, 30px) scale(1.05); opacity: 0.45; }
    100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
  }
  
  @keyframes slash-trail {
    0% { transform: scale(0) rotate(45deg); opacity: 0; }
    20% { transform: scale(0.5) rotate(45deg); opacity: 0.4; }
    50% { transform: scale(1) rotate(45deg); opacity: 0.35; }
    100% { transform: scale(1.5) rotate(45deg); opacity: 0; }
  }
  
  .animate-moonlight { animation: moonlight 8s ease-in-out infinite; }
  .animate-spirit-float { animation: spirit-float 12s ease-in-out infinite; }
  .animate-katana-aura { animation: katana-aura 6s ease-in-out infinite; }
  .animate-bamboo-leaf { animation: bamboo-leaf 15s ease-out infinite; }
  .animate-sakura-fall { animation: sakura-fall 20s linear infinite; }
  .animate-snow-fall { animation: snow-fall 18s linear infinite; }
  .animate-spirit-flame { animation: spirit-flame 4s ease-in-out infinite; }
  .animate-spirit-line { animation: spirit-line 3s ease-in-out infinite; }
  .animate-moonbeam { animation: moonbeam 7s ease-in-out infinite; }
  .animate-ghost-cloud { animation: ghost-cloud 25s ease-in-out infinite; }
  .animate-mystic-orb { animation: mystic-orb 12s ease-in-out infinite; }
  .animate-slash-trail { animation: slash-trail 5s ease-in-out infinite; }
`;
document.head.appendChild(style);

export default ParticleBackground;