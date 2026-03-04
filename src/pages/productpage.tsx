import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import ProductSection from '../section/productpage/productsection';
import { product } from '../data/sitedata'; 
import { useCategory } from '../provider/categoryprovider'; 
import { FiChevronRight, FiLayers, FiInfo, FiChevronLeft, FiArrowRight } from 'react-icons/fi';

const ProductPage: React.FC = () => {
  const { activeCategory } = useCategory();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const productListRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setCurrentPage(1);
    // Utilisation de top: 0 pour éviter les conflits de calcul d'overflow au changement de catégorie
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  const filteredProducts = activeCategory === 'All' 
    ? product 
    : product.filter(p => p.category === activeCategory);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (productListRef.current) {
      const offset = 120;
      const elementPosition = productListRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    // overflow-x-hidden ici est crucial pour capturer tout débordement des animations
    <main className="mt-[80px] min-h-screen bg-[#F8FAFC] overflow-x-hidden w-full relative">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#020617] pt-40 pb-52 overflow-hidden w-full">
        {/* Correction : pointer-events-none et ajustement des cercles pour éviter l'overflow */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-12 -left-12 w-64 h-64 md:w-96 md:h-96 bg-blue-600 rounded-full blur-[100px] pointer-events-none z-0" 
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div style={{ y: y1, opacity: opacityHero }}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="h-[2px] w-8 bg-blue-500" />
                <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.5em]">
                  Excellence Opérationnelle
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-[10rem] font-black text-white mb-8 tracking-tighter leading-[0.85] break-words"
              >
                {activeCategory}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="max-w-md text-slate-400 text-xl font-light leading-relaxed border-l-2 border-blue-500/30 pl-6"
              >
                Une approche <span className="text-white">architecturale</span> de la communication visuelle. 
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:block relative"
            >
               <div className="absolute inset-0 bg-blue-500/10 blur-[80px] -z-10" />
               <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl">
                  <FiInfo className="text-blue-500 mb-4" size={24} />
                  <p className="text-slate-300 text-lg italic font-light mb-8">
                    "Nous forgeons des identités qui durent."
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" 
                      className="w-12 h-12 rounded-full object-cover grayscale border-2 border-blue-500" 
                      alt="Expert" 
                    />
                    <div>
                      <p className="text-white font-bold text-sm">Cellule Qualité</p>
                      <p className="text-blue-500 text-[10px] uppercase font-black tracking-widest">Nem's Service</p>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- NAVIGATION STICKY --- */}
      <div ref={productListRef} className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 w-full">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <nav className="flex items-center gap-2 md:gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <a href="/" className="hover:text-blue-600 transition">Nem's</a>
            <FiChevronRight />
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
      <div className="max-w-7xl mx-auto px-6 max-sm:px-0 py-10  max-sm:py-0  relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + currentPage}
            className="flex flex-col space-y-4"
          >
            {currentProducts.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-5%" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, y: 0,
                    transition: { duration: 0.6, staggerChildren: 0.1 } 
                  }
                }}
                // Correction : Ajout de overflow-hidden sur la carte pour les lignes internes
                className="group relative bg-white 
                rounded-[2rem] p-6 md:p-10   transition-all duration-500 overflow-hidden"
              >
                {/* Ligne de flux décorative ajustée à left-0 pour éviter l'overflow négatif */}
                <div className="absolute left-0 top-10 h-1/2 w-[3px] bg-gradient-to-b from-blue-600 to-transparent hidden xl:block overflow-hidden">
                  <motion.div
                    initial={{ y: "-100%" }}
                    whileInView={{ y: "100%" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-full h-20 bg-blue-400 blur-sm"
                  />
                </div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -5 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <ProductSection index={index} {...item} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* --- PAGINATION --- */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-4 pb-10">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-12 h-12 rounded-xl border text-black border-slate-200 flex items-center justify-center disabled:opacity-20 bg-white"
            >
              <FiChevronLeft />
            </button>

            <div className="flex gap-1 bg-white p-1 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={i}
                    onClick={() => handlePageChange(pageNum)}
                    className={`relative w-10 h-10 flex items-center justify-center text-[11px] font-black z-10 transition-colors ${isActive ? 'text-white' : 'text-slate-400'}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePage"
                        className="absolute inset-0 bg-[#020617] rounded-xl -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-12 h-12  text-black rounded-xl border border-slate-200 flex items-center justify-center disabled:opacity-20 bg-white"
            >
              <FiChevronRight />
            </button>
          </div>
        )}
      </div>

      {/* --- CONTACT --- */}
      <section className="relative py-40 w-full overflow-hidden group">
  {/* --- BACKGROUND IMAGE AVEC OVERLAY --- */}
  <div className="absolute inset-0 z-0">
    <motion.img
      initial={{ scale: 1.1 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" // Remplacez par votre image d'atelier ou de bureau
      className="w-full h-full object-cover grayscale opacity-40"
      alt="Background Contact"
    />
    {/* Gradient pour fondre l'image dans le noir profond de la marque */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-[#020617]" />
  </div>

  <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge de réassurance */}
        <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-5xl mx-auto px-6 text-center relative z-10"
    >
  {/* BADGE ANIMÉ */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8"
      >
        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest">
          Disponible pour nouveaux projets
        </span>
      </motion.div>

      {/* TITRE AVEC RÉVÉLATION PAR LIGNE */}
      <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-[0.9]">
        <div className="overflow-hidden">
          <motion.span
            className="block"
            variants={{
              hidden: { y: "100%" },
              visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            Prêt à définir le
          </motion.span>
        </div>
        
        <div className="overflow-hidden">
          <motion.span
            className="block text-blue-600 italic"
            variants={{
              hidden: { y: "100%" },
              visible: { 
                y: 0, 
                transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
          >
            prochain standard ?
          </motion.span>
        </div>
      </h2>
    </motion.div>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        {/* BOUTON CTA PRINCIPAL - STYLE NEM'S */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group/btn overflow-hidden bg-orange-500 text-white px-12 py-7  font-black uppercase text-[12px] tracking-[0.2em] shadow-2xl shadow-blue-500/20 transition-all"
        >
          <span className="relative z-10 flex items-center gap-4">
            Démarrer la collaboration <FiArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
          </span>
          {/* Effet de brillance au survol */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
        </motion.button>

        {/* BOUTON SECONDAIRE */}
        <motion.button 
          whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          className="px-12 py-7 font-black uppercase text-[11px] tracking-[0.2em] text-white border border-white/10 backdrop-blur-sm transition-all"
        >
          Catalogue PDF v2.0
        </motion.button>
      </div>

      {/* Footer minimaliste de section */}
      <p className="mt-16 text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]">
        Expertise Technique • Design Architectural • Nem's Service 2026
      </p>
    </motion.div>
  </div>

  {/* Décoration subtile en arrière-plan */}
    <div className="absolute bottom-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-blue-600/50 to-transparent" />
  </section>
    </main>
  );
};

export default ProductPage;