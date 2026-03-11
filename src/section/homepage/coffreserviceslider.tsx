import { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiArrowRight, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { siteData } from '../../data/sitedata';
import { useCoffrets } from '../../provider/coffreprovider';
import { useNavigate } from 'react-router-dom';
import type { Variants } from 'framer-motion';

const ProductSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = siteData.serviceSlider.length;

  const { setSelectedPack } = useCoffrets();
  const navigate = useNavigate();

  // Animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const handleDetailClick = (item: any) => {
    setSelectedPack(item);
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
    <section className="pb-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-6 md:mb-8"
        >
          <div>
            <span className="text-blue-600 font-medium text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.25em] mb-1 block">
              ✦ ÉDITION LIMITÉE
            </span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-[#1a1f2b] tracking-tight">
              Coffrets <span className="font-semibold">Signature</span>
            </h2>
          </div>
          
          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-lg border border-gray-200 hover:border-gray-400 transition-all disabled:opacity-20 bg-white/50 backdrop-blur-sm"
              disabled={currentIndex === 0}
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-all disabled:opacity-20"
              disabled={currentIndex === totalSlides - 1}
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            ref={sliderRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-3 pb-4 md:pb-6"
          >
            {siteData.serviceSlider.map((item) => (
              <motion.div 
                key={item.id} 
                variants={cardVariants}
                className="min-w-[200px] md:min-w-[250px] snap-start flex-shrink-0"
              >
                <div className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full">
                  
                  {/* Badge */}
                  <div className="absolute top-2 left-2 z-10">
                    <span className="bg-white/90 backdrop-blur-md text-black text-[7px] font-medium px-1.5 py-0.5 rounded-full border border-gray-200 shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Image - Hauteur augmentée */}
                  <div 
                    className="relative w-full h-36 md:h-40 overflow-hidden cursor-pointer bg-gray-50"
                    onClick={() => handleDetailClick(item)}
                  >
                    <motion.img 
                      src={item.image} 
                      alt={item.name} 
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  </div>

                  {/* Contenu */}
                  <div className="p-3">
                    {/* Référence et note */}
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[7px] font-mono text-gray-400">{item.ref}</span>
                      <div className="flex items-center gap-0.5">
                        <FiStar size={7} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-[7px] text-gray-500">4.9</span>
                      </div>
                    </div>

                    <h3 className="text-xs md:text-sm font-medium text-gray-900 mb-1 leading-tight line-clamp-1">
                      {item.name}
                    </h3>
                    
                    <p className="text-[8px] md:text-[10px] text-gray-500 mb-2 line-clamp-1">
                      {item.tagline}
                    </p>

                    {/* Prix et action */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[9px] md:text-[11px] font-light text-gray-400 line-through mr-1">
                          {parseInt(item.price.replace('€', '')) * 1.2}€
                        </span>
                        <span className="text-sm md:text-base font-semibold text-gray-900">
                          {item.price}
                        </span>
                      </div>
                      
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDetailClick(item)}
                        className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                      >
                        <FiArrowRight size={11} />
                      </motion.button>
                    </div>

                    {/* Caractéristique */}
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <span className="text-[7px] text-gray-400 font-mono">
                        ✦ {item.colors}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination mobile */}
          <div className="flex lg:hidden items-center justify-center gap-3 mt-4">
            <button
              onClick={() => scroll('left')}
              className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-20"
              disabled={currentIndex === 0}
            >
              <FiChevronLeft size={14} />
            </button>
            
            <div className="flex gap-1">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (sliderRef.current) {
                      sliderRef.current.scrollTo({
                        left: i * sliderRef.current.clientWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentIndex 
                      ? 'w-5 bg-black' 
                      : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => scroll('right')}
              className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center disabled:opacity-20"
              disabled={currentIndex === totalSlides - 1}
            >
              <FiChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default ProductSlider;