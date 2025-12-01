import React from 'react';
import { motion } from 'framer-motion';
import { Pokemon } from '../types';
import { Shield, Zap, Wind, Swords } from 'lucide-react';

interface PokemonCardProps {
  pokemon: Pokemon;
  isSelected?: boolean;
  onClick?: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, isSelected, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${pokemon.id}`}
      className={`relative w-72 h-[420px] rounded-2xl p-3 cursor-pointer select-none transition-all duration-300 transform preserve-3d group ${isSelected ? 'scale-105 ring-4 ring-poke-yellow' : 'hover:scale-105'}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
    >
      {/* Card Background / Frame */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pokemon.color} p-1 shadow-card`}>
        <div className="absolute inset-0 rounded-2xl bg-black/10 mix-blend-overlay z-10 pointer-events-none holographic" />
        
        {/* Inner Content Area */}
        <div className="h-full w-full bg-slate-900 rounded-xl flex flex-col overflow-hidden relative z-20">
          
          {/* Header */}
          <div className="flex justify-between items-center p-2 bg-black/20">
             <div className="flex items-center space-x-1">
               <span className="text-xs font-bold bg-white/20 px-1.5 py-0.5 rounded text-white uppercase tracking-wider">
                 {pokemon.rarity.charAt(0)}
               </span>
               <h3 className="font-heading text-lg text-white drop-shadow-md">{pokemon.name}</h3>
             </div>
             <div className="flex items-center space-x-1 text-white/90">
               <span className="text-xs font-bold">HP</span>
               <span className="font-heading text-lg text-red-400">{pokemon.hp}</span>
             </div>
          </div>

          {/* Image Container */}
          <div className="relative mx-2 mt-1 h-44 rounded border-2 border-white/20 overflow-hidden bg-black/40 group-hover:border-poke-yellow transition-colors duration-300">
             <img 
               src={pokemon.image} 
               alt={pokemon.name} 
               className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-110 drop-shadow-xl" 
             />
             <div className="absolute bottom-0 right-0 p-1">
               <span className={`text-[10px] font-bold px-2 py-0.5 rounded-tl-lg text-white bg-gradient-to-r ${pokemon.color}`}>
                 {pokemon.type}
               </span>
             </div>
          </div>

          {/* Stats & Info */}
          <div className="flex-1 p-3 flex flex-col justify-between relative">
             {/* Divider */}
             <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent my-1" />

             <p className="text-[10px] text-gray-300 leading-tight italic opacity-90 mb-2">
               "{pokemon.description}"
             </p>

             {/* Stats Grid */}
             <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white/5 rounded p-1 flex flex-col items-center">
                  <Swords size={14} className="text-poke-red mb-0.5" />
                  <span className="text-xs text-gray-400">ATK</span>
                  <span className="font-bold text-white">{pokemon.attack}</span>
                </div>
                <div className="bg-white/5 rounded p-1 flex flex-col items-center">
                  <Shield size={14} className="text-poke-blue mb-0.5" />
                  <span className="text-xs text-gray-400">DEF</span>
                  <span className="font-bold text-white">{pokemon.defense}</span>
                </div>
                <div className="bg-white/5 rounded p-1 flex flex-col items-center">
                  <Wind size={14} className="text-green-400 mb-0.5" />
                  <span className="text-xs text-gray-400">SPD</span>
                  <span className="font-bold text-white">{pokemon.speed}</span>
                </div>
             </div>
             
             {/* Decorative Footer */}
             <div className="mt-2 flex justify-between items-center opacity-50">
                <div className="text-[9px] text-gray-500 font-mono tracking-widest">
                   ID No. 00{pokemon.id}
                </div>
                <div className="w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center">
                   <div className="w-2 h-0.5 bg-gray-500"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PokemonCard;