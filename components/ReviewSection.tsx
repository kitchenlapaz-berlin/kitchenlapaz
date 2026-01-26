
import React from 'react';

interface ReviewSectionProps {
  id?: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ id }) => {
  const reviews = [
    {
      author: "Maria S.",
      title: "Google Review",
      quote: "Das beste mexikanische Essen in Berlin. Die Tacos Al Pastor schmecken genau wie in Mexico City!",
      rating: "5.0"
    },
    {
      author: "Tom K.",
      title: "Food Guide",
      quote: "Unglaubliche Atmosphäre. Dunkles Grün, gedimmtes Licht und der Mezcal Sour ist Weltklasse.",
      rating: "4.9"
    },
    {
      author: "Sophie L.",
      title: "Local",
      quote: "Mein Go-To Spot für Dinner mit Freunden. Laut, fröhlich und einfach lecker. Reservieren ist Pflicht.",
      rating: "5.0"
    }
  ];

  return (
    <section 
      id={id}
      className="relative md:sticky md:top-0 min-h-screen md:h-screen bg-[#004D38] text-white z-10 flex flex-col justify-start md:justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-24 md:py-0">
        <div className="mb-16 md:mb-24">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-[2px] bg-[#F4B806]"></div>
            <span className="font-lapaz-text text-sm font-bold uppercase tracking-[0.3em] text-[#F4B806]">Feedback</span>
          </div>
          <h2 className="font-lapaz-title text-5xl md:text-[7rem] font-extrabold uppercase leading-[0.9] tracking-tighter">
            BERLIN <br/> 
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #F4B806' }}>LIEBT TACOS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className="relative p-8 md:p-10 flex flex-col justify-between min-h-[300px] md:min-h-[400px] border border-[#F4B806]/30 rounded-[2rem] hover:bg-[#F4B806]/10 transition-all duration-300 group bg-[#003B2A] shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-10">
                   <div className="flex items-center space-x-1 text-[#F4B806]">
                      {[1,2,3,4,5].map(s => (
                        <span key={s} className="text-xl">★</span>
                      ))}
                   </div>
                   <span className="font-lapaz-title text-2xl text-[#F4B806]">{rev.rating}</span>
                </div>
                <p className="font-lapaz-title text-xl md:text-2xl leading-tight mb-8 text-[#FCF5E5]">
                  "{rev.quote}"
                </p>
              </div>
              
              <div className="flex items-center space-x-4 border-t border-white/10 pt-6">
                <div className="w-10 h-10 rounded-full bg-[#E85E21] text-white flex items-center justify-center font-bold font-lapaz-title">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <p className="font-lapaz-title text-sm uppercase mb-0.5 tracking-wide text-[#F4B806]">{rev.author}</p>
                  <p className="font-lapaz-text text-xs opacity-60 uppercase tracking-widest">{rev.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
