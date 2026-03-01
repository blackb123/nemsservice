import React, { useEffect } from 'react';
import { useCoffrets } from '../provider/coffreprovider';
import { FiArrowRight, FiPackage,FiDroplet } from 'react-icons/fi';

const CoffretDisplayPage: React.FC = () => {
  const { allCoffrets, selectedPack } = useCoffrets();

  // Scroll en haut de page lors de l'entrée
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const displayGroups = selectedPack 
    ? allCoffrets.filter(group => group.name === selectedPack.name || group.id === selectedPack.id)
    : allCoffrets;

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER SECTION */}
      <header className="relative py-20 bg-[#f9f9f9] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block animate-fadeIn">
            NEM'S Services - Collection 2024
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight">
            {selectedPack ? selectedPack.name : "Le Catalogue Prestige"}
          </h1> 
          <p className="max-w-2xl mx-auto text-gray-500 text-lg font-light leading-relaxed">
            {selectedPack?.tagline || "Découvrez notre sélection exclusive d'objets publicitaires et coffrets cadeaux conçus pour marquer l'esprit de vos partenaires."}
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-20">
        {displayGroups.map((group) => (
          <div key={group.id} className="mb-32 last:mb-0">
            {/* CATEGORY TITLES (Only if showing all) */}
            {!selectedPack && (
              <div className="flex items-center gap-4 mb-16">
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400 whitespace-nowrap">
                  {group.name}
                </h2>
                <div className="h-[1px] bg-gray-100 w-full"></div>
              </div>
            )}

            <div className="space-y-32">
              {group.packs.map((pack, index) => (
                <section 
                  key={pack.ref} 
                  className={`flex flex-col md:flex-row gap-16 items-center group ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* LEFT: IMAGE WITH STYLED BACKGROUND */}
                  <div className="w-full md:w-1/2 relative">
                    <div className="absolute inset-0 bg-[#f4f2f0] rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-700 ease-out"></div>
                    <div className="relative z-10  ">
                      <img 
                        src={pack.image} 
                        alt={pack.name} 
                        className="w-full h-auto object-cover drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:translate-y-[-10px] transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* RIGHT: ELEGANT INFO */}
                  <div className="w-full md:w-1/2 space-y-8">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="h-[1px] w-8 bg-blue-600"></span>
                        <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">{pack.ref}</span>
                      </div>
                      <h3 className="text-4xl font-bold text-gray-900 leading-none tracking-tighter">
                        {pack.name}
                      </h3>
                    </div>

                    <p className="text-gray-500 text-xl font-light leading-relaxed border-l-2 border-gray-100 pl-6 italic">
                      {pack.details}
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 bg-black p-2 rounded-lg text-white">
                          <FiPackage size={16} />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm uppercase tracking-wider text-gray-900 mb-2">Composition du coffret</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                            {pack.includes.map((item, i) => (
                              <li key={i} className="text-gray-500 text-sm flex items-center gap-2">
                                <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {pack.colors && (
                        <div className="flex items-start gap-4">
                          <div className="mt-1 bg-black p-2 rounded-lg text-white">
                            <FiDroplet size={16} ></FiDroplet>
                          </div>
                          <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-900 mb-2">Finitions disponibles</h4>
                            <div className="flex flex-wrap gap-2">
                              {pack.colors.map(color => (
                                <span key={color} className="px-3 py-1 bg-gray-50 text-[10px] font-bold rounded border border-gray-200 text-gray-600 uppercase tracking-tighter">
                                  {color}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-6">
                      <button className="group/btn relative px-10 py-4 bg-black overflow-hidden rounded-full transition-all hover:pr-14">
                        <span className="relative z-10 text-white text-sm font-bold uppercase tracking-widest">
                          Demander un Devis
                        </span>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/btn:opacity-100 transition-all text-white">
                          <FiArrowRight size={20} />
                        </div>
                      </button>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER CALL TO ACTION */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Besoin d'un accompagnement sur mesure ?</h2>
          <p className="text-gray-400 mb-10 font-light">Nos experts vous conseillent sur la personnalisation de vos produits pour un impact maximal.</p>
          <button className="px-12 py-4 border border-white/20 hover:bg-white hover:text-black transition-all rounded-full font-bold uppercase text-xs tracking-[0.2em]">
            Contactez un conseiller
          </button>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CoffretDisplayPage;