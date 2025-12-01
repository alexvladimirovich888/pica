import React from 'react';
import { motion } from 'framer-motion';
import { Pokemon } from '../types';
import PokemonCard from './PokemonCard';

interface CardGridProps {
  pokemons: Pokemon[];
  selectedId: string | null;
  onSelect: (pokemon: Pokemon) => void;
}

const CardGrid: React.FC<CardGridProps> = ({ pokemons, selectedId, onSelect }) => {
  return (
    <div className="w-full h-full overflow-y-auto pb-32 px-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
      <div className="max-w-6xl mx-auto pt-4">
        {/* Grid Layout: 1 col mobile, 2 col tablet, 3 col desktop */}
        <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.05
                    }
                }
            }}
        >
            {pokemons.map((pokemon) => (
            <motion.div 
                key={pokemon.id}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <PokemonCard 
                pokemon={pokemon} 
                isSelected={selectedId === pokemon.id}
                onClick={() => onSelect(pokemon)}
                />
            </motion.div>
            ))}
        </motion.div>

        {/* Bottom Spacer/Message */}
        <div className="py-8 text-center">
             <p className="text-white/30 text-xs font-heading tracking-widest uppercase">
                 End of Collection
             </p>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;