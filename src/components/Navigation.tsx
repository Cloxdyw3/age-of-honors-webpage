import React from 'react';
import { Home, BookOpen, Palette, Users, Sword, Zap, Map, Film, Badge, Globe} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'locations', label: 'Locations', icon: Map },
    { id: 'mechanics', label: 'Game Mechanics', icon: Film },
    { id: 'gamepasses', label: 'Gamepasses', icon: Badge },
    { id: 'gamecontrols', label: 'Game Controls', icon: BookOpen },
    { id: 'traits', label: 'Traits', icon: Zap },
    { id: 'weapons', label: 'Weapons', icon: Sword },
    { id: 'skins', label: 'Skins', icon: Palette },
    { id: "clans", label: "Clans", icon: Globe },
    { id: 'socials', label: 'Socials', icon: Users },
  ];

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-gray-900/30 border border-gray-700/50 rounded-2xl w-auto">
        <div className="px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo with enhanced styling */}
            <div 
              className="text-2xl font-bold text-white samurai-title cursor-pointer hover:text-blue-400 transition-colors duration-300 mr-12 whitespace-nowrap"
              onClick={() => onSectionChange('home')}
            >
              Age of Honor <span className="text-blue-400">義</span>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-gray-900/50'
                      : 'text-gray-300 hover:text-white hover:bg-gray-900/30'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu */}
            <div className="md:hidden flex space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-gray-900/50'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <item.icon size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

// Enhanced CSS effects
const style = document.createElement('style');
style.textContent = `
  .drop-shadow-glow {
    filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
  }
  
  .shadow-glow {
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default Navigation;