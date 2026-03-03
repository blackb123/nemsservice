// src/components/SocialShowcase.tsx
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { siteData } from '../../data/sitedata';

const SocialShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { socialShowcase } = siteData;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Titre et Sous-titre traduits via sitedata */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{socialShowcase.title}</h2>
        <p className="text-gray-600 mb-8 max-w-xl">{socialShowcase.subtitle}</p>
        
        <div className="relative group">
          {/* Bouton Gauche */}
          <button 
            onClick={() => scroll('left')}
            aria-label="Défiler à gauche"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <FiChevronLeft size={24} />
          </button>
          
          {/* Conteneur d'images */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
          >
            {socialShowcase.images.map((img) => (
              <div key={img.id} className="min-w-[280px] md:min-w-[320px] snap-start relative overflow-hidden rounded-xl">
                <img 
                  src={img.url} 
                  alt={`Réalisation par ${img.handle}`}
                  className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/70 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                    {img.handle}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton Droit */}
          <button 
            onClick={() => scroll('right')}
            aria-label="Défiler à droite"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* CSS personnalisé pour masquer la barre de défilement */}
      <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </section>
  );
};

export default SocialShowcase;