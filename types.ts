// Fix: Import React to resolve 'Cannot find namespace React' error
import React from 'react';

export interface Pokemon {
  id: string;
  name: string;
  type: 'Fire' | 'Water' | 'Grass' | 'Electric' | 'Psychic' | 'Dragon';
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  description: string;
  image: string;
  rarity: 'Common' | 'Rare' | 'Legendary';
  color: string;
}

export type TabId = 'cards' | 'arena' | 'stats' | 'settings';

export interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}