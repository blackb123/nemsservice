import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Assuming these assets are valid paths in your project
import nembanner1 from '../assets/nembanner1.webp';
import nembanner2 from '../assets/nembanner2.webp';

/**
 * INSTRUCTIONS FOR OPTIMAL RESULTS:
 * To use the custom fonts, you must add this to your Tailwind CSS/HTML head:
 * <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Marcellus&display=swap" rel="stylesheet">
 *
 * Then, in your `tailwind.config.js`:
 * theme: {
 * extend: {
 * fontFamily: {
 * serif: ['Bodoni Moda', 'serif'],
 * marcellus: ['Marcellus', 'serif'],
 * },
 * },
 * }
 */

interface BannerSlide {
  id: number;
  image: string;
  title: string;
  description: string;
  target: string;
}

const BannerCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides: BannerSlide[] = [
    {
      id: 1,
      image: nembanner1,
      title: "Coffrets Premium",
      description: "Découvrez notre collection exclusive de coffrets cadeaux d'exception",
      target: "/coffrets"
    },
    {
      id: 2,
      image: nembanner2,
      title: "Produits Personnalisés",
      description: "Explorez notre gamme complète de produits uniques, sur mesure pour vous",
      target: "/products"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Slightly slower carousel for an elegant feel

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideClick = (target: string) => {
    navigate(target);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[450px] md:h-[500px]  overflow-hidden bg-[#1a1a1a] shadow-inner">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }} // Smoother, slower cross-fade
          className="relative w-full  h-full cursor-pointer group"
          onClick={() => handleSlideClick(slides[currentSlide].target)}
        >
          {/* Subtle Image Zoom on Slide */}
          <motion.img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          
          {/* Sophisticated Overlay: Deeper but softer gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
            <div className="max-w-7xl mx-auto px-5 md:px-5 lg:px-10 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="max-w-xl md:max-w-2xl text-left"
              >
                {/* 1. TYPOGRAPHY - TITLE: Classic Serif, Uppercase, Tracking */}
                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-extralight text-amber-50 uppercase tracking-[0.15em] mb-4 leading-tight drop-shadow-lg">
                  {slides[currentSlide].title}
                </h2>
                
                {/* Separator Line */}
                <motion.div 
                  className="w-16 h-px bg-amber-200/60 mb-6"
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />

                {/* 2. TYPOGRAPHY - DESCRIPTION: Secondary Serif, Softer White */}
                <p className="font-marcellus text-xl md:text-2xl text-amber-100/90 mb-10 leading-relaxed font-light drop-shadow">
                  {slides[currentSlide].description}
                </p>

                {/* 3. BUTTON: Classic Ghost Button, Elegant Text */}
                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 252, 240, 1)", color: "#2d2d2d" }}
                  whileTap={{ scale: 0.98 }}
                  className="font-marcellus inline-block border border-amber-200/80 text-amber-100 px-10 py-4 font-light text-lg uppercase tracking-wider transition-all duration-300 shadow-xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSlideClick(slides[currentSlide].target);
                  }}
                >
                  {slides[currentSlide].target === '/coffrets' ? 'Découvrir la Collection' : 'Explorer Notre Gamme'}
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows - Minimally visible until hover, using softer colors */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-100/30 p-3 rounded-full hover:bg-black/20 hover:text-amber-100 transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8 font-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-amber-100/30 p-3 rounded-full hover:bg-black/20 hover:text-amber-100 transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8 font-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots indicator - Thinner and softer color */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              handleDotClick(index);
            }}
            className={`transition-all duration-500 rounded-full ${
              currentSlide === index
                ? 'bg-amber-100 w-10 h-1.5'
                : 'bg-amber-100/30 hover:bg-amber-100/60 w-1.5 h-1.5'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;