import React from 'react';
import { FiSearch, FiMessageSquare, FiZap } from 'react-icons/fi';

const TrustBar: React.FC = () => {
  return (
    <section className="w-full bg-white border-y border-gray-100 py-10 px-4 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
        
        {/* Étape 1 : Recherche */}
        <div className="flex items-center gap-5 px-4">
          <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
            <FiSearch size={30} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 leading-tight">Trouvez votre produit</h3>
            <p className="text-sm text-gray-600 mt-1">Explorez notre catalogue et trouvez le support idéal pour votre marque.</p>
          </div>
        </div>

        {/* Étape 2 : Contact */}
        <div className="flex items-center gap-5 px-4 border-y md:border-y-0 md:border-x border-gray-100 py-8 md:py-0">
          <div className="flex-shrink-0 w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-[#f4901e]">
            <FiMessageSquare size={30} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 leading-tight">Concrétisons l'accord</h3>
            <p className="text-sm text-gray-600 mt-1">Contactez-nous directement pour finaliser votre devis sur mesure.</p>
          </div>
        </div>

        {/* Étape 3 : Livraison */}
        <div className="flex items-center gap-5 px-4">
          <div className="flex-shrink-0 w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600">
            <FiZap size={30} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 leading-tight">Livraison ultra-rapide</h3>
            <p className="text-sm text-gray-600 mt-1">Détendez-vous pendant que nous imprimons et livrons vos commandes en un temps record.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustBar;