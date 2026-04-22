import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../../data/sitedata';
import { heroImages } from '../../assets/hero_img';
import type { Variants } from 'framer-motion';

const Hero = () => {
  const { hero } = siteData;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Note: Utiliser l'ID sans le '#' pour getElementById
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  return (
    <section className="relative w-full h-fit max-sm:h-fit py-12 md:py-32 overflow-hidden font-sans bg-gradient-to-br from-white via-gray-50 to-gray-100">
      
      {/* 1. BACKGROUND AVEC IMAGE SUBTILE */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full"
            style={{
              backgroundImage: `url(${heroImages[index]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </AnimatePresence>
      </div>

      {/* OVERLAY - Subtle gradient for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/40 z-10" />

      {/* PROMO BANNER - Premium subtle design */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute top-0 left-0 w-full bg-gradient-to-r from-blue-50 to-transparent py-5 px-4 text-center text-sm md:text-base font-semibold z-30 border-b border-gray-200"
      >
        <span className="text-gray-800">Jusqu&apos;à -25% sur vos articles favoris | Jusqu&apos;au 27 fév.</span>
        <span className="underline ml-3 cursor-pointer text-blue-600 hover:text-blue-700 transition-colors">En profiter</span>
      </motion.div>

      {/* 2. MAIN CONTENT */}
      <div className="relative h-full flex items-center justify-center z-20 px-6 py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl max-sm:pt-8 w-full text-center flex flex-col items-center"
        >
          <motion.h1 
            variants={textVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-tight text-balance"
          >
            {hero.title}
          </motion.h1>

          <motion.p 
            variants={textVariants}
            className="text-lg md:text-2xl text-gray-700 mb-12 max-w-2xl leading-relaxed text-balance"
          >
            {hero.description}
          </motion.p>

          <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('products')}
              className="px-12 py-4 rounded-lg font-semibold uppercase text-sm tracking-wide transition-all bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
            >
              Nos Produits
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('footer')}
              className="px-12 py-4 rounded-lg font-semibold uppercase text-sm tracking-wide transition-all bg-white text-gray-900 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 shadow-sm hover:shadow-md"
            >
              Contactez-nous
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {heroImages.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className="group py-2 px-1" aria-label={`Go to slide ${i + 1}`}>
            <motion.div
              animate={{ 
                width: i === index ? 32 : 12,
                backgroundColor: i === index ? "#1e40af" : "rgba(107, 114, 128, 0.3)"
              }}
              className="h-2 rounded-full transition-colors"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
