
import React, { useState } from 'react';

interface FooterSectionProps {
  id?: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ id }) => {
  const [legalModal, setLegalModal] = useState<'imprint' | 'privacy' | null>(null);

  const toggleModal = (type: 'imprint' | 'privacy' | null) => {
    setLegalModal(type);
  };

  return (
    <footer
      id={id}
      className="relative z-20 bg-[#003B2A] text-[#FCF5E5] pt-20 pb-12 rounded-t-[2.5rem] md:rounded-t-[4rem] min-h-[90vh] flex flex-col justify-between border-t border-[#F4B806]/20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col justify-between flex-grow">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-24 flex-grow pt-10">

          {/* Brand */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="mb-8">
              <img
                src="/media/lapaz logo.png"
                alt="La Paz Logo"
                className="h-24 md:h-32 w-auto object-contain mb-4"
              />
              <span className="font-lapaz-title text-xl tracking-[0.3em] uppercase opacity-80 block pl-2">Berlin</span>
            </div>

            <p className="font-lapaz-text text-base font-light opacity-70 mb-10 max-w-sm leading-relaxed">
              Authentische mexikanische Küche, handverlesene Agaven-Spirituosen und gute Vibes.
            </p>

            <div className="flex space-x-4">
              {[
                { name: "Instagram", url: "https://www.instagram.com/lapaz.bln/" },
                { name: "TikTok", url: "https://www.tiktok.com/@lapazberlin" }
              ].map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-lapaz-title text-xs font-bold text-[#F4B806] hover:text-white transition-colors uppercase tracking-widest border-b border-[#F4B806] pb-1 hover:border-white"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Info Columns */}
          <div className="md:col-span-3 pt-2">
            <span className="font-lapaz-title text-xs font-bold uppercase mb-8 block tracking-[0.2em] text-[#E85E21]">Horario</span>
            <ul className="space-y-4 font-lapaz-title text-lg uppercase tracking-wide">
              <li className="flex justify-between border-b border-[#F4B806]/10 pb-3">
                <span className="opacity-80">So - Do</span>
                <span className="text-[#F4B806]">10 - 23</span>
              </li>
              <li className="flex justify-between border-b border-[#F4B806]/10 pb-3">
                <span className="opacity-80">Fr - Sa</span>
                <span className="text-[#F4B806]">10 - 00</span>
              </li>
            </ul>

            {/* Catering Info */}
            <div className="mt-8 pt-6 border-t border-[#E85E21]/30">
              <span className="font-lapaz-title text-xs font-bold uppercase mb-2 block tracking-[0.2em] text-[#E85E21]">Catering</span>
              <p className="font-lapaz-text opacity-80 text-sm">
                Für Events ab 10 Personen möglich.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 pt-2">
            <span className="font-lapaz-title text-xs font-bold uppercase mb-8 block tracking-[0.2em] text-[#E85E21]">Ubicación</span>

            {/* Map Image - Using a styled map visual */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kurt-Weill-Gasse+7,+12627+Berlin"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-[2/1] rounded-xl overflow-hidden bg-[#004D38] mb-6 block group cursor-pointer border border-[#F4B806]/20 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                alt="Map Location"
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-[#003B2A]/30 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#E85E21] border-2 border-[#FCF5E5] flex items-center justify-center shadow-lg transform group-hover:-translate-y-1 transition-transform">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </a>

            <address className="not-italic font-lapaz-title text-lg uppercase leading-tight mb-2 opacity-90">
              Kurt-Weill-Gasse 7<br />
              12627 Berlin Hellersdorf
            </address>
            <div className="flex flex-col gap-1 mt-4">
              <a href="tel:03099498458" className="font-lapaz-text text-sm text-[#F4B806] hover:text-white transition-colors opacity-90 tracking-wider">
                T. 030 99498458
              </a>
              <a href="mailto:kitchenlapaz@gmail.com" className="font-lapaz-text text-sm text-[#F4B806] hover:text-white transition-colors opacity-90 tracking-wider">
                kitchenlapaz@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar - Minimalist */}
        <div className="pt-8 border-t border-[#F4B806]/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="font-lapaz-text text-[10px] uppercase tracking-widest opacity-40">
            © 2024 La Paz Berlin. All rights reserved.
          </div>
          <div className="flex space-x-8 font-lapaz-text text-[10px] font-bold uppercase tracking-widest text-[#F4B806]/70 cursor-pointer">
            <span onClick={() => toggleModal('privacy')} className="hover:text-[#F4B806] transition-colors">Datenschutz</span>
            <span onClick={() => toggleModal('imprint')} className="hover:text-[#F4B806] transition-colors">Impressum</span>
          </div>
        </div>

      </div>

      {/* Aesthetic Mini Modal for Legal Text */}
      {legalModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center px-6">
          <div
            className="absolute inset-0 bg-[#001E15]/60 backdrop-blur-sm"
            onClick={() => toggleModal(null)}
          ></div>

          <div className="relative bg-[#004D38] border border-[#F4B806]/40 text-[#FCF5E5] p-8 md:p-12 w-full max-w-md shadow-2xl rounded-2xl transform transition-all animate-fadeIn">
            <button
              onClick={() => toggleModal(null)}
              className="absolute top-4 right-4 text-[#F4B806] hover:text-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>

            <h3 className="font-lapaz-title text-2xl text-[#F4B806] uppercase mb-6 tracking-wide border-b border-[#F4B806]/20 pb-4">
              {legalModal === 'imprint' ? 'Impressum' : 'Datenschutz'}
            </h3>

            <div className="font-lapaz-text text-sm leading-relaxed opacity-80 h-[20vh] overflow-y-auto no-scrollbar">
              {legalModal === 'imprint' ? (
                <>
                  <p className="mb-4">Angaben gemäß § 5 TMG</p>
                  <p className="mb-2">
                    <strong>Restaurant La Paz</strong><br />
                    Ahmad Niknam<br />
                    Kurt-Weill-Gasse 7<br />
                    12627 Berlin
                  </p>
                  <p className="mb-2"><strong>Kontakt:</strong><br />Telefon: 030 99498458<br />E-Mail: kitchenlapaz@gmail.com</p>
                  <p className="mb-2"><strong>Steuernummer:</strong><br />33/456/00511</p>
                </>
              ) : (
                <>
                  <p className="mb-4">Datenschutzerklärung (Placeholder)</p>
                  <p className="mb-2">Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.</p>
                  <p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.</p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#F4B806]/20 flex justify-end">
              <button
                onClick={() => toggleModal(null)}
                className="text-[10px] uppercase font-bold tracking-widest text-[#E85E21] hover:text-white transition-colors"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};

export default FooterSection;
