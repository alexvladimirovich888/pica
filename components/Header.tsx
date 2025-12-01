import React from 'react';
import { Twitter, Rocket, ExternalLink } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative z-50 pt-4 pb-2 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-poke-dark/90 to-transparent gap-4 md:gap-0">
        <div className="flex items-center gap-3">
            <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 to-red-400 border-2 border-white shadow-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute w-full h-0.5 bg-poke-dark top-1/2 -translate-y-1/2"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full border-2 border-poke-dark z-10"></div>
                </div>
            </div>
            <div>
                <h1 className="font-heading text-2xl md:text-3xl text-poke-yellow drop-shadow-[0_2px_0_rgba(42,117,187,1)] tracking-wide whitespace-nowrap">
                    POCKE<span className="text-white"> BATTLE</span>
                </h1>
                <p className="text-[10px] text-blue-200 font-bold tracking-[0.2em] uppercase">Arena</p>
            </div>
        </div>

        <div className="flex items-center gap-3">
            {/* X (Twitter) Button */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-black/80 hover:bg-black text-white px-4 py-2 rounded-full border border-white/20 shadow-glossy transition-all duration-300 active:scale-95 flex items-center gap-2"
            >
               <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
               <Twitter size={16} fill="currentColor" />
               <span className="font-heading text-xs uppercase tracking-wider relative z-10">X.com</span>
            </a>

            {/* Pump.fun Button */}
            <a 
              href="https://pump.fun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-green-500 hover:bg-green-400 text-poke-dark px-4 py-2 rounded-full border-b-4 border-green-700 shadow-glossy transition-all duration-300 active:scale-95 active:border-b-0 active:translate-y-1 flex items-center gap-2"
            >
               <Rocket size={16} className="group-hover:animate-pulse" />
               <span className="font-heading text-xs uppercase tracking-wider font-bold">Pump.fun</span>
               <ExternalLink size={12} className="opacity-50" />
            </a>
        </div>
    </header>
  );
};

export default Header;