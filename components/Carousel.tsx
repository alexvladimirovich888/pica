import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Pokemon } from '../types';
import PokemonCard from './PokemonCard';

interface CarouselProps {
  pokemons: Pokemon[];
  selectedId: string | null;
  onSelect: (pokemon: Pokemon) => void;
}

const Carousel: React.FC<CarouselProps> = ({ pokemons, selectedId, onSelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden py-4">
      {/* Scroll indicator overlay left */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-poke-dark to-transparent z-10 pointer-events-none" />
      {/* Scroll indicator overlay right */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-poke-dark to-transparent z-10 pointer-events-none" />

      <motion.div 
        ref={scrollRef}
        className="flex space-x-8 px-16 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-4 items-center h-full"
        style={{ scrollBehavior: 'smooth' }}
      >
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="snap-center shrink-0 perspective-1000">
            <PokemonCard 
              pokemon={pokemon} 
              isSelected={selectedId === pokemon.id}
              onClick={() => onSelect(pokemon)}
            />
          </div>
        ))}
        {/* Spacer for right padding */}
        <div className="w-8 shrink-0" />
      </motion.div>

      <div className="absolute bottom-4 text-white/50 text-xs font-bold tracking-widest uppercase animate-pulse">
        &larr; Swipe to Explore &rarr;
      </div>
    </div>
  );
};

export default Carousel;
