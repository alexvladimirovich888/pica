import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pokemon } from '../types';
import Button from './Button';
import { Zap, Swords, Wallet } from 'lucide-react';

interface ArenaProps {
  selectedPokemon: Pokemon | null;
  onNavigateToCards: () => void;
}

const Arena: React.FC<ArenaProps> = ({ selectedPokemon, onNavigateToCards }) => {
  const [solAmount, setSolAmount] = useState<string>('0.5');
  const [isBattling, setIsBattling] = useState(false);

  const handleBattle = () => {
    setIsBattling(true);
    setTimeout(() => setIsBattling(false), 2000);
  };

  if (!selectedPokemon) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-6">
        <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center animate-bounce">
            <Swords size={48} className="text-white/40" />
        </div>
        <h2 className="font-heading text-2xl text-white">No Fighter Selected</h2>
        <p className="text-blue-100 max-w-sm">
          Please return to the Cards deck and select a Pokémon to enter the Battle Arena.
        </p>
        <Button onClick={onNavigateToCards}>Select Pokémon</Button>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full flex flex-col md:flex-row items-center justify-between p-4 md:p-8 gap-6 max-w-6xl mx-auto">
      
      {/* Background Visuals */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 z-0 pointer-events-none" />
      
      {/* Left: Fighter Stats */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="relative z-10 flex-1 w-full flex flex-col items-center md:items-start space-y-4 order-2 md:order-1"
      >
        <div className="glass-panel p-6 rounded-3xl w-full max-w-md relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-10">
            <Zap size={120} />
          </div>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 rounded-full border-2 border-poke-yellow overflow-hidden bg-black/50 p-1">
                <img src={selectedPokemon.image} alt={selectedPokemon.name} className="w-full h-full object-contain" />
            </div>
            <div>
                <h2 className="font-heading text-2xl text-white">{selectedPokemon.name}</h2>
                <div className="flex space-x-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded bg-gradient-to-r ${selectedPokemon.color} text-white font-bold`}>
                        Lvl. 50
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/20 text-white font-bold">
                        {selectedPokemon.type}
                    </span>
                </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="w-full">
                <div className="flex justify-between text-xs text-blue-200 mb-1">
                    <span>Health</span>
                    <span>{selectedPokemon.hp}/150</span>
                </div>
                <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(selectedPokemon.hp / 150) * 100}%` }}
                        className="h-full bg-green-400" 
                    />
                </div>
            </div>
            <div className="w-full">
                <div className="flex justify-between text-xs text-blue-200 mb-1">
                    <span>Stamina</span>
                    <span>85%</span>
                </div>
                <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        className="h-full bg-poke-yellow" 
                    />
                </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Middle: VS Animation (Decorative) */}
      <div className="relative z-10 order-1 md:order-2">
         <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/10 flex items-center justify-center relative"
         >
             <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-spin-slow" />
             <img src={selectedPokemon.image} className="w-3/4 h-3/4 object-contain drop-shadow-2xl" />
         </motion.div>
      </div>

      {/* Right: Betting Widget */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="relative z-10 flex-1 w-full flex justify-center md:justify-end order-3"
      >
        <div className="bg-white rounded-3xl p-1 shadow-card w-full max-w-sm">
            <div className="bg-slate-100 rounded-[20px] p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading text-xl text-poke-dark">Battle Wager</h3>
                    <div className="bg-poke-dark/10 p-2 rounded-full">
                        <Wallet size={20} className="text-poke-dark" />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="relative">
                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Amount (SOL)</label>
                        <div className="flex items-center mt-1">
                            <input 
                                type="number" 
                                value={solAmount}
                                onChange={(e) => setSolAmount(e.target.value)}
                                className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 font-heading text-lg text-poke-dark focus:outline-none focus:border-poke-blue transition-colors"
                            />
                            <div className="absolute right-4 bottom-3 pointer-events-none">
                                <span className="text-xs font-bold text-poke-blue bg-blue-100 px-2 py-1 rounded">SOL</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-500 px-1">
                        <span>Balance: 12.5 SOL</span>
                        <span className="text-poke-blue font-bold cursor-pointer hover:underline">Max</span>
                    </div>

                    <Button 
                        size="lg" 
                        className="w-full mt-2" 
                        onClick={handleBattle}
                        disabled={isBattling}
                    >
                        {isBattling ? 'Battling...' : 'Place Bet & Fight'}
                    </Button>

                    <div className="text-center text-[10px] text-gray-400 mt-2">
                        Win multiplier: <span className="text-green-600 font-bold">2.5x</span>
                    </div>
                </div>
            </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Arena;