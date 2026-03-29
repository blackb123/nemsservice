import React, { useEffect } from 'react';
import { useCoffrets } from '../provider/coffreprovider';
import { FiArrowRight, FiPackage, FiDroplet } from 'react-icons/fi';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import bg from "../assets/notebook.webp"

type CoffretGroup = {
  id: number;
  name: string;
  category: string;
  tagline: string;
  packs: {
    name: string;
    ref: string;
    details: string;
    colors: string[];
    includes: string[];
    image: string;
  }[];
};

const CoffretDisplayPage: React.FC = () => {
  const { allCoffrets, selectedPack } = useCoffrets();

  // WhatsApp configuration
  const rawNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "237671810319";
  const whatsappNumber = rawNumber.replace('+', '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const displayGroups = selectedPack 
    ? allCoffrets.filter(group => group.name === selectedPack.name || group.id === selectedPack.id)
    : allCoffrets;

  // Variantes pour le texte et les éléments de liste
  const fadeInRight:Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInUp:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  // Function to handle WhatsApp click with custom message
  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* HEADER SECTION */}
      <header className="relative py-15 md:py-15 border-b border-gray-100 overflow-hidden bg-gradient-to-br from-white to-gray-50">
        {/* Subtle texture background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #020617 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Background image with soft overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        />
        
        {/* Minimal geometric accents */}
        <div className="absolute top-20 right-20 w-40 h-px bg-gradient-to-l from-blue-500/10 to-transparent rotate-45" />
        <div className="absolute bottom-20 left-20 w-40 h-px bg-gradient-to-r from-blue-500/10 to-transparent -rotate-45" />
        
        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 z-0 bg-white/40" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="max-w-4xl mx-auto px-6 h-[300px] text-center relative z-10"
        >
          {/* Category with refined line */}
          <motion.div 
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 mb-6 group"
          >
            <span className="h-[1px] w-8 bg-blue-500/30 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500" />
            <span className="text-blue-500/70 mt-3 text-[10px] font-light uppercase tracking-[0.3em] group-hover:text-blue-500 transition-colors duration-500">
              NEM'S Services - Collection 2024
            </span>
            <span className="h-[1px] w-8 bg-blue-500/30 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500" />
          </motion.div>
          
          {/* Main title with refined typography */}
          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-[-0.02em] leading-[1.1]"
          >
            {selectedPack ? (
              selectedPack.name.split(' ').map((word: string, i: number) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="inline-block mr-3 hover:text-blue-500 transition-colors duration-300"
                >
                  {word}
                </motion.span>
              ))
            ) : (
              <>
                <span className="block">Le Catalogue</span>
                <span className="text-blue-500 relative inline-block group">
                  Prestige
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-px bg-blue-500/30 group-hover:w-20 transition-all duration-500" />
                </span>
              </>
            )}
          </motion.h1>
          
          {/* Description with subtle line accent */}
          <motion.div 
            variants={fadeInUp}
            className="relative max-w-2xl mx-auto"
          >
            <span className="absolute left-1/2 -translate-x-1/2 -top-4 w-px h-8 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              {selectedPack?.tagline || "Découvrez notre sélection exclusive d'objets publicitaires et coffrets cadeaux."}
            </p>
          </motion.div>

          {/* Minimal decorative element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
          />
        </motion.div>

        {/* Subtle floating dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-blue-500/30"
            />
          ))}
        </div>
      </header>

      {/* PRODUCTS SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        {displayGroups.map((group: CoffretGroup) => (
          <div key={group.id} className="mb-32 last:mb-0">
            {!selectedPack && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-16"
              >
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400 whitespace-nowrap">
                  {group.name}
                </h2>
                <div className="h-[1px] bg-gray-100 w-full"></div>
              </motion.div>
            )}

            <div className="space-y-32">
              {group.packs.map((pack, index) => (
                <motion.section 
                  key={pack.ref}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10%" }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                  }}
                  className={`flex flex-col md:flex-row gap-16 items-center group ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* LEFT: IMAGE ANIMATION */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, scale: 0.9, y: 20 },
                      visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    className="w-full md:w-1/2 relative"
                  >
                    <div className="absolute inset-0 bg-[#f4f2f0] rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-700 ease-out"></div>
                    <div className="relative z-10">
                      <img 
                        src={pack.image} 
                        alt={pack.name} 
                        className="w-full h-auto object-cover drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:translate-y-[-10px] transition-transform duration-500"
                      />
                    </div>
                  </motion.div>

                  {/* RIGHT: TEXT CONTENT STAGGERED */}
                  <div className="w-full md:w-1/2 space-y-8">
                    <div className="space-y-2">
                      <motion.div variants={fadeInRight} className="flex items-center gap-3">
                        <span className="h-[1px] w-8 bg-blue-600"></span>
                        <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">{pack.ref}</span>
                      </motion.div>
                      <motion.h3 variants={fadeInRight} className="text-4xl font-bold text-gray-900 leading-none tracking-tighter">
                        {pack.name}
                      </motion.h3>
                    </div>

                    <motion.p variants={fadeInRight} className="text-gray-500 text-xl font-light leading-relaxed border-l-2 border-gray-100 pl-6 italic">
                      {pack.details}
                    </motion.p>

                    <div className="space-y-6">
                      <motion.div variants={fadeInRight} className="flex items-start gap-4">
                        <div className="mt-1 bg-black p-2 rounded-lg text-white">
                          <FiPackage size={16} />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm uppercase tracking-wider text-gray-900 mb-2">Composition</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                            {pack.includes.map((item, i) => (
                              <li key={i} className="text-gray-500 text-sm flex items-center gap-2">
                                <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>

                      {pack.colors && (
                        <motion.div variants={fadeInRight} className="flex items-start gap-4">
                          <div className="mt-1 bg-black p-2 rounded-lg text-white">
                            <FiDroplet size={16} />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-900 mb-2">Finitions</h4>
                            <div className="flex flex-wrap gap-2">
                              {pack.colors.map(color => (
                                <span key={color} className="px-3 py-1 bg-gray-50 text-[10px] font-bold rounded border border-gray-200 text-gray-600 uppercase">
                                  {color}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <motion.div variants={fadeInUp} className="pt-6">
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleWhatsAppClick(
                          `Bonjour, je suis intéressé par le coffret ${pack.name} (Ref: ${pack.ref}). Pouvez-vous me donner plus d'informations et un devis ?`
                        )}
                        className="group/btn relative px-10 py-4 bg-black overflow-hidden rounded-full transition-all hover:pr-14"
                      >
                        <span className="relative z-10 text-white text-sm font-bold uppercase tracking-widest">
                          Demander un Devis
                        </span>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/btn:opacity-100 transition-all text-white">
                          <FiArrowRight size={20} />
                        </div>
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER CALL TO ACTION */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 py-32 overflow-hidden relative">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Geometric accents */}
        <div className="absolute top-40 left-20 w-40 h-px bg-gradient-to-r from-blue-500/20 to-transparent rotate-45" />
        <div className="absolute bottom-40 right-20 w-40 h-px bg-gradient-to-l from-blue-500/20 to-transparent -rotate-45" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          {/* Category line */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-8 group"
          >
            <span className="h-[1px] w-8 bg-blue-500/30 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500" />
            <span className="text-blue-500/50 text-[10px] font-light uppercase tracking-[0.3em] group-hover:text-blue-400 transition-colors duration-500">
              Accompagnement
            </span>
            <span className="h-[1px] w-8 bg-blue-500/30 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-[-0.02em]">
            Besoin d'un accompagnement<br />sur mesure ?
          </h2>
          
          <p className="text-gray-400 text-lg font-light mb-12 max-w-2xl mx-auto">
            Nos experts vous conseillent sur la personnalisation de vos coffrets et objets publicitaires.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Quote Request Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleWhatsAppClick(
                "Bonjour, je souhaite obtenir un devis pour des coffrets personnalisés. Pouvez-vous me conseiller ?"
              )}
              className="group relative px-10 py-4 bg-blue-600 text-white overflow-hidden rounded-full transition-all hover:pr-14"
            >
              <span className="relative z-10 flex items-center gap-3 text-sm font-light tracking-wider">
                Demander un devis
                <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.button>
            
            {/* Contact Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleWhatsAppClick(
                "Bonjour, je souhaite entrer en contact avec un conseiller pour discuter de mon projet."
              )}
              className="px-10 py-4 border border-white/20 text-white rounded-full text-sm font-light tracking-wider hover:bg-white/5 transition-all"
            >
              Contacter un conseiller
            </motion.button>
          </div>

          {/* Subtle floating dots */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                className="w-1 h-1 rounded-full bg-blue-500/30"
              />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CoffretDisplayPage;