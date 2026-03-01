import  { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { siteData } from '../../data/sitedata';
import { useCoffrets } from '../../provider/coffreprovider'; // Importe ton context
import { useNavigate } from 'react-router-dom'; // Importe le hook de navigation

const ProductSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = siteData.serviceSlider.length;

  // Accès au setter du context et à la navigation
  const { setSelectedPack } = useCoffrets();
  const navigate = useNavigate();

  const handleDetailClick = (item: any) => {
    // 1. On définit le pack sélectionné dans l'état global
    setSelectedPack(item);
    // 2. On redirige vers la page /coffrets
    navigate('/coffrets');
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const newIndex = Math.round(scrollLeft / clientWidth);
      setCurrentIndex(Math.min(Math.max(newIndex, 0), totalSlides - 1));
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-[#2d3b53]">Nos Coffrets Cadeaux</h2>
          
          <div className="hidden lg:flex items-center gap-2">
             <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-30"
              disabled={currentIndex === 0}
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors disabled:opacity-30"
              disabled={currentIndex === totalSlides - 1}
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-4 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {siteData.serviceSlider.map((item) => (
              <div 
                key={item.id} 
                className="min-w-[85%] md:min-w-[45%] lg:min-w-[calc(30%-1rem)] snap-start flex-shrink-0"
              >
                <div className="flex flex-col bg-[#f4f2f0] rounded-xl overflow-hidden h-full border border-gray-100 hover:shadow-md transition-shadow">
                  
                  <div className="relative w-full h-44 lg:h-52 overflow-hidden cursor-pointer" onClick={() => handleDetailClick(item)}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest py-1 px-2 rounded">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <p className="text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-tighter">{item.ref}</p>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{item.name}</h3>
                      <p className="text-xs text-gray-600 mb-4 line-clamp-2 italic">{item.tagline}</p>

                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl font-black text-gray-900">{item.price}</span>
                      </div>
                      
                      <div className="mb-6 pt-4 border-t border-gray-200">
                        <span className="text-[10px] font-bold text-gray-400 block uppercase mb-1">Options Couleurs</span>
                        <span className="text-xs text-gray-700 font-medium">{item.colors}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mt-auto">
                      {/* BOUTON MODIFIÉ ICI */}
                      <button 
                        onClick={() => handleDetailClick(item)}
                        className="w-full bg-white text-black text-xs font-bold py-2.5 rounded-lg border border-gray-300 hover:border-black transition-all"
                      >
                        Voir les détails
                      </button>
                      <button className="w-full flex items-center justify-center gap-2 text-xs font-bold text-gray-900 py-2 hover:translate-x-1 transition-transform">
                        Demander un devis <FiArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
             <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-gray-100 disabled:opacity-30"
              disabled={currentIndex === 0}
            >
              <FiChevronLeft size={18} />
            </button>
            <span className="text-xs font-bold text-gray-500 tracking-widest">
              {currentIndex + 1} / {totalSlides}
            </span>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-black text-white disabled:opacity-30"
              disabled={currentIndex === totalSlides - 1}
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ProductSlider;