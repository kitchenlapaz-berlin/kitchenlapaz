
import React, { useRef, useEffect } from 'react';

interface GallerySectionProps {
  id?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ id }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initiales Scrollen zur Mitte
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const targetIndex = 1; // Start etwas weiter links
      const targetCard = container.children[targetIndex] as HTMLElement;

      if (targetCard) {
        const scrollPosition = targetCard.offsetLeft - (container.clientWidth / 2) + (targetCard.clientWidth / 2);

        container.scrollTo({
          left: scrollPosition,
          behavior: 'instant'
        });
      }
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const images = [
    {
      url: "/media/essen1.png",
      label: ""
    },
    {
      url: "/media/trinken2.png",
      label: ""
    },
    {
      url: "/media/ambiente4.png",
      label: ""
    },
    {
      url: "/media/essen3.png",
      label: ""
    },
    {
      url: "/media/trinken5.png",
      label: ""
    },
    {
      url: "/media/essen6.png",
      label: ""
    }
  ];

  return (
    <section id={id} className="relative bg-[#FCF5E5] z-30 py-24 md:py-32 rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-12 md:-mt-20 overflow-hidden border-t-8 border-[#E85E21]">
      {/* Pattern Overlay opacity */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#E85E21 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      {/* Header Bereich */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-8 relative z-10">
        <div>
          <h2 className="text-[#004D38] font-lapaz-title text-5xl md:text-8xl uppercase tracking-tighter leading-[0.9] mb-6">
            AUTHENTISCHE <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #004D38' }}>KÜCHE</span>
          </h2>
          <p className="max-w-md text-[#004D38] font-lapaz-text text-lg leading-relaxed font-medium">
            Erlebe ein Stück Mexiko mitten in Berlin und authentische mexikanische Küche.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-4 mb-2">
          <button
            onClick={() => scroll('left')}
            className="w-14 h-14 rounded-full border-2 border-[#004D38] flex items-center justify-center text-[#004D38] hover:bg-[#E85E21] hover:border-[#E85E21] hover:text-white transition-all duration-300 shadow-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-14 h-14 rounded-full border-2 border-[#004D38] flex items-center justify-center text-[#004D38] hover:bg-[#E85E21] hover:border-[#E85E21] hover:text-white transition-all duration-300 shadow-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* Slider Bereich */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 px-6 md:px-[10vw] pb-10"
      >
        {images.map((item, index) => (
          <div
            key={index}
            className="min-w-[80vw] md:min-w-[400px] aspect-[3/4] relative overflow-hidden snap-center group cursor-pointer bg-[#004D38] rounded-xl shadow-xl"
          >
            <img
              src={item.url}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
            {/* Green Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#004D38] via-transparent to-transparent opacity-90"></div>

            {/* Top Badge */}
            <div className="absolute top-4 right-4 bg-[#F4B806] px-3 py-1 transform rotate-3 shadow-md">
              <span className="font-lapaz-title text-[#004D38] text-xs uppercase tracking-widest font-bold">MX.0{index + 1}</span>
            </div>
          </div>
        ))}
        {/* Spacer at end */}
        <div className="min-w-[5vw] shrink-0"></div>
      </div>
    </section>
  );
};

export default GallerySection;
