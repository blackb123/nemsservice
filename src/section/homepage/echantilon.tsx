import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { siteData } from '../../data/sitedata';
import type { Variants } from 'framer-motion';
const SocialShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { socialShowcase } = siteData;

  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER ANIMÉ */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <FiInstagram className="text-blue-600" size={24} />
            <span className="text-blue-600 font-semibold text-xs md:text-sm uppercase tracking-widest">Showcase</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight text-balance">{socialShowcase.title}</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">{socialShowcase.subtitle}</p>
        </motion.div>
        
        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 bg-white p-3 rounded-lg border-2 border-gray-300 shadow-md opacity-0 group-hover:opacity-100 transition-all hover:border-blue-600 hover:text-blue-600"
          >
            <FiChevronLeft size={22} />
          </button>
          
          {/* Gallery Container */}
          <motion.div 
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4"
          >
            {socialShowcase.images.map((img) => (
              <motion.div 
                key={img.id} 
                variants={itemVariants}
                className="min-w-[300px] md:min-w-[380px] snap-start relative group/item cursor-pointer"
              >
                <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl shadow-md hover:shadow-xl border-2 border-gray-200 hover:border-blue-600 transition-all duration-300">
                  <motion.img 
                    src={img.url} 
                    alt={`Réalisation par ${img.handle}`}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Glassmorphism Overlay on Hover */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center transition-opacity"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white/35 transition-colors">
                      <FiInstagram size={28} />
                    </div>
                  </motion.div>

                  <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center z-10">
                    <span className="bg-white/95 backdrop-blur-md text-gray-900 text-sm px-5 py-2 rounded-lg font-semibold shadow-lg uppercase tracking-wide">
                      @{img.handle}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 bg-blue-600 text-white p-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-700"
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; } 
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default SocialShowcase;
