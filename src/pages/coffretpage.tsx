import React, { useEffect } from 'react';
import { useCoffrets } from '../provider/coffreprovider';
import { FiArrowRight, FiPackage, FiDroplet } from 'react-icons/fi';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const CoffretDisplayPage: React.FC = () => {
  const { allCoffrets, selectedPack } = useCoffrets();

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

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* HEADER SECTION */}
      <header className="relative py-20 bg-[#f9f9f9] border-b border-gray-100 overflow-hidden">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="max-w-7xl mx-auto px-4 text-center relative z-10"
        >
          <motion.span variants={fadeInUp} className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
            NEM'S Services - Collection 2024
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight">
            {selectedPack ? selectedPack.name : "Le Catalogue Prestige"}
          </motion.h1> 
          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-gray-500 text-lg font-light leading-relaxed">
            {selectedPack?.tagline || "Découvrez notre sélection exclusive d'objets publicitaires et coffrets cadeaux."}
          </motion.p>
        </motion.div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-20">
        {displayGroups.map((group) => (
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
                      <button className="group/btn relative px-10 py-4 bg-black overflow-hidden rounded-full transition-all hover:pr-14">
                        <span className="relative z-10 text-white text-sm font-bold uppercase tracking-widest">
                          Demander un Devis
                        </span>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/btn:opacity-100 transition-all text-white">
                          <FiArrowRight size={20} />
                        </div>
                      </button>
                    </motion.div>
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER CALL TO ACTION */}
      <section className="bg-black py-20 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-6">Besoin d'un accompagnement sur mesure ?</h2>
          <p className="text-gray-400 mb-10 font-light">Nos experts vous conseillent sur la personnalisation.</p>
          <button className="px-12 py-4 border border-white/20 hover:bg-white hover:text-black transition-all rounded-full font-bold uppercase text-xs tracking-[0.2em]">
            Contactez un conseiller
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default CoffretDisplayPage;