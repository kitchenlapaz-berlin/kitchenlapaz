import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage after a small delay to allow animation entrance
        const consent = localStorage.getItem('lapaz-cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('lapaz-cookie-consent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        // Still hiding it, but maybe logically you'd mark them as declined if you had real analytics
        localStorage.setItem('lapaz-cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed z-[120] pointer-events-none transition-all duration-500 ease-out animate-slide-up
      bottom-24 left-4 right-4 
      md:bottom-8 md:right-8 md:left-auto md:w-[400px]
    ">
            <div className="pointer-events-auto bg-[#004D38]/95 backdrop-blur-md border border-[#F4B806] shadow-[0_8px_30px_rgba(0,0,0,0.5)] rounded-2xl p-6 flex flex-col gap-4">

                <div className="flex items-start gap-4">
                    <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-[#F4B806]/10 text-xl shrink-0">
                        🍪
                    </div>
                    <div>
                        <h3 className="text-[#F4B806] font-lapaz-title uppercase tracking-widest text-sm mb-2">
                            Cookies & Co.
                        </h3>
                        <p className="text-white/90 font-lapaz-text font-light text-xs leading-relaxed">
                            Wir nutzen Cookies für das beste Mexiko-Erlebnis.
                            Deine Entscheidung, dein Geschmack.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-full mt-2">
                    <button
                        onClick={handleDecline}
                        className="flex-1 px-4 py-2 rounded-lg border border-[#F4B806]/30 text-[#F4B806] font-lapaz-text text-[10px] uppercase tracking-widest hover:bg-[#F4B806]/10 transition-colors"
                    >
                        Ablehnen
                    </button>

                    <button
                        onClick={handleAccept}
                        className="flex-1 px-4 py-2 rounded-lg bg-[#F4B806] text-[#004D38] font-lapaz-title text-xs uppercase tracking-widest hover:bg-white transition-colors shadow-lg"
                    >
                        Alles klar
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CookieConsent;
