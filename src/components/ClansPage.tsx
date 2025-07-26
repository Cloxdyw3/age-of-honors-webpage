import React from 'react';
import { Sword, Shield, Trophy, Crown } from 'lucide-react';

// Klan fotoğraflarını import ediyoruz
import hellborne from '../assets/clans/alucard_logo.png';
import crimsonSamuraiImg from '../assets/clans/crimson_samurai.webp';
import goons from '../assets/clans/goons.png';
import goths from '../assets/clans/goths.png';

const clans = [
  {
    id: 1,
    name: "Hellborne [AOH]",
    leader: "akuma",
    wins: "N/A",
    image: hellborne,
    bannerColor: "from-red-500/20 via-rose-500/10 to-red-900/30",
    description: "WE ARE THE #1 EU AoH GUILD, STRUCTERED TO DOMINATE, DESTROY AND BE FEARED, WE WILL DO WHATEVER IT TAKES TO BE THE BEST AS WE STRIVE FOR HONOR AND GREATNESS. HAIL HELLBORNE!",
    achievements: ["N/A", "N/A", "N/A"],
    discord: "https://discord.com/invite/hellbornes"
  },
  {
    id: 2,
    name: "RUTHLESS",
    leader: "VLMP",
    wins: "N/A",
    image: crimsonSamuraiImg,
    bannerColor: "from-purple-500/20 via-indigo-500/10 to-purple-900/30",
    description: "Honor-bound warriors of the blade",
    achievements: ["N/A", "N/A", "N/A"],
    discord: "https://discord.gg/JnEQrHf5"
  },

  {
    id: 3,
    name: "World Class Gooner",
    leader: "TheUnknow_C",
    wins: "N/A",
    image: goons,
    bannerColor: "from-pink-500/20 via-pink-400/10 to-pink-900/30",
    description: "we are currently #1 gooner in the server [AOH], we only gooning to femboy, we will do whatever it take to get those femboy azz. we promise that we will make you say daddy daddy please give me some tylenol because my azz is real sore HAIL WORLD CLASS GOONER!",
    achievements: ["N/A", "N/A", "N/A"],
    discord: "https://discord.gg/v6W65fM5qC"
  },

  {
    id: 4,
    name: "Goth Honor Soldiers",
    leader: "timelxss",
    wins: "N/A",
    image: goths,
    bannerColor: "from-yellow-400/20 via-amber-300/10 to-yellow-700/30",
    description: "top oce guild ]]] goth honor soldiers = all pvp demons ]]] active server and regularly host events ]]] going to conquer all other guilds join or lose + your choice",
    achievements: ["N/A", "N/A", "N/A"],
    discord: "https://discord.gg/zEp76dR3"
  },

];


const ClansPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 animate-fadeIn pb-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 samurai-title relative">
            Clans
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-jpserif">
            Join the elite warrior clans and write your name in the annals of history
          </p>
        </div>
      </div>

      {/* Clans Section */}
      <div className="max-w-7xl mx-auto space-y-12">
        {clans.map((clan, index) => (
          <div 
            key={clan.id}
            className={`relative group ${index % 2 === 0 ? '' : 'text-right'}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${clan.bannerColor} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-40 group-hover:opacity-60`}></div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 rounded-3xl border border-white/10 backdrop-blur-lg bg-black/30">
              <div className={`space-y-6 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="flex items-center space-x-4 mb-4">
                  <Crown className={`w-8 h-8 text-yellow-400 ${index % 2 === 1 ? 'md:order-2' : ''}`} />
                  <h3 className="text-4xl font-bold text-white">{clan.name}</h3>
                </div>
                
                <div className={`flex items-center space-x-6 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-xl">
                    <p className="text-gray-400">Leader</p>
                    <p className="text-white font-bold">{clan.leader}</p>
                  </div>
                  <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-xl">
                    <p className="text-gray-400">Victories</p>
                    <p className="text-yellow-400 font-bold">{clan.wins}</p>
                  </div>
                </div>

                <p className="text-xl text-gray-300 font-jpserif">{clan.description}</p>

                <div className={`flex flex-wrap gap-3 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {clan.achievements.map((achievement, i) => (
                    <div 
                      key={i}
                      className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 flex items-center space-x-2"
                    >
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <span className="text-white text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
                {/* Discord Button */}
                <button
                  className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300"
                  onClick={() => window.open(clan.discord, "_blank")}
                >
                  Join Discord
                </button>
              </div>

              <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-2xl"></div>
                <img 
                  src={clan.image} 
                  alt={clan.name}
                  className="w-full h-[400px] object-cover rounded-2xl border border-white/10 transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Join Banner */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
          <div className="relative p-12 text-center backdrop-blur-lg bg-black/30">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join a Clan?</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-jpserif">
              Prove your worth in battle and join the ranks of legendary warriors
            </p>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-bold backdrop-blur-sm transition-all duration-300 hover:scale-105">
              Begin Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClansPage; 