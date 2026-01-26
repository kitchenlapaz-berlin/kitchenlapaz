
import React from 'react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      {/* Backdrop with Blur */}
      <div
        className="absolute inset-0 bg-[#001E15]/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* The Card - Compact Phone Modal (~20% screen covered roughly, effectively a clean card) */}
      <div className="relative w-full max-w-sm bg-[#004D38] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#F4B806]/30 overflow-hidden flex flex-col transition-all transform animate-fadeIn scale-100 p-8 text-center">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#F4B806]/50 hover:text-[#F4B806] transition-colors z-20"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>

        <h2 className="font-lapaz-title text-3xl text-white uppercase mb-2">Reservierung</h2>
        <div className="w-16 h-1 bg-[#E85E21] mx-auto mb-6"></div>

        <p className="font-lapaz-text text-[#FCF5E5] opacity-80 mb-8 leading-relaxed">
          Aktuell nehmen wir Reservierungen gerne telefonisch entgegen.
        </p>

        <a
          href="tel:03099498458"
          className="group flex flex-col items-center justify-center bg-[#003B2A] border border-[#F4B806]/50 rounded-xl p-6 hover:bg-[#F4B806] hover:border-[#F4B806] transition-all duration-300 mb-6 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-[#E85E21] text-white flex items-center justify-center mb-3 group-hover:bg-[#004D38] group-hover:text-[#F4B806] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" /></svg>
          </div>
          <span className="font-lapaz-title text-2xl text-[#F4B806] group-hover:text-[#004D38] transition-colors">030 99498458</span>
          <span className="text-xs uppercase tracking-widest text-white/50 group-hover:text-[#004D38]/70 mt-1">Hier anrufen</span>
        </a>

        <div className="text-xs text-[#F4B806]/60 uppercase tracking-widest">
          Wir freuen uns auf euch!
        </div>

      </div>
    </div>
  );
};

export default ReservationModal;
