import React from 'react';
import { FiSearch, FiMessageSquare, FiZap } from 'react-icons/fi';

const TrustBar: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white border-y border-gray-200 py-16 md:py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        
        {/* Étape 1 : Recherche */}
        <div className="flex flex-col items-start gap-6 md:gap-5 p-6 md:p-0">
          <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-sm">
            <FiSearch size={36} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">Trouvez votre produit</h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">Explorez notre catalogue complet et trouvez le support idéal pour votre marque.</p>
          </div>
        </div>

        {/* Étape 2 : Contact */}
        <div className="flex flex-col items-start gap-6 md:gap-5 p-6 md:p-0 md:border-x border-gray-300">
          <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shadow-sm">
            <FiMessageSquare size={36} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">Concrétisons l&apos;accord</h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">Contactez-nous directement pour finaliser votre devis entièrement sur mesure.</p>
          </div>
        </div>

        {/* Étape 3 : Livraison */}
        <div className="flex flex-col items-start gap-6 md:gap-5 p-6 md:p-0">
          <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-sm">
            <FiZap size={36} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">Livraison ultra-rapide</h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">Détendez-vous pendant que nous imprimons et livrons vos commandes en temps record.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustBar;
