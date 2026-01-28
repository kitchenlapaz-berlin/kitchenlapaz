
import React from 'react';

interface BrunchSectionProps {
    id?: string;
    onOpenReservation?: () => void;
}

const BrunchSection: React.FC<BrunchSectionProps> = ({ id, onOpenReservation }) => {
    return (
        <section id={id} className="relative py-24 bg-[#FCF5E5] text-[#004D38] overflow-hidden">

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4B806]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E85E21]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="order-2 md:order-1">
                        <div className="flex items-center space-x-3 mb-4">
                            <span className="w-12 h-0.5 bg-[#E85E21]"></span>
                            <span className="font-lapaz-title text-[#E85E21] uppercase tracking-[0.2em] text-sm font-bold">Jeden Sonntag</span>
                        </div>

                        <h2 className="font-lapaz-title text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9] mb-8 text-[#004D38]">
                            Berlin <br />
                            <span className="text-transparent" style={{ WebkitTextStroke: '2px #004D38' }}>Brunch</span>
                        </h2>

                        <p className="font-lapaz-text text-lg md:text-xl font-light opacity-80 mb-8 max-w-md leading-relaxed">
                            Starte deinen Tag mit unserem vielfältigen Brunch-Angebot.
                            Genieße entspannte Stunden mit Freunden und Familie in gemütlicher Atmosphäre.
                        </p>

                        <div className="bg-[#004D38] text-[#FCF5E5] p-8 rounded-2xl shadow-xl inline-block w-full md:w-auto relative overflow-hidden group">
                            {/* Shine Effect */}
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shine"></div>

                            <div className="flex flex-col space-y-4 relative z-10">
                                <div className="flex justify-between items-baseline border-b border-[#F4B806]/30 pb-4">
                                    <span className="font-lapaz-title text-2xl uppercase tracking-wide">Sonntags</span>
                                    <span className="font-lapaz-title text-xl text-[#F4B806]">10:00 — 14:00</span>
                                </div>

                                <div className="pt-2">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-lapaz-text font-bold uppercase tracking-wider text-sm opacity-90">Erwachsene</span>
                                        <span className="font-lapaz-title text-3xl text-[#F4B806]">16,90 €</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-lapaz-text font-bold uppercase tracking-wider text-xs opacity-60">Kinder (bis 7 J.)</span>
                                        <span className="font-lapaz-title text-xl text-[#F4B806]/80">7,90 €</span>
                                    </div>
                                </div>

                                <button
                                    onClick={onOpenReservation}
                                    className="mt-6 w-full bg-[#E85E21] text-white py-3 rounded-lg font-lapaz-title uppercase tracking-widest hover:bg-[#F4B806] hover:text-[#004D38] transition-all shadow-lg"
                                >
                                    Tisch Reservieren
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="order-1 md:order-2 relative h-[50vh] md:h-[70vh]">
                        <div className="absolute inset-0 bg-[#004D38] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl transform md:rotate-3 transition-transform duration-500 hover:rotate-0">
                            <img
                                src="/media/brunch.jpg" // Mexican Breakfast/Brunch styling
                                alt="Mexican Brunch"
                                className="w-full h-full object-cover opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#004D38]/80 to-transparent"></div>

                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="font-lapaz-title text-[#F4B806] text-6xl opacity-20 absolute -top-12 -left-4 select-none">BUENOS DIAS</div>
                                <h3 className="font-lapaz-title text-white text-3xl uppercase leading-tight relative z-10">
                                    Desayuno <br /> Mexicano
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BrunchSection;
