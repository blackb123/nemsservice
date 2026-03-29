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
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute top-0 left-0 w-full  bg-blue-600/10 backdrop-blur-md text-white py-4 px-4 text-center text-xs md:text-sm font-semibold z-30 border-b border-white/5"
      >
        Jusqu'à -25% sur vos articles favoris | Jusqu'au ....
        <span className="underline ml-2 cursor-pointer hover:text-blue-400 transition-colors">En profiter</span>
      </motion.div>
      {/* Background image with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.2, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-full h-full"
            style={{
              backgroundImage: `url(${heroImages[index]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-transparent to-[#020617]" />
      </div>

      {/* Subtle geometric accents */}
      <div className="absolute top-20 right-20 w-40 h-px bg-gradient-to-l from-blue-500/20 to-transparent rotate-45" />
      <div className="absolute bottom-20 left-20 w-40 h-px bg-gradient-to-r from-blue-500/20 to-transparent -rotate-45" />

      {/* Subtle floating dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Main content */}
      <div className="relative z-10 max-w-5xl mt-4 mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Decorative line with label */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 group">
            <span className="h-[1px] w-8 bg-blue-500/30 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500" />
            <span className="text-blue-400/70 text-[10px] font-light uppercase tracking-[0.3em] group-hover:text-blue-400 transition-colors duration-500">
              Bienvenue chez Nem's Service
            </span>
            <span className="h-[1px] w-8 bg-blue-500/30 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500" />
          </motion.div>

          {/* Main title */}
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-[-0.02em] leading-tight">
            {hero.title.split(' ').map((word: string, i: number) => (
              <span key={i} className="inline-block mr-3">
                {word}
                {i === hero.title.split(' ').length - 1 && (
                  <span className="text-blue-400 relative inline-block ml-2 group">
                    sur mesure
                    <span className="absolute -bottom-2 left-0 w-full h-px bg-blue-400/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </span>
                )}
              </span>
            ))}
          </motion.h1>

          {/* Description with subtle line accent */}
          <motion.div variants={fadeInUp} className="relative max-w-2xl mx-auto">
            <span className="absolute left-1/2 -translate-x-1/2 -top-4 w-px h-8 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
              {hero.description}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('category')}
              className="group relative px-10 py-4 text-sm font-light text-white border border-white/20 rounded-full hover:border-blue-500/50 transition-all duration-500"
            >
              <span className="flex items-center gap-3">
                Nos Produits
                <span className="w-4 h-px bg-white/30 group-hover:w-6 group-hover:bg-blue-400 transition-all duration-500" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('footer')}
              className="px-10 py-4 text-sm font-light text-gray-300 hover:text-white border-b border-gray-700 hover:border-blue-500 transition-all duration-500"
            >
              Contactez-nous
            </motion.button>
          </motion.div>

          {/* Subtle floating dots */}
          <motion.div variants={fadeInUp} className="flex justify-center gap-1 pt-12">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-blue-500/30 animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group py-2 px-1"
            aria-label={`Image ${i + 1}`}
          >
            <motion.div
              animate={{
                width: i === index ? 24 : 8,
                backgroundColor: i === index ? "#3b82f6" : "rgba(255,255,255,0.2)"
              }}
              className="h-1 rounded-full transition-all"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;