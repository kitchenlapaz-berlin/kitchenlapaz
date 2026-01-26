
import React from 'react';

const Ticker: React.FC = () => {
  return (
    <div className="w-full bg-[#F4B806] py-3 overflow-hidden relative z-50 border-b-4 border-[#E85E21] select-none shadow-lg">

      {/* Aztec Pattern Overlay (Simulated via CSS stripes for now) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#E85E21] opacity-50"></div>

      <div className="animate-marquee flex whitespace-nowrap items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center">
            {/* Block 1: Brand */}
            {/* Block 1: Brand (Logo Image) */}
            <div className="px-6 flex items-center justify-center">
              <img
                src="/media/lapaz logo.png"
                alt="La Paz Logo"
                className="h-10 md:h-12 w-auto object-contain drop-shadow-sm"
              />
            </div>

            {/* Separator: Sun Icon simulation */}
            <span className="text-[#E85E21] px-4 text-2xl animate-spin-slow">☀</span>

            {/* Block 2: Vibe */}
            <span className="text-[#004D38] font-lapaz-title text-2xl md:text-3xl px-6 tracking-wide italic">
              Auténtico Mexicano
            </span>

            {/* Separator */}
            <span className="text-[#E85E21] px-4 text-2xl">☀</span>

            {/* Block 3: Outline Text */}
            <span
              className="font-lapaz-title text-2xl md:text-3xl px-6 tracking-wide text-transparent"
              style={{ WebkitTextStroke: '1.5px #004D38' }}
            >
              TACOS Y TEQUILA
            </span>

            {/* Separator */}
            <span className="text-[#E85E21] px-4 text-2xl">☀</span>

            {/* Block 4: Location */}
            <span className="text-[#004D38] font-lapaz-title text-2xl md:text-3xl px-6 tracking-wide uppercase">
              BERLIN MITTE
            </span>

            <span className="text-[#E85E21] px-4 text-2xl">☀</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
