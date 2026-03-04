import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion'; // Ajout de motion et Variants
import { siteData } from '../../data/sitedata';
import { useCategory } from '../../provider/categoryprovider'; 
import { useNavigate } from 'react-router-dom';
import type { Variants } from 'framer-motion';
const CategorySlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { activeCategory, setCategory } = useCategory();

  // 1. Variants typés pour l'entrée en cascade
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Décalage entre chaque catégorie
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } 
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
    <section className="max-w-7xl mx-auto text-black  bg-white px-4 relative group overflow-hidden" id='#products'>
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-black mb-10 text-gray-900 uppercase tracking-tighter"
      >
        Explore all categories
      </motion.h2>
      
      {/* Navigation Buttons */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-[60%] -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block hover:bg-blue-600 hover:text-white transition-colors"
      >
        <ChevronLeft size={20} />
      </button>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-[60%] -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block hover:bg-blue-600 hover:text-white transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slider Container Animé */}
      <motion.div 
        ref={scrollRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex overflow-x-auto gap-8 scroll-smooth no-scrollbar snap-x snap-mandatory pb-8 pt-2"
      >
        {siteData.categories.map((cat) => {
          const isActive = activeCategory === cat.name;

          return (
            <motion.div 
              key={cat.id} 
              variants={itemVariants}
              whileHover={{ y: -5 }} // Petit saut au survol
              onClick={() => handleCategoryClick(cat.name)} 
              className="flex-none w-[110px] md:w-[160px] flex flex-col items-center group cursor-pointer snap-center"
            >
              <div className={`
                relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full mb-4 transition-all duration-500
                ${isActive 
                  ? 'ring-[6px] ring-blue-600 ring-offset-4 shadow-2xl shadow-blue-200' 
                  : 'ring-0 shadow-lg group-hover:shadow-xl group-hover:ring-2 group-hover:ring-gray-200'}
              `}>
                <motion.img 
                  src={cat.image} 
                  alt={cat.name} 
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full rounded-full object-cover"
                />
                
                {/* Overlay discret au survol */}
                <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${isActive ? 'bg-blue-600/10' : 'bg-black/0 group-hover:bg-black/5'}`} />
              </div>

              <motion.p 
                className={`text-center font-black text-[11px] md:text-xs tracking-[0.1em] leading-tight px-2 transition-colors uppercase ${
                  isActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-black'
                }`}
              >
                {cat.name}
              </motion.p>
              
              {/* Petite barre sous le texte si actif */}
              {isActive && (
                <motion.div 
                  layoutId="activeBar" 
                  className="h-1 w-8 bg-blue-600 mt-2 rounded-full" 
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default CategorySlider;