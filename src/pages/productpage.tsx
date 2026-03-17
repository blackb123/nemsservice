import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import ProductSection from '../section/productpage/productsection';
import { product } from '../data/sitedata'; 
import { useCategory } from '../provider/categoryprovider'; 
import { FiChevronRight, FiLayers, FiInfo, FiChevronLeft, FiArrowRight, FiEye } from 'react-icons/fi';
import type { Variants } from 'framer-motion';

const ProductPage: React.FC = () => {
  const { activeCategory } = useCategory();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const productListRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollY } = useScroll();
  
  // Optimize scroll transforms with useMemo and reduce complexity
  const y1 = useTransform(scrollY, [0, 500], shouldReduceMotion ? [0, 0] : [0, 100]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  // Memoize filtered products to prevent recalculation on every render
  const filteredProducts = useMemo(() => 
    activeCategory === 'All' 
      ? product 
      : product.filter((p: { category: string; }) => p.category === activeCategory),
    [activeCategory]
  );

  // Memoize pagination values
  const { currentProducts, totalPages } = useMemo(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return {
      currentProducts: filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct),
      totalPages: Math.ceil(filteredProducts.length / productsPerPage)
    };
  }, [filteredProducts, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  // Optimize scroll handler with useCallback
  const handlePageChange = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (productListRef.current) {
      const offset = 120;
      const elementPosition = productListRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  }, []);

  // Animation variants - properly typed
  const heroTextVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  // MODERN CARD ANIMATIONS - Multiple variants for sophisticated entrance
  const cardContainerVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.95,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: shouldReduceMotion ? 1 : 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const cardContentVariants: Variants = {
    hidden: { 
      opacity: 0,
      x: shouldReduceMotion ? 0 : -20,
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const cardBadgeVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.8,
      x: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.3
      }
    }
  };

  const cardGlowVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: [0, 0.15, 0],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  const productItemVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: shouldReduceMotion ? 0 : 40,
      scale: shouldReduceMotion ? 1 : 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1], // Bouncy but smooth
      }
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  // Optimize floating animation with will-change
  const floatingCircleStyle = {
    willChange: 'transform, opacity',
    transform: 'translateZ(0)'
  };
  const rawNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "237671810319";
const whatsappNumber = rawNumber.replace('+', '');

  return (
    <main className="mt-[80px] min-h-screen bg-[#F8FAFC] overflow-x-hidden w-full relative">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-br from-[#020617] to-[#0b1120] pt-40 pb-52 overflow-hidden w-full">
  {/* Subtle texture instead of glowing orbs */}
  <div className="absolute inset-0 opacity-[0.02]" style={{
    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
    backgroundSize: '40px 40px'
  }} />
  
  {/* Minimal geometric accents */}
  <div className="absolute top-20 right-20 w-40 h-px bg-gradient-to-l from-blue-500/20 to-transparent rotate-45" />
  <div className="absolute bottom-20 left-20 w-40 h-px bg-gradient-to-r from-blue-500/20 to-transparent -rotate-45" />
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Column - Title Area */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        {/* Category with refined line */}
        <motion.div 
          className="flex items-center gap-4 mb-8 group cursor-default"
          whileHover={{ x: 8 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <span className="h-[1px] w-12 bg-blue-500/50 group-hover:w-16 transition-all duration-500" />
          <span className="text-blue-400/50 text-[10px] font-light uppercase tracking-[0.3em] group-hover:text-blue-400 transition-colors duration-500">
            Excellence Artisanale
          </span>
        </motion.div>
        
        {/* Main title with refined animation */}
        <h1 className="text-6xl md:text-[7rem] font-light text-white leading-[0.9] tracking-[-0.02em]">
          {activeCategory.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.02 }}
              className="inline-block hover:opacity-70 transition-opacity duration-300"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        {/* Clean divider */}
        <div className="w-20 h-px bg-white/10 mt-8" />
      </motion.div>

      {/* Right Column - Authentic Message */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
      >
        {/* Main message - Elegant and human */}
        <div className="space-y-6">
          <p className="text-white text-2xl font-light leading-relaxed">
            Une collaboration <span className="text-blue-400">sur mesure</span>, 
            où chaque projet est unique.
          </p>
          
          <div className="space-y-4 text-slate-400 text-base font-light leading-relaxed">
            <p>
              Nous travaillons en étroite collaboration avec chaque client pour 
              garantir une réalisation qui correspond parfaitement à vos attentes. 
              De la conception à la livraison, notre équipe vous accompagne avec 
              la même exigence de qualité qui fait notre réputation depuis 15 ans.
            </p>
            <p className="text-slate-500 text-sm">
              — Votre satisfaction est notre seule signature.
            </p>
          </div>
        </div>

        {/* Minimal contact hint */}
        <motion.div 
          className="flex items-center gap-4 pt-6 border-t border-white/5"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="text-xs text-slate-600 font-light tracking-wider uppercase">
            Discutons de votre projet
          </span>
          <span className="text-slate-600 text-lg font-light">→</span>
        </motion.div>

        {/* Right side - Simple testimonial card without glow */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative mt-12 pt-8"
        >
          <div className="relative bg-white/[0.02] p-6 rounded-2xl border border-white/5">
            <div className="absolute top-0 left-8 w-10 h-px bg-blue-500/30" />
            
            <p className="text-slate-400 text-sm font-light italic mb-4">
              "Une équipe qui comprend vraiment nos besoins et qui sait 
              traduire notre vision en réalité."
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                <span className="text-white/30 text-xs">NS</span>
              </div>
              <div>
                <p className="text-white text-xs font-medium">Direction Créative</p>
                <p className="text-slate-600 text-[9px] uppercase tracking-wider">Nem's Service</p>
              </div>
            </div>

            {/* Minimal decorative element */}
            <div className="absolute bottom-4 right-4 w-12 h-12 border border-white/5 rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* Simple baseline */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[8px] text-slate-800 font-light uppercase tracking-[0.5em]"
    >
      • Qualité • Exigence • Durabilité •
    </motion.div>
  </div>
</section>

      {/* --- NAVIGATION STICKY --- */}
      <div ref={productListRef} className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-md w-full">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <nav className="flex items-center gap-2 md:gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <a href="/" className="hover:text-blue-600 transition">Nem's</a>
            <FiChevronRight className="flex-shrink-0" />
            <span className="text-slate-900 truncate max-w-[100px] md:max-w-none">{activeCategory}</span>
          </nav>

          <div className="flex items-center gap-4 md:gap-8">
             <div className="hidden sm:flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">Stock Live</span>
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#020617] text-white rounded-full">
                <FiLayers size={12} />
                <span className="text-[10px] md:text-[11px] font-black">{filteredProducts.length} RÉFS</span>
             </div>
          </div>
        </div>
      </div>

      {/* --- LISTE DES PRODUITS --- */}
      <div className="max-w-7xl mx-auto py-10 max-sm:py-0 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + currentPage}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col space-y-4"
          >
            {currentProducts.map((item:any, index: number) => (
              <motion.div
                key={`${index}-${activeCategory}`}
                variants={productItemVariants}
                whileHover="hover"
                viewport={{ 
                  once: true, 
                  margin: "-50px",
                  amount: 0.3
                }}
                className="group relative bg-white  p-6 md:p-10 transition-all duration-500 overflow-hidden will-change-transform cursor-pointer "
              >
               

                {/* Card content with staggered animation */}
                <motion.div
                  variants={cardContentVariants}
                  className="relative z-10"
                >
                  <ProductSection index={index} {...item} />
                </motion.div>

                {/* View details badge */}
                
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* --- PAGINATION --- */}
        {totalPages > 1 && (
  <div className="mt-16 flex flex-wrap justify-center items-center gap-2 sm:gap-4 pb-10 px-4">
    {/* Previous button */}
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border text-black border-slate-200 flex items-center justify-center disabled:opacity-20 bg-white hover:bg-slate-50 transition-colors"
      aria-label="Page précédente"
    >
      <FiChevronLeft size={18} className="sm:w-5 sm:h-5" />
    </motion.button>

    {/* Page numbers - responsive with truncation */}
    <div className="flex gap-1 bg-white p-1 rounded-2xl border border-slate-200 shadow-sm relative overflow-x-auto max-w-[200px] sm:max-w-none scrollbar-hide">
      {[...Array(totalPages)].map((_, i) => {
        const pageNum = i + 1;
        const isActive = currentPage === pageNum;
        
        // Show fewer pages on mobile
        const showOnMobile = 
          totalPages <= 5 || 
          pageNum === 1 || 
          pageNum === totalPages || 
          Math.abs(pageNum - currentPage) <= 1;
        
        // Show ellipsis on mobile
        const showEllipsisBefore = 
          totalPages > 5 && 
          pageNum === 2 && 
          currentPage > 3;
        
        const showEllipsisAfter = 
          totalPages > 5 && 
          pageNum === totalPages - 1 && 
          currentPage < totalPages - 2;
        
        if (!showOnMobile) {
          if (showEllipsisBefore) {
            return (
              <span 
                key={i} 
                className="hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 items-center justify-center text-slate-400"
              >
                ...
              </span>
            );
          }
          if (showEllipsisAfter) {
            return (
              <span 
                key={i} 
                className="hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 items-center justify-center text-slate-400"
              >
                ...
              </span>
            );
          }
          return null;
        }
        
        return (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handlePageChange(pageNum)}
            className={`relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-[10px] sm:text-[11px] font-black z-10 transition-colors ${
              isActive ? 'text-white' : 'text-slate-400 hover:text-slate-600'
            }`}
            aria-label={`Page ${pageNum}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {isActive && (
              <motion.div
                layoutId="activePageIndicator"
                className="absolute inset-0 bg-[#020617] rounded-lg sm:rounded-xl -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            {pageNum}
          </motion.button>
        );
      })}
    </div>

    {/* Next button */}
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="w-10 h-10 sm:w-12 sm:h-12 text-black rounded-xl border border-slate-200 flex items-center justify-center disabled:opacity-20 bg-white hover:bg-slate-50 transition-colors"
      aria-label="Page suivante"
    >
      <FiChevronRight size={18} className="sm:w-5 sm:h-5" />
    </motion.button>
  </div>
)}
      </div>

      {/* --- CONTACT --- */}
      <section className="relative py-40 w-full overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: shouldReduceMotion ? 1 : 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000"
            className="w-full h-full object-cover grayscale opacity-40"
            alt="Background Contact"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-[#020617]" />
        </div>

       <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
              visible: { opacity: 1, y: 0 }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest">
              Disponible pour nouveaux projets
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-[0.9]">
            <div className="overflow-hidden">
              <motion.span
                className="block"
                variants={{
                  hidden: { y: shouldReduceMotion ? 0 : "100%" },
                  visible: { 
                    y: 0, 
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
              >
                Prêt à définir le
              </motion.span>
            </div>
            
            <div className="overflow-hidden">
              <motion.span
                className="block text-blue-600 italic"
                variants={{
                  hidden: { y: shouldReduceMotion ? 0 : "100%" },
                  visible: { 
                    y: 0, 
                    transition: { duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
              >
                prochain standard ?
              </motion.span>
            </div>
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Collaboration Button - WhatsApp Link */}
          <motion.a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Salut! Je voudrais discuter d'une collaboration avec votre équipe. Pouvez-vous m'en dire plus sur vos services ?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="relative group/btn overflow-hidden bg-orange-500 text-white px-12 py-7 font-black uppercase text-[12px] tracking-[0.2em] shadow-2xl shadow-blue-500/20 transition-all"
          >
            <span className="relative z-10 flex items-center gap-4">
              Démarrer la collaboration 
              <FiArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
            </span>
            {!shouldReduceMotion && (
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            )}
          </motion.a>

          {/* PDF Download Button with File Size Indicator */}
          <motion.a 
            href="/catalogue.pdf"
            download
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="relative group/btn overflow-hidden px-12 py-7 font-black uppercase text-[11px] tracking-[0.2em] text-white border border-white/10 backdrop-blur-sm transition-all hover:bg-white/5"
          >
            <span className="relative z-10 flex flex-col items-center">
              <span className="flex items-center gap-2">
                Catalogue PDF v2.0
                <FiArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </span>
              <span className="text-[8px] font-normal text-slate-400 mt-1">
                Poids: 33 MB • Téléchargement
              </span>
            </span>
            {!shouldReduceMotion && (
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            )}
          </motion.a>
        </div>

          {/* Optional: Add a note about download size */}
          <p className="mt-4 text-xs text-slate-500">
            ⚡ Catalogue complet • 33 MB • Format PDF
          </p>

          <p className="mt-16 text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]">
            Expertise Technique • Design Architectural • Nem's Service 2026
          </p>
        </motion.div>
        </div>

        <div className="absolute bottom-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-blue-600/50 to-transparent" />
      </section>
    </main>
  );
};

export default ProductPage;