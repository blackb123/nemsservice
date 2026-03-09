import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/sitedata';
import { useCategory } from '../../provider/categoryprovider';
import { useNavigate } from 'react-router-dom';
import type { Variants } from 'framer-motion';

const CategorySlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { activeCategory, setCategory } = useCategory();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    setCategory(categoryName);
    navigate('/products'); 
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-6xl mx-auto py-8 md:py-10 bg-white px-4 relative group overflow-hidden">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 md:mb-8"
      >
        <span className="text-blue-600 font-medium text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.25em] mb-1 block">
          ✦ NAVIGATION
        </span>
       <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-[#1a1f2b] tracking-tight">
        Toutes les <span className="font-semibold">Catégories</span>
      </h2>
      </motion.div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-2 top-[55%] -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-2 rounded-lg border border-gray-200 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hidden md:block hover:border-gray-400"
      >
        <ChevronLeft size={18} />
      </button>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-2 top-[55%] -translate-y-1/2 z-20 bg-black text-white p-2 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hidden md:block hover:bg-gray-800"
      >
        <ChevronRight size={18} />
      </button>

      {/* Slider Container */}
      <motion.div 
        ref={scrollRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        className="flex overflow-x-auto gap-4 md:gap-6 lg:gap-8 scroll-smooth no-scrollbar snap-x snap-mandatory pb-6 pt-2"
      >
        {siteData.categories.map((cat) => {
          const isActive = activeCategory === cat.name;

          return (
            <motion.div 
              key={cat.id} 
              variants={itemVariants}
              whileHover={{ y: -3 }}
              onClick={() => handleCategoryClick(cat.name)} 
              className="flex-none w-[85px] md:w-[110px] lg:w-[130px] flex flex-col items-center group cursor-pointer snap-center"
            >
              {/* Image container - tailles ajustées */}
              <div className={`
                relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full mb-2 md:mb-3 transition-all duration-300
                ${isActive 
                  ? 'ring-2 ring-blue-600 ring-offset-2' 
                  : 'ring-0 group-hover:ring-1 group-hover:ring-gray-300'}
              `}>
                <motion.img 
                  src={cat.image} 
                  alt={cat.name} 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Texte */}
              <motion.p 
                className={`text-center font-light text-[11px] md:text-[14px] lg:text-xs tracking-wide capitalize transition-colors ${
                  isActive ? 'text-blue-600 font-medium' : 'text-gray-500 group-hover:text-gray-900'
                }`}
              >
                {cat.name}
              </motion.p>
              
              {/* Barre active */}
              {isActive && (
                <motion.div 
                  layoutId="activeBar" 
                  className="h-0.5 w-4 md:w-5 lg:w-6 bg-blue-600 mt-1 md:mt-2 rounded-full" 
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Pagination mobile */}
      <div className="flex lg:hidden items-center justify-center gap-3 mt-4">
        <button
          onClick={() => scroll('left')}
          className="w-10 h-10 rounded-full bg-black flex items-center justify-center disabled:opacity-20"
        >
          <ChevronLeft size={14} />
        </button>
        
        <div className="flex gap-1.5">
          {siteData.categories.map((_, i) => {
            // Calculer l'index actif approximatif basé sur le scroll
            const isActiveDot = i === 0; // À améliorer avec un state si nécessaire
            
            return (
              <button
                key={i}
                onClick={() => {
                  if (scrollRef.current) {
                    const slideWidth = scrollRef.current.scrollWidth / siteData.categories.length;
                    scrollRef.current.scrollTo({
                      left: i * slideWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  isActiveDot ? 'w-6 bg-black' : 'w-1.5 bg-gray-300'
                }`}
              />
            );
          })}
        </div>
        
        <button
          onClick={() => scroll('right')}
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
        >
          <ChevronRight size={14} />
        </button>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default CategorySlider;