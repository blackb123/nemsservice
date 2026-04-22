import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import  type { Variants } from 'framer-motion';
import { siteData } from '../../data/sitedata';
import { useCategory } from '../../provider/categoryprovider';
import { useNavigate } from 'react-router-dom';

const CategorySlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { activeCategory, setCategory } = useCategory();
  
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 20);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
      
      // Update active index based on scroll position
      const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
      const newIndex = Math.round(scrollPercentage * (siteData.categories.length - 1));
      setActiveIndex(Math.min(Math.max(0, newIndex), siteData.categories.length - 1));
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      checkScrollPosition();
      
      return () => {
        scrollElement.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  const handleCategoryClick = (categoryName: string) => {
    setCategory(categoryName);
    navigate('/products');
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount 
        : scrollRef.current.scrollLeft + scrollAmount;
      
      animate(scrollRef.current.scrollLeft, newScrollLeft, {
        type: "spring",
        stiffness: 300,
        damping: 30,
        onUpdate: (value) => {
          if (scrollRef.current) scrollRef.current.scrollLeft = value;
        }
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.scrollWidth / siteData.categories.length;
      const targetScroll = index * slideWidth;
      
      animate(scrollRef.current.scrollLeft, targetScroll, {
        type: "spring",
        stiffness: 300,
        damping: 30,
        onUpdate: (value) => {
          if (scrollRef.current) scrollRef.current.scrollLeft = value;
        }
      });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-8 md:py-16 bg-white px-4 md:px-6 relative" id='category'>
      {/* Header with refined design */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 md:mb-12"
      >
        <div className="flex items-center gap-4 mb-3">
          <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-blue-400" />
          <span className="text-blue-500 text-[10px] font-medium uppercase tracking-[0.3em]">
            Explorer
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
          Parcourez nos 
          <span className="font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent ml-2">
            catégories
          </span>
        </h2>
        <p className="text-gray-500 text-sm mt-2 max-w-md">
          Découvrez notre gamme complète de produits innovants
        </p>
      </motion.div>
      
      {/* Navigation Buttons - Enhanced */}
      <motion.button 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showLeftArrow ? 1 : 0, scale: showLeftArrow ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
        onClick={() => scroll('left')}
        className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg backdrop-blur-sm p-2.5 rounded-full border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-xl disabled:opacity-0"
        aria-label="Défiler vers la gauche"
        disabled={!showLeftArrow}
      >
        <ChevronLeft size={20} className="text-gray-700" />
      </motion.button>

      <motion.button 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showRightArrow ? 1 : 0, scale: showRightArrow ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
        onClick={() => scroll('right')}
        className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg backdrop-blur-sm p-2.5 rounded-full border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-xl disabled:opacity-0"
        aria-label="Défiler vers la droite"
        disabled={!showRightArrow}
      >
        <ChevronRight size={20} className="text-gray-700" />
      </motion.button>

      {/* Slider Container with drag scroll */}
      <motion.div 
        ref={scrollRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex overflow-x-auto gap-5 md:gap-8 scroll-smooth no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        whileTap={{ cursor: "grabbing" }}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
      >
        {siteData.categories.map((cat, idx) => {
          if (!cat) return null;
          const isActive = activeCategory === cat.name;
          const isCurrentIndex = activeIndex === idx;

          return (
            <motion.div 
              key={cat.id} 
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={() => handleCategoryClick(cat.name)} 
              className="flex-none w-[100px] md:w-[120px] lg:w-[140px] flex flex-col items-center group cursor-pointer snap-center relative"
            >
              {/* Animated ring background */}
              <div className="relative">
                {/* Glow effect on active */}
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute -inset-1 rounded-full bg-blue-500/20 blur-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Image container with enhanced styling */}
                <motion.div 
                  className={`
                    relative w-[88px] h-[88px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] 
                    rounded-full mb-3 md:mb-4 transition-all duration-500
                    ${isActive 
                      ? 'ring-3 ring-blue-500 ring-offset-2 ring-offset-white shadow-lg shadow-blue-500/20' 
                      : 'ring-0 group-hover:ring-2 group-hover:ring-gray-200 group-hover:shadow-md'}
                  `}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.img 
                    src={cat.image} 
                    alt={cat.name} 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full rounded-full object-cover bg-gray-50"
                    loading="lazy"
                  />
                  
                  {/* Active indicator badge */}
                  {isActive && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow-sm"
                    />
                  )}
                </motion.div>
              </div>

              {/* Category name with animated underline */}
              <div className="relative">
                <motion.p 
                  className={`
                    text-center text-[12px] md:text-sm font-medium tracking-wide transition-all duration-300
                    ${isActive 
                      ? 'text-blue-600' 
                      : 'text-gray-600 group-hover:text-gray-900'}
                  `}
                >
                  {cat.name}
                </motion.p>
                
                {/* Active bar with animation */}
                {isActive && (
                  <motion.div 
                    layoutId="activeBar" 
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: 20 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                
                {/* Hover bar */}
                {!isActive && (
                  <motion.div 
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 bg-gray-300 rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ width: 0 }}
                    whileHover={{ width: 20 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </div>
              
              {/* Counter badge */}
              <div className="mt-2">
                <span className="text-[9px] text-gray-400 group-hover:text-gray-500 transition-colors">
                  {'Plusieurs'}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Enhanced Mobile Pagination */}
      <div className="flex md:hidden items-center justify-between gap-4 mt-8">
        <button
          onClick={() => scroll('left')}
          disabled={!showLeftArrow}
          className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center disabled:opacity-30 border border-gray-200 hover:bg-gray-100 transition-all duration-300 active:scale-95"
        >
          <ChevronLeft size={16} className="text-gray-700" />
        </button>
        
        <div className="flex gap-2 flex-1 justify-center">
          {siteData.categories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className="relative group"
            >
              <motion.div 
                className={`
                  rounded-full transition-all duration-300 cursor-pointer
                  ${idx === activeIndex 
                    ? 'bg-blue-500 w-6 h-1.5' 
                    : 'bg-gray-300 w-1.5 h-1.5 hover:bg-gray-400'}
                `}
                animate={{
                  scale: idx === activeIndex ? 1 : 0.8,
                }}
              />
            </button>
          ))}
        </div>
        
        <button
          onClick={() => scroll('right')}
          disabled={!showRightArrow}
          className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center disabled:opacity-30 border border-gray-200 hover:bg-gray-100 transition-all duration-300 active:scale-95"
        >
          <ChevronRight size={16} className="text-gray-700" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="hidden md:block mt-8 max-w-md mx-auto">
        <div className="h-px bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
            initial={{ width: 0 }}
            animate={{ 
              width: `${(activeIndex / (siteData.categories.length - 1)) * 100}%` 
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { 
          display: none; 
        }
        .no-scrollbar { 
          -ms-overflow-style: none; 
          scrollbar-width: none; 
        }
      `}</style>
    </section>
  );
};

export default CategorySlider;