import React, { useState, useEffect } from 'react';
import { siteData } from '../../data/sitedata';
import { heroImages } from '../../assets/hero_img';

const Hero = () => {
  const { hero } = siteData;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-fit py-10 overflow-hidden font-sans">
      
      {/* 1. BACKGROUND LAYERS (Cross-fade effect) */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* 2. OVERLAY (Ensures text contrast) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/60" />

      {/* 3. TOP PROMO BANNER (Now more responsive) */}
      <div className="absolute top-0 left-0 w-full bg-black/80 backdrop-blur-sm text-white py-4 px-4 text-center text-xs md:text-sm font-semibold z-30">
        Up to 25% off customer favorites | Ends Feb. 27 
        <span className="underline ml-2 cursor-pointer hover:text-gray-300">Shop now</span>
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="relative h-full flex items-center justify-center z-20 px-6">
        <div className="max-w-4xl w-full text-center flex flex-col items-center mt-12">
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-[1.1]">
            {hero.title}
          </h1>

          <p className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            {hero.description}
          </p>


          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {hero.buttons.map((btn, i) => (
              <button
                key={i}
                className={`px-10 py-4 rounded-full font-bold transition-all duration-300 active:scale-95 shadow-xl ${
                  btn.primary 
                  ? "bg-[#1b0f53] text-white hover:bg-[#2d1a8a]" 
                  : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 5. CAROUSEL INDICATORS (Intuitive UX) */}
      <div className="absolute bottom-3 left-1/2 max-xl:bottom-2 -translate-x-1/2 flex gap-3 z-30">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-500 rounded-full ${
              i === index ? 'w-10 bg-white' : 'w-4 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;