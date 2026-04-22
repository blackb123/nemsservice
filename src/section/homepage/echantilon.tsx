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
    <section className="py-5 bg-white border-t  border-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
         {/* HEADER - ENHANCED */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <div className="flex items-center  gap-4 mb-4">
            <span className="h-[2px] w-12 bg-gradient-to-r from-blue-500 to-blue-400" />
            <FiInstagram className="text-blue-500" size={20} />
            <span className="text-blue-600 text-[11px] font-semibold uppercase tracking-[0.3em]">
              Notre Communauté
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight mb-3">
            {socialShowcase.title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-light max-w-2xl mx-auto md:mx-0">
            {socialShowcase.subtitle}
          </p>
        </motion.div>
        
        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white p-4 rounded-full shadow-2xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-600 hover:text-white"
          >
            <FiChevronLeft size={20} />
          </button>
          
          {/* Gallery Container */}
          <motion.div 
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-2"
          >
            {socialShowcase.images.map((img) => (
              <motion.div 
                key={img.id} 
                variants={itemVariants}
                className="min-w-[280px] md:min-w-[340px] snap-start relative group/item cursor-pointer"
              >
                <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-sm border border-gray-100">
                  <motion.img 
                    src={img.url} 
                    alt={`Réalisation par ${img.handle}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Glassmorphism Overlay on Hover */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/20 backdrop-blur-[2px] flex items-center j transition-opacity"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center  text-white">
                      <FiInstagram size={24} />
                    </div>
                  </motion.div>

                  <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center z-10">
                    <span className="bg-white/90 backdrop-blur-md text-black text-[11px] px-4 py-2 rounded-full font-black shadow-lg uppercase tracking-wider">
                      @{img.handle}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white p-4 rounded-full shadow-2xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-600 hover:text-white"
          >
            <FiChevronRight size={20} />
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