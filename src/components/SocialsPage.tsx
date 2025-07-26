import React from 'react';
import { MessageCircle, Youtube, Music } from 'lucide-react';

const SocialsPage: React.FC = () => {
  const socials = [
    {
      name: 'Discord',
      icon: MessageCircle,
      description: 'Join our community of warriors',
      members: '7k+ Members',
      color: 'blue',
      link: 'https://discord.com/invite/tunastudio',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      description: 'Watch epic gameplay and tutorials',
      members: '600+ Subscribers',
      color: 'blue',
      link: 'https://www.youtube.com/@tunastudiogame',
    },
    {
      name: 'TikTok',
      icon: Music,
      description: 'Quick clips and highlights',
      members: '1.5+ Followers',
      color: 'blue',
      link: 'https://www.tiktok.com/@tunastudiott',
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 flex items-center justify-center animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 samurai-title">
            Join the Community
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-jpserif">
            Connect with fellow samurai warriors across all platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socials.map((social, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 cursor-pointer"
              onClick={() => window.open(social.link, '_blank')}
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-400/20 transition-colors duration-300 mx-auto group-hover:scale-110">
                <social.icon size={40} className="text-blue-400" />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400">
                  {social.name}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {social.description}
                </p>

                <div className="inline-block px-4 py-2 bg-blue-400/20 rounded-full text-sm font-semibold text-blue-400 mb-6">
                  {social.members}
                </div>

                <button className="w-full py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white hover:border-blue-400/50 hover:bg-blue-400/20 hover:text-blue-400 transition-all duration-300 font-semibold">
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional community info */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Community Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
              <div className="space-y-2">
                <div className="text-blue-400 font-semibold">Respect</div>
                <div className="text-sm">Honor all community members</div>
              </div>
              <div className="space-y-2">
                <div className="text-blue-400 font-semibold">Integrity</div>
                <div className="text-sm">Play fair and report issues</div>
              </div>
              <div className="space-y-2">
                <div className="text-blue-400 font-semibold">Support</div>
                <div className="text-sm">Help fellow warriors grow</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialsPage;