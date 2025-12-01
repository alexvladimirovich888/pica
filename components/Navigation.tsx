import React from 'react';
import { motion } from 'framer-motion';
import { Tab, TabId } from '../types';
import { Layers, Swords, BarChart2, Settings } from 'lucide-react';

interface NavigationProps {
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
}

const TABS: Tab[] = [
  { id: 'cards', label: 'Deck', icon: <Layers size={20} /> },
  { id: 'arena', label: 'Arena', icon: <Swords size={20} /> },
  { id: 'stats', label: 'Stats', icon: <BarChart2 size={20} /> },
  { id: 'settings', label: 'Gear', icon: <Settings size={20} /> },
];

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="relative z-50 mx-4 mb-4">
      <div className="glass-panel rounded-full p-1.5 flex justify-between items-center max-w-lg mx-auto shadow-lg">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex-1 flex items-center justify-center py-3 px-2 rounded-full transition-colors duration-200 ${
                isActive ? 'text-poke-dark' : 'text-white/70 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-poke-yellow rounded-full shadow-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center space-x-2">
                {tab.icon}
                <span className={`font-heading text-sm hidden sm:inline ${isActive ? 'font-bold' : ''}`}>
                  {tab.label}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
