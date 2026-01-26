
import React from 'react';

interface MenuCTASectionProps {
  id?: string;
}

const MenuCTASection: React.FC<MenuCTASectionProps> = ({ id }) => {
  const menuCategories = [
    {
      title: "Para Empezar",
      items: [
        { name: "Guacamole en Molcajete", desc: "Frisch am Tisch zubereitet, Totopos", price: "10.5" },
        { name: "Aguachile Verde", desc: "Garnelen, Limette, Gurke, Serrano, Avocado", price: "14.5" },
        { name: "Queso Fundido", desc: "Geschmolzener Käse, Chorizo, Mehl-Tortillas", price: "9.5" },
      ]
    },
    {
      title: "Tacos & Mas",
      items: [
        { name: "Tacos Al Pastor", desc: "Vom Spieß, Ananas, Koriander, Zwiebel", price: "14.5" },
        { name: "Tacos de Carne Asada", desc: "Rib-Eye Steak, Salsa Verde, Avocado", price: "16.0" },
        { name: "Enchiladas Suizas", desc: "Hühnchen, Grüne Salsa, Käse, Crema", price: "15.5" },
        { name: "Cochinita Pibil", desc: "Yucatan Style Schweinefleisch, Xnipec", price: "15.0" },
        { name: "Tacos Baja", desc: "Kabeljau Tempura, Chipotle Mayo, Kohl", price: "14.5" },
        { name: "Chiles en Nogada", desc: "Poblano Chili, Walnuss-Sauce, Granatapfel", price: "18.5" } 
      ]
    },
    {
      title: "Postres",
      items: [
        { name: "Churros con Chocolate", desc: "Zimtzucker, Warme Schokoladensauce", price: "7.5" },
        { name: "Tres Leches Cake", desc: "Traditioneller Milchkuchen, Vanille", price: "8.0" },
      ]
    }
  ];

  return (
    <section id={id} className="relative bg-[#004D38] z-40 overflow-hidden pb-24 md:pb-32 border-t-0">
      
      {/* 
         Top Transition: CREAM curve to blend with the Gallery Section above 
      */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-[#FCF5E5] rounded-b-[50%] transform scale-x-110 z-10"></div>
      
      <div className="h-24 md:h-40"></div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header - More Elegant, Less Aggressive */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-lapaz-text font-medium text-xs md:text-sm tracking-[0.3em] uppercase text-[#F4B806] mb-4 block">
            Descubre
          </span>
          <h2 className="font-lapaz-title text-5xl md:text-7xl text-[#FCF5E5] uppercase tracking-wide leading-none mb-2">
            La Carta
          </h2>
          <div className="w-24 h-1 bg-[#E85E21] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 
            Menu List - Clean, Editorial Style
        */}
        <div className="w-full relative">
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-h-[550px] overflow-hidden relative pb-10">
              {menuCategories.map((category, idx) => (
                <div key={idx} className={`flex flex-col ${idx === 1 ? 'md:row-span-2' : ''}`}>
                  <h3 className="font-lapaz-title text-xl text-[#F4B806] mb-6 uppercase tracking-wider">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-8">
                    {category.items.map((item, i) => (
                      <div key={i} className="group cursor-default">
                        <div className="flex justify-between items-end mb-1 border-b border-[#F4B806]/20 pb-1">
                          <span className="font-lapaz-title text-lg text-white tracking-wide group-hover:text-[#F4B806] transition-colors duration-300">
                            {item.name}
                          </span>
                          <span className="font-lapaz-text font-bold text-sm text-[#F4B806]">
                            {item.price}
                          </span>
                        </div>
                        <p className="font-lapaz-text text-xs text-[#FCF5E5]/70 leading-relaxed font-light mt-1">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* THE FADE EFFECT - Smoother gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-64 z-20 flex flex-col justify-end items-center pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-[#004D38] via-[#004D38] to-transparent"></div>
                
                {/* CTA Button - Elegant Style */}
                <div className="relative z-30 pointer-events-auto pb-8 transform hover:-translate-y-1 transition-transform duration-300">
                    <button className="bg-transparent border border-[#F4B806] text-[#F4B806] px-10 py-3 rounded-full hover:bg-[#F4B806] hover:text-[#004D38] transition-all duration-300 font-lapaz-title text-sm uppercase tracking-[0.2em] flex items-center gap-3">
                        <span>Menü als PDF</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    </button>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default MenuCTASection;
