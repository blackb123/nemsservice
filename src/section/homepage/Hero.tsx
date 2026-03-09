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
    <section className="relative w-full h-fit max-sm:h-fit py-10 md:py-20 overflow-hidden font-sans bg-[#020617]">
      
      {/* 1. BACKGROUND AVEC IMAGE RÉDUITE */}
      <div className="absolute inset-0 flex items-center justify-center  z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.4, scale: 1 }} // Opacité réduite pour laisser le texte lisible
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-full h-full  rounded-3xl"
            style={{
              backgroundImage: `url(${heroImages[index]})`,
              backgroundSize: 'cover', // L'image ne sera pas coupée et restera "petite"
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </AnimatePresence>
      </div>

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-transparent to-[#020617] z-10" />

      {/* PROMO BANNER */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute top-0 left-0 w-full bg-blue-600/10 backdrop-blur-md text-white py-4 px-4 text-center text-xs md:text-sm font-semibold z-30 border-b border-white/5"
      >
        Jusqu'à -25% sur vos articles favoris | Jusqu'au 27 fév.
        <span className="underline ml-2 cursor-pointer hover:text-blue-400 transition-colors">En profiter</span>
      </motion.div>

      {/* 2. MAIN CONTENT */}
      <div className="relative h-full flex items-center justify-center z-20 px-6 py-15">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl max-sm:pt-12 w-full text-center flex flex-col items-center"
        >
          <motion.h1 
            variants={textVariants}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight"
          >
            {hero.title}
          </motion.h1>

          <motion.p 
            variants={textVariants}
            className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            {hero.description}
          </motion.p>

          <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('products')}
              className="px-10 py-5 rounded-full font-black uppercase text-[12px] tracking-widest transition-all bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-500/20"
            >
              Nos Produits
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('footer')}
              className="px-10 py-5 rounded-full font-black uppercase text-[12px] tracking-widest transition-all bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white hover:text-black"
            >
              Contactez-nous
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. INDICATORS */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {heroImages.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className="group py-2 px-1">
            <motion.div
              animate={{ 
                width: i === index ? 32 : 12,
                backgroundColor: i === index ? "#2563eb" : "rgba(255, 255, 255, 0.3)"
              }}
              className="h-1 rounded-full transition-colors"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;