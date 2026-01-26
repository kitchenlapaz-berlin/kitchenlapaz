
import React, { useState } from 'react';
import Ticker from './components/Ticker.tsx';
import Hero from './components/Hero.tsx';
import GallerySection from './components/GallerySection.tsx';
import BrunchSection from './components/BrunchSection.tsx';
import MenuCTASection from './components/MenuCTASection.tsx';
import ValuesSection from './components/ValuesSection.tsx';
import ReviewSection from './components/ReviewSection.tsx';
import FooterSection from './components/FooterSection.tsx';
import FloatingNavbar from './components/FloatingNavbar.tsx';
import ReservationModal from './components/ReservationModal.tsx';

const App: React.FC = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#004D38] selection:bg-[#F4B806] selection:text-[#004D38]">
      <Ticker />

      <Hero id="home" />
      <GallerySection id="gallery" />
      <BrunchSection id="brunch" onOpenReservation={() => setIsReservationOpen(true)} />
      <MenuCTASection id="menu" />
      <ValuesSection id="values" />
      <ReviewSection id="reviews" />
      <FooterSection id="contact" />

      <FloatingNavbar onOpenReservation={() => setIsReservationOpen(true)} />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
};

export default App;
