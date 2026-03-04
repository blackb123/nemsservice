import { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
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

  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } 
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
    <section className="py-12 max-md:pt-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">Premium Selection</span>
            <h2 className="text-3xl font-black text-[#2d3b53] tracking-tighter">Nos Coffrets Cadeaux</h2>
          </div>
          
          <div className="hidden lg:flex items-center gap-3">
             <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-all disabled:opacity-20 shadow-sm"
              disabled={currentIndex === 0}
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition-all disabled:opacity-20 shadow-lg"
              disabled={currentIndex === totalSlides - 1}
            >
              <FiChevronRight size={22} />
            </button>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            ref={sliderRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-6 pb-8"
          >
            {siteData.serviceSlider.map((item) => (
              <motion.div 
                key={item.id} 
                variants={cardVariants}
                className="min-w-[85%] md:min-w-[45%] lg:min-w-[calc(33.333%-1rem)] snap-start flex-shrink-0"
              >
                <div className="flex flex-col bg-[#f4f2f0] rounded-2xl overflow-hidden h-full border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                  
                  {/* IMAGE SECTION */}
                  <div className="relative w-full h-72 overflow-hidden cursor-pointer" onClick={() => handleDetailClick(item)}>
                    <motion.img 
                      src={item.image} 
                      alt={item.name} 
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-black text-[9px] font-black uppercase tracking-widest py-1.5 px-3 rounded-full shadow-sm">
                      {item.category}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <p className="text-[10px] font-black text-blue-600 mb-2 uppercase tracking-widest">{item.ref}</p>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">{item.name}</h3>
                      <p className="text-sm text-gray-500 mb-4 line-clamp-2 italic font-medium leading-relaxed">{item.tagline}</p>

                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-black text-gray-900 tracking-tighter">{item.price}</span>
                      </div>
                      
                      <div className="mb-6 pt-4 border-t border-gray-200/60">
                        <span className="text-[9px] font-black text-gray-400 block uppercase mb-2 tracking-widest">Finitions Premium</span>
                        <span className="text-xs text-gray-700 font-bold bg-white/50 py-1 px-3 rounded-md border border-gray-100 inline-block">{item.colors}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mt-auto">
                      <motion.button 
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleDetailClick(item)}
                        className="w-full bg-black text-white text-xs font-black py-3.5 rounded-xl hover:bg-gray-800 transition-all uppercase tracking-widest"
                      >
                        Voir la fiche technique
                      </motion.button>
                      <button className="w-full flex items-center justify-center gap-2 text-xs font-bold text-gray-900 py-2 group/link">
                        Devis instantané <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* MOBILE PAGINATION */}
          <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
             <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-gray-100 disabled:opacity-30"
              disabled={currentIndex === 0}
            >
              <FiChevronLeft size={18} />
            </button>
            <span className="text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase">
              {currentIndex + 1} / {totalSlides}
            </span>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-black text-white disabled:opacity-30"
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