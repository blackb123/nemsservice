import React, { useEffect } from 'react';
import ProductSection from '../section/productpage/productsection';
import { product } from '../data/sitedata'; 
import { useCategory } from '../provider/categoryprovider'; 
import { FiChevronRight, FiLayers, FiInfo } from 'react-icons/fi';

const ProductPage: React.FC = () => {
  const { activeCategory } = useCategory();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  const filteredProducts = activeCategory === 'All' 
    ? product 
    : product.filter(p => p.category === activeCategory);

  return (
    <main className="mt-[80px] min-h-screen bg-[#F8FAFC]">
      
      {/* --- HERO SECTION: Human & Editorial --- */}
      <section className="relative bg-[#020617] pt-32 pb-40 overflow-hidden">
        {/* Subtile Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[1px] w-12 bg-blue-500" />
                <span className="text-blue-400 text-xs font-black uppercase tracking-[0.4em]">
                  Division Corporate
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-[ -0.04em] leading-none">
                {activeCategory}
              </h1>
              
              <p className="max-w-xl text-slate-400 text-lg md:text-xl font-light leading-relaxed">
                L'ingénierie au service de l'image. Découvrez des solutions de communication rigoureusement sélectionnées pour leur <span className="text-white font-medium">impact institutionnel</span> et leur durabilité.
              </p>
            </div>

            {/* Info Box - Adding the "Human/Expert" touch */}
            <div className="hidden lg:block border-l border-white/10 pl-12 pb-4">
              <div className="flex items-start gap-4 mb-6">
                <FiInfo className="text-blue-500 mt-1" size={20} />
                <p className="text-sm text-slate-400 italic">
                  "Chaque support est testé pour répondre aux standards de qualité Nem's Service avant d'intégrer notre catalogue premium."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" alt="Directeur Qualité" className="grayscale hover:grayscale-0 transition-all cursor-crosshair" />
                </div>
                <div>
                    <p className="text-xs font-bold text-white">Responsable Production</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Nem's Service Cameroon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NAVIGATION / BREADCRUMB: Serious & Professional --- */}
      <div className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Breadcrumb Path */}
          <nav className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest">
            <a href="/" className="text-slate-400 hover:text-blue-600 transition">Accueil</a>
            <FiChevronRight className="text-slate-300" />
            <span className="text-slate-400">Catalogue</span>
            <FiChevronRight className="text-slate-300" />
            <span className="text-blue-600">{activeCategory}</span>
          </nav>

          {/* Catalog Counter */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-100 rounded-full">
              <FiLayers className="text-slate-500" size={14} />
              <span className="text-xs font-bold text-slate-700">
                {filteredProducts.length} <span className="text-slate-400 font-medium">Références</span>
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="max-w-7xl mx-auto px-6 ">
        {filteredProducts.length > 0 ? (
          <div className="space-y-32">
            {filteredProducts.map((item, index) => (
              <div key={index} className="relative">
                {/* Visual indicator for catalog flow */}
                <div className="absolute -left-12 top-0 h-full w-[1px] bg-slate-200 hidden xl:block">
                    <div className="sticky top-[200px] w-3 h-3 -left-[6px] bg-blue-600 rounded-full shadow-lg shadow-blue-200" />
                </div>
                
                <ProductSection 
                  index={index} 
                  {...item} 
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-40 text-center bg-white rounded-3xl border border-slate-100 shadow-sm">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-slate-50 border border-slate-100 mb-8">
              <FiLayers className="text-slate-300" size={40} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Inventaire en cours</h3>
            <p className="text-slate-500 mt-4 max-w-sm mx-auto font-light">
              Nos équipes finalisent la sélection des meilleures références pour cette catégorie.
            </p>
          </div>
        )}
      </div>

      {/* CTA Bottom Section: Corporate & Trust */}
      <section className="bg-white border-t border-slate-100 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 mb-6 border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            Assistance Professionnelle
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">
            Prêt à transformer votre communication ?
          </h2>
          <p className="text-slate-500 mb-12 text-xl font-light leading-relaxed">
            Profitez d'un accompagnement personnalisé pour vos projets institutionnels. 
            Nos experts vous répondent sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#020617] text-white px-12 py-5 rounded-lg font-bold hover:bg-blue-600 transition-all duration-300 shadow-2xl shadow-slate-200">
              Demander un devis expert
            </button>
            <button className="bg-white text-slate-900 border border-slate-200 px-12 py-5 rounded-lg font-bold hover:bg-slate-50 transition-all">
              Parler à un conseiller
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ProductPage;