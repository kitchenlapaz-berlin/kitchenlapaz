
import React from 'react';

interface HeroProps {
  id?: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <div id={id} className="relative w-full flex flex-col items-center justify-center overflow-hidden z-10 bg-[#004D38] text-white">

      {/* =========================================
          DESKTOP VERSION
         ========================================= */}
      <div className="hidden md:flex relative h-[92vh] w-full flex-col items-center justify-center">

        {/* Background - Warm Mexican Restaurant Interior */}
        {/* Background - Video with Fallback Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=2000"
          >
            <source src="/media/hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Warm Gradient Overlay to tint it Green/Warm */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#004D38]/80 via-[#004D38]/50 to-[#004D38]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#E85E21]/10 mix-blend-overlay" /> {/* Orange tint for warmth */}

        <div className="relative z-10 flex flex-col items-center w-full max-w-[90vw]">

          {/* Top Detail - Decorative Pattern Line */}
          <div className="absolute top-0 w-full h-2 bg-repeat-x opacity-30"
            style={{ backgroundImage: 'linear-gradient(90deg, #F4B806 50%, transparent 50%)', backgroundSize: '20px 2px' }}>
          </div>

          <div className="absolute top-8 left-0 font-lapaz-title text-sm uppercase tracking-[0.2em] text-[#F4B806]">
            Desde 1997
          </div>

          <div className="absolute top-8 right-0 font-lapaz-title text-sm uppercase tracking-[0.2em] text-[#F4B806]">
            Berlin
          </div>

          {/* Main Title - LA PAZ Logo Style */}
          <div className="flex flex-col items-center w-full -mt-8 leading-none mt-10">


            <div className="relative">
              {/* Main Text Layer - Green Fill, Gold Outline - Clean, No Shadow */}
              <h1
                className="relative z-10 font-lapaz-title text-[18vw] uppercase tracking-tighter text-[#009B77]"
                style={{
                  WebkitTextStroke: '4px #F4B806'
                }}
              >
                LA PAZ
              </h1>
            </div>
          </div>

          {/* Bottom Labels */}
          <div className="mt-12 flex items-center justify-center space-x-12 w-full max-w-4xl border-t-2 border-[#F4B806]/50 pt-8">
            <span className="font-lapaz-title text-xl text-[#F4B806] uppercase tracking-wide">Comida</span>
            <span className="w-2 h-2 rounded-full bg-[#E85E21]"></span>
            <span className="font-lapaz-title text-xl text-[#F4B806] uppercase tracking-wide">Bebidas</span>
            <span className="w-2 h-2 rounded-full bg-[#E85E21]"></span>
            <span className="font-lapaz-title text-xl text-[#F4B806] uppercase tracking-wide">Amigos</span>
          </div>
        </div>
      </div>


      {/* =========================================
          MOBILE VERSION
         ========================================= */}
      <div className="flex md:hidden relative h-[85vh] w-full flex-col p-6 items-center justify-center overflow-hidden">
        {/* Background - Video with Fallback Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800"
          >
            <source src="/media/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay for Mobile (Matched with Desktop) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#004D38]/80 via-[#004D38]/50 to-[#004D38]/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[#E85E21]/10 mix-blend-overlay" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-between h-full pt-12 pb-32 w-full">

          {/* Top Row */}
          <div className="w-full flex justify-between items-start">
            <span className="font-lapaz-text font-bold text-xs uppercase tracking-widest text-[#F4B806]">Est. 1997</span>
            <span className="font-lapaz-text font-bold text-xs uppercase tracking-widest text-[#F4B806]">Berlin</span>
          </div>

          {/* Center Logo */}
          <div className="flex flex-col items-center w-full -mt-8">
            <h1
              className="font-lapaz-title text-[28vw] leading-[0.9] tracking-tighter uppercase text-center text-[#009B77]"
              style={{
                WebkitTextStroke: '2px #F4B806'
              }}
            >
              LA PAZ
            </h1>

            <div className="mt-6 bg-[#E85E21] px-6 py-2 rounded-sm transform shadow-lg">
              <span className="font-lapaz-title text-white text-lg tracking-wide uppercase">Mexican Food</span>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="w-full flex justify-between items-end border-b-2 border-[#F4B806]/30 pb-4">
            <div className="flex flex-col">
              <span className="font-lapaz-title text-lg text-white">Open Daily</span>
              <span className="text-sm text-[#F4B806] opacity-80 uppercase">12:00 — 23:00</span>
            </div>
            <div className="animate-bounce text-[#F4B806]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Hero;
