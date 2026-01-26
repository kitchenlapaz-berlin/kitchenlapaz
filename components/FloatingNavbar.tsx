
import React, { useState } from 'react';

interface FloatingNavbarProps {
  onOpenReservation?: () => void;
}

const FloatingNavbar: React.FC<FloatingNavbarProps> = ({ onOpenReservation }) => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Hola' },
    { id: 'menu', label: 'Speisekarte' },
    { id: 'values', label: 'Ambiente' },
    { id: 'contact', label: 'Kontakt' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="fixed bottom-4 md:bottom-6 left-0 right-0 z-[100] flex justify-center px-2 md:px-4 pointer-events-none">
      <div className="pointer-events-auto bg-[#004D38] md:bg-[#004D38]/95 backdrop-blur-xl border-2 border-[#F4B806] rounded-xl p-1.5 md:p-2 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.6)] w-auto max-w-full md:max-w-none md:min-w-[420px]">

        {/* Nav Items - Compact on mobile */}
        <div className="flex items-center space-x-1 shrink-1 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-2 md:px-6 md:py-3 rounded-lg text-[10px] md:text-sm font-lapaz-title uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${activeSection === item.id
                  ? 'bg-[#F4B806] text-[#004D38] font-bold shadow-md transform -translate-y-0.5 md:-translate-y-1'
                  : 'text-[#F4B806]/70 hover:text-[#F4B806] hover:bg-[#F4B806]/10'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Button - Reduced padding/size on mobile */}
        <button
          onClick={onOpenReservation}
          className="ml-2 md:ml-3 bg-[#E85E21] text-white px-3 py-2 md:px-6 md:py-3 rounded-lg text-[10px] md:text-sm font-lapaz-title uppercase tracking-wider transition-all hover:bg-[#ff6f30] active:scale-95 shadow-lg whitespace-nowrap shrink-0 border border-white/10"
        >
          Reservieren
        </button>

      </div>
    </div>
  );
};

export default FloatingNavbar;
