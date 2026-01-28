
import React, { useEffect, useRef, useState } from 'react';

interface ValuesSectionProps {
  id?: string;
}

const ValuesSection: React.FC<ValuesSectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;

      const progress = Math.min(Math.max(-rect.top / (totalHeight - windowHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [
    {
      id: "01",
      title: "UNSER",
      accent: "RESTAURANT",
      desc: "Ein Ort der Begegnung. Zentral gelegen, mit einer Terrasse für sonnige Tage und gemütlichen Ecken für lange Abende.",
      img: "/media/ambiente4.png",
    },
    {
      id: "02",
      title: "UNSERE",
      accent: "KARTE",
      desc: "Eine Reise durch die Vielfalt Mexikos. Von klassischen Tacos bis zu modernen Interpretationen – frisch zubereitet mit besten Zutaten.",
      img: "/media/Value2.jpg",
      link: "/media/LaPaz Speisekarte (2).pdf"
    },
    {
      id: "03",
      title: "UNSER",
      accent: "AMBIENTE",
      desc: "Farbenfroh, lebendig und herzlich. Fühl dich wie in Mexiko, umgeben von Kunst, Musik und guter Laune.",
      img: "/media/Value3.jpg",
    },
    {
      id: "04",
      title: "ECHTER",
      accent: "GENUSS",
      desc: "Liebe geht durch den Magen. Wir kochen nach traditionellen Rezepten, die über Generationen weitergegeben wurden.",
      img: "/media/essen3.png",
    }
  ];

  const horizontalLimit = 0.7;
  const horizontalProgress = Math.min(scrollProgress / horizontalLimit, 1);
  const xTranslation = horizontalProgress * -75;

  return (
    <div
      id={id}
      ref={sectionRef}
      className="relative h-[500vh] bg-[#FCF5E5] z-[30] rounded-t-[2.5rem] md:rounded-t-[4rem] overflow-visible"
      style={{ marginTop: '-4rem' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem]">

        {/* Subtle decorative top border inside */}
        <div className="absolute top-8 left-0 right-0 h-px bg-[#004D38]/10 mx-6 md:mx-12 z-20"></div>

        {/* Progress Bar - Thinner, Elegant Gold */}
        <div className="absolute top-0 left-0 h-1.5 bg-[#F4B806] z-50 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }}></div>

        <div
          className="flex h-full will-change-transform"
          style={{
            width: '400%',
            transform: `translateX(${xTranslation}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className="w-screen h-full flex flex-col justify-center px-6 md:px-24 relative overflow-hidden"
            >
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20 items-center h-full pt-16 pb-24 md:py-0 max-w-[90vw] mx-auto">

                {/* Text Content */}
                <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1">
                  <div className="flex items-center space-x-4 mb-6 md:mb-10">
                    <span className="font-lapaz-title text-sm md:text-base text-[#E85E21] tracking-[0.3em] uppercase border border-[#E85E21] px-3 py-1 rounded-full bg-[#E85E21]/5">Value {item.id}</span>
                  </div>

                  <h2 className="font-lapaz-title text-5xl md:text-[5.5rem] font-bold leading-[0.95] uppercase tracking-tight text-[#004D38] mb-8">
                    {item.title} <br />
                    {/* @ts-ignore - link property exists on some items */}
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <span className="text-[#E85E21] italic font-serif lowercase tracking-normal border-b-2 border-[#E85E21]/30 hover:border-[#E85E21]" style={{ fontFamily: 'Georgia, serif' }}>{item.accent.toLowerCase()}</span>
                      </a>
                    ) : (
                      <span className="text-[#E85E21] italic font-serif lowercase tracking-normal" style={{ fontFamily: 'Georgia, serif' }}>{item.accent.toLowerCase()}</span>
                    )}
                  </h2>

                  <p className="max-w-md text-[#004D38] text-base md:text-xl leading-relaxed font-lapaz-text font-light opacity-90 border-l border-[#004D38]/20 pl-6">
                    {item.desc}
                  </p>
                </div>

                {/* Image Content - "Noble" framing */}
                <div className="md:col-span-7 flex justify-end relative order-1 md:order-2">
                  <div className="w-full md:w-[90%] aspect-[4/3] md:aspect-[16/10] relative group">
                    {/* Decorative corner accents */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#E85E21] rounded-tr-xl z-20"></div>
                    <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-[#E85E21] rounded-bl-xl z-20"></div>

                    <div className="w-full h-full overflow-hidden rounded-xl shadow-[20px_20px_0px_rgba(0,77,56,0.1)] bg-[#004D38]/5">
                      <img
                        src={item.img}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out scale-105 group-hover:scale-100"
                        alt={item.title}
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Indicators - Minimalist */}
        <div className="absolute bottom-10 left-6 md:left-24 flex space-x-4 z-50">
          {items.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 transition-all duration-500 rounded-full ${Math.floor(horizontalProgress * 3.99) === i ? 'w-16 bg-[#004D38]' : 'w-4 bg-[#004D38]/20'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
