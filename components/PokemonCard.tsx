import React from 'react';
import { motion } from 'framer-motion';
import { Pokemon } from '../types';
import { Shield, Wind, Swords } from 'lucide-react';

interface PokemonCardProps {
  pokemon: Pokemon;
  isSelected?: boolean;
  onClick?: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, isSelected, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${pokemon.id}`}
      className={`relative w-full aspect-[2/3] max-w-[320px] mx-auto rounded-2xl p-2 cursor-pointer select-none transition-all duration-300 transform preserve-3d group ${isSelected ? 'scale-[1.02] ring-4 ring-poke-yellow z-10' : 'hover:scale-[1.02] hover:z-10'}`}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
    >
      {/* Card Background / Frame */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pokemon.color} p-1 shadow-card`}>
        <div className="absolute inset-0 rounded-2xl bg-black/10 mix-blend-overlay z-10 pointer-events-none holographic" />
        
        {/* Inner Content Area */}
        <div className="h-full w-full bg-slate-900 rounded-xl flex flex-col overflow-hidden relative z-20">
          
          {/* Header */}
          <div className="flex justify-between items-center p-2 bg-black/20 h-[12%]">
             <div className="flex items-center space-x-1 overflow-hidden">
               <span className="text-[10px] font-bold bg-white/20 px-1.5 py-0.5 rounded text-white uppercase tracking-wider shrink-0">
                 {pokemon.rarity.charAt(0)}
               </span>
               <h3 className="font-heading text-sm sm:text-base text-white drop-shadow-md truncate">{pokemon.name}</h3>
             </div>
             <div className="flex items-center space-x-1 text-white/90 shrink-0">
               <span className="text-[8px] font-bold">HP</span>
               <span className="font-heading text-sm text-red-400">{pokemon.hp}</span>
             </div>
          </div>

          {/* Image Container */}
          <div className="relative mx-2 mt-1 h-[45%] rounded border-2 border-white/20 overflow-hidden bg-black/40 group-hover:border-poke-yellow transition-colors duration-300">
             <img 
               src={pokemon.image} 
               alt={pokemon.name} 
               className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-110 drop-shadow-xl" 
             />
             <div className="absolute bottom-0 right-0 p-1">
               <span className={`text-[8px] font-bold px-2 py-0.5 rounded-tl-lg text-white bg-gradient-to-r ${pokemon.color}`}>
                 {pokemon.type}
               </span>
             </div>
          </div>

          {/* Stats & Info */}
          <div className="flex-1 p-2 flex flex-col justify-between relative">
             {/* Divider */}
             <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent my-1" />

             <p className="text-[9px] text-gray-300 leading-tight italic opacity-90 line-clamp-2">
               "{pokemon.description}"
             </p>

             {/* Stats Grid */}
             <div className="grid grid-cols-3 gap-1 text-center mt-1">
                <div className="bg-white/5 rounded p-1 flex flex-col items-center">
                  <Swords size={10} className="text-poke-red mb-0.5" />
                  <span className="text-[8px] text-gray-400">ATK</span>
                  <span className="font-bold text-white text-xs">{pokemon.attack}</span>
                </div>
                <div className="bg-white/5 rounded p-1 flex flex-col items-center">
                  <Shield size={10} className="text-poke-blue mb-0.5" />
                  <span className="text-[8px] text-gray-400">DEF</span>
                  <span className="font-bold text-white text-xs">{pokemon.defense}</span>
                </div>
                <div className="bg-white/5 rounded p-1 flex flex-col items-center">
                  <Wind size={10} className="text-green-400 mb-0.5" />
                  <span className="text-[8px] text-gray-400">SPD</span>
                  <span className="font-bold text-white text-xs">{pokemon.speed}</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PokemonCard;