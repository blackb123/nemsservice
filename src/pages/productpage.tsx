import React, { useEffect } from 'react';
import ProductSection from '../section/productpage/productsection';
import { product } from '../data/sitedata'; 
import { useCategory } from '../provider/categoryprovider'; 

const ProductPage: React.FC = () => {
  const { activeCategory } = useCategory();

  // Smooth scroll to top when category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  const filteredProducts = activeCategory === 'All' 
    ? product 
    : product.filter(p => p.category === activeCategory);

  return (
    <main className="mt-[80px] min-h-screen bg-slate-50">
      
      {/* --- HERO SECTION --- */}
      <div className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] animate-pulse" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
              Solutions Premium
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              {activeCategory}
            </h1>
            <div className="h-1.5 w-24 bg-blue-600 rounded-full mb-8" />
            <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed">
              Explorez notre séléction de supports {activeCategory.toLowerCase()} conçus pour maximiser votre impact visuel et booster votre présence commerciale.
            </p>
          </div>
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-12 pb-24">
        
        {/* Stats / Breadcrumb Bar */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-4 mb-12 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="hover:text-blue-600 cursor-pointer transition">Accueil</span>
            <span>/</span>
            <span className="font-semibold text-slate-900">Produits</span>
            <span>/</span>
            <span className="text-blue-600 font-medium">{activeCategory}</span>
          </div>
          <div className="text-sm font-medium text-slate-700">
            Affichage de <span className="text-blue-600">{filteredProducts.length}</span> solutions professionnelles
          </div>
        </div>

        {/* --- PRODUCTS LOOP --- */}
        {filteredProducts.length > 0 ? (
          <div className="space-y-12 md:space-y-24">
            {filteredProducts.map((item, index) => (
              <div 
                key={index} 
                className="group reveal-on-scroll"
              >
                <ProductSection 
                  index={index} 
                  {...item} 
                />
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-32 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-6">
              <span className="text-3xl">📦</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Aucun produit trouvé</h3>
            <p className="text-slate-500 mt-2">Nous mettons à jour cette catégorie très bientôt.</p>
          </div>
        )}
      </div>

      {/* CTA Bottom Section */}
      <section className="bg-white border-t border-slate-200 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Besoin d'un devis sur mesure ?</h2>
          <p className="text-slate-600 mb-10 text-lg">
            Nos experts sont disponibles pour vous accompagner dans le choix de vos supports de communication.
          </p>
          <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-slate-200">
            Contactez un Conseiller
          </button>
        </div>
      </section>

    </main>
  );
};

export default ProductPage;