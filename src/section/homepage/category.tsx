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
    <section className="max-w-7xl mx-auto py-16 md:py-24 bg-white px-6 relative group overflow-hidden">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-16"
      >
        <span className="text-blue-600 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 block">
          ✦ NAVIGATION
        </span>
       <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight text-balance">
        Toutes les <span className="text-blue-600">Catégories</span>
      </h2>
      </motion.div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-[50%] -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-lg border-2 border-gray-300 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center hover:border-blue-600 hover:text-blue-600"
      >
        <ChevronLeft size={22} />
      </button>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-[50%] -translate-y-1/2 z-20 bg-blue-600 text-white p-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center hover:bg-blue-700"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slider Container */}
      <motion.div 
        ref={scrollRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        className="flex overflow-x-auto gap-6 md:gap-8 lg:gap-10 scroll-smooth no-scrollbar snap-x snap-mandatory pt-4"
      >
        {siteData.categories.map((cat) => {
          const isActive = activeCategory === cat.name;

          return (
            <motion.div 
              key={cat.id} 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              onClick={() => handleCategoryClick(cat.name)} 
              className="flex-none w-[120px] md:w-[140px] lg:w-[160px] flex flex-col items-center group cursor-pointer snap-center"
            >
              {/* Image container - Enhanced sizes */}
              <div className={`
                relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] rounded-full mb-4 md:mb-5 transition-all duration-300 shadow-sm
                ${isActive 
                  ? 'ring-3 ring-blue-600 ring-offset-2' 
                  : 'ring-0 group-hover:ring-2 group-hover:ring-gray-300'}
              `}>
                <motion.img 
                  src={cat.image} 
                  alt={cat.name} 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Texte */}
              <motion.p 
                className={`text-center font-semibold text-sm md:text-base lg:text-lg tracking-tight capitalize transition-colors ${
                  isActive ? 'text-blue-600' : 'text-gray-700 group-hover:text-gray-900'
                }`}
              >
                {cat.name}
              </motion.p>
              
              {/* Barre active */}
              {isActive && (
                <motion.div 
                  layoutId="activeBar" 
                  className="h-1 w-6 md:w-7 lg:w-8 bg-blue-600 mt-2 md:mt-3 rounded-full" 
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Pagination mobile */}
      <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
        <button
          onClick={() => scroll('left')}
          className="w-12 h-12 rounded-lg bg-white border-2 border-gray-300 flex items-center justify-center disabled:opacity-30 hover:border-blue-600 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex gap-2">
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
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActiveDot ? 'w-8 bg-blue-600' : 'w-2 bg-gray-400'
                }`}
              />
            );
          })}
        </div>
        
        <button
          onClick={() => scroll('right')}
          className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          <ChevronRight size={20} />
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
