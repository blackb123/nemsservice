import React from 'react';
import { SEO } from '../components/SEO';

function ReliureCameroun() {
  return (
    <>
      <SEO
        title="Service de Reliure au Cameroun | Nem's Service"
        description="Service de reliure professionnelle au Cameroun. Nem's Service offre des solutions de reliure de haute qualité pour vos documents."
        keywords="reliure cameroun, service de reliure cameroun, reliure professionnelle cameroun"
        url="https://nemsservices.com/reliure-cameroun"
        type="website"
      />
      
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service de Reliure Professionnelle au Cameroun
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Nem's Service propose un service de reliure de haute qualité au Cameroun. 
            Que ce soit pour des thèses, des mémoires, des rapports ou des documents d'entreprise, 
            nous avons la solution adaptée à vos besoins.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nos Services de Reliure
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Reliure spirale</li>
              <li>• Reliure thermique</li>
              <li>• Reliure à anneaux</li>
              <li>• Reliure cousue</li>
              <li>• Reliure de thèses et mémoires</li>
              <li>• Reliure de documents administratifs</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Notre Service de Reliure ?
            </h2>
            <p className="text-gray-700 mb-4">
              Nous utilisons des matériaux de qualité et des techniques professionnelles pour garantir 
              la durabilité de vos documents reliés. Notre équipe assure un service soigné et rapide.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contactez-Nous
            </h2>
            <p className="text-gray-700 mb-4">
              Besoin d'un devis pour vos projets de reliure au Cameroun ?
            </p>
            <a 
              href="https://wa.me/237671810319" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactez-nous sur WhatsApp
            </a>
          </section>
        </div>
      </main>
    </>
  );
}

export default ReliureCameroun;
