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
    <section className="pb-8 md:pb-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12 md:mb-16"
        >
          <div>
            <span className="text-blue-600 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 block">
              ✦ ÉDITION LIMITÉE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight text-balance">
              Coffrets <span className="text-blue-600">Signature</span>
            </h2>
          </div>
          
          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all disabled:opacity-30 bg-white"
              disabled={currentIndex === 0}
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all disabled:opacity-30"
              disabled={currentIndex === totalSlides - 1}
            >
              <FiChevronRight size={20} />
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
                className="min-w-[240px] md:min-w-[300px] snap-start flex-shrink-0"
              >
                <div className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-blue-600 transition-all duration-300 h-full shadow-sm hover:shadow-lg">
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/95 backdrop-blur-md text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-300 shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Image - Enhanced size */}
                  <div 
                    className="relative w-full h-56 md:h-64 overflow-hidden cursor-pointer bg-gray-100"
                    onClick={() => handleDetailClick(item)}
                  >
                    <motion.img 
                      src={item.image} 
                      alt={item.name} 
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  {/* Contenu */}
                  <div className="p-5 md:p-6">
                    {/* Référence et note */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-gray-500">{item.ref}</span>
                      <div className="flex items-center gap-1">
                        <FiStar size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-medium text-gray-700">4.9</span>
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 leading-tight line-clamp-2">
                      {item.name}
                    </h3>
                    
                    <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {item.tagline}
                    </p>

                    {/* Prix et action */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-sm md:text-base font-light text-gray-500 line-through mr-2">
                          {parseInt(item.price.replace('€', '')) * 1.2}€
                        </span>
                        <span className="text-xl md:text-2xl font-bold text-blue-600">
                          {item.price}
                        </span>
                      </div>
                      
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDetailClick(item)}
                        className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm"
                      >
                        <FiArrowRight size={18} />
                      </motion.button>
                    </div>

                    {/* Caractéristique */}
                    <div className="pt-4 border-t-2 border-gray-200">
                      <span className="text-xs text-gray-600 font-medium">
                        ✦ {item.colors}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination mobile */}
          <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-lg bg-white border-2 border-gray-300 flex items-center justify-center disabled:opacity-30 hover:border-blue-600 hover:text-blue-600 transition-colors"
              disabled={currentIndex === 0}
            >
              <FiChevronLeft size={18} />
            </button>
            
            <div className="flex gap-2">
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
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex 
                      ? 'w-8 bg-blue-600' 
                      : 'w-2 bg-gray-400 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-lg bg-blue-600 text-white flex items-center justify-center disabled:opacity-30 hover:bg-blue-700 transition-colors"
              disabled={currentIndex === totalSlides - 1}
            >
              <FiChevronRight size={18} />
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
