import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import Arena from './components/Arena';
import { TabId, Pokemon } from './types';
import { POKEMON_DATA } from './constants';
import { Settings, BarChart2 } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('cards');
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(POKEMON_DATA[0]);

  // Handle switching tabs
  const handleTabChange = (id: TabId) => {
    setActiveTab(id);
  };

  // Handle Pokemon selection from Carousel
  const handlePokemonSelect = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    // Optional: vibrate or sound effect here
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'cards':
        return (
          <Carousel 
            pokemons={POKEMON_DATA} 
            selectedId={selectedPokemon?.id || null} 
            onSelect={handlePokemonSelect} 
          />
        );
      case 'arena':
        return (
          <Arena 
            selectedPokemon={selectedPokemon} 
            onNavigateToCards={() => setActiveTab('cards')} 
          />
        );
      case 'stats':
        return (
          <div className="flex flex-col items-center justify-center h-full text-white space-y-4 opacity-80">
            <BarChart2 size={64} className="text-poke-yellow" />
            <h2 className="font-heading text-2xl">Global Stats</h2>
            <p>Coming Soon</p>
          </div>
        );
      case 'settings':
        return (
            <div className="flex flex-col items-center justify-center h-full text-white space-y-4 opacity-80">
            <Settings size={64} className="text-poke-yellow animate-spin-slow" />
            <h2 className="font-heading text-2xl">Settings</h2>
            <p>Audio & Visual Config</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-poke-dark relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-poke-blue/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-poke-yellow/10 rounded-full blur-[80px] pointer-events-none" />

        <Header />

        {/* Main Content Area */}
        <main className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>

        <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
        
        {/* Minimal Footer */}
        <footer className="absolute bottom-1 right-2 z-0 opacity-20 pointer-events-none">
            <div className="w-16 h-16 rounded-full border-4 border-white"></div>
        </footer>
    </div>
  );
};

export default App;
