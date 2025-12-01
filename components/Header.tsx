import React from 'react';
import { Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative z-50 pt-4 pb-2 px-6 flex justify-between items-center bg-gradient-to-b from-poke-dark/80 to-transparent">
        <div className="flex items-center gap-3">
            <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 to-red-400 border-2 border-white shadow-lg flex items-center justify-center relative overflow-hidden animate-pulse">
                    <div className="absolute w-full h-0.5 bg-poke-dark top-1/2 -translate-y-1/2"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full border-2 border-poke-dark z-10"></div>
                </div>
            </div>
            <div>
                <h1 className="font-heading text-2xl md:text-3xl text-poke-yellow drop-shadow-[0_2px_0_rgba(42,117,187,1)] tracking-wide">
                    POCKET<span className="text-white">MON</span>
                </h1>
                <p className="text-[10px] text-blue-200 font-bold tracking-[0.2em] uppercase">Battle Arena</p>
            </div>
        </div>

        <div className="glass-panel px-3 py-1 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-xs font-bold text-white uppercase">Online</span>
        </div>
    </header>
  );
};

export default Header;
