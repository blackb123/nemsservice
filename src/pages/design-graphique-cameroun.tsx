import React from 'react';
import { SEO } from '../components/SEO';

function DesignGraphiqueCameroun() {
  return (
    <>
      <SEO
        title="Design Graphique au Cameroun | Nem's Service"
        description="Services de design graphique au Cameroun. Nem's Service propose des solutions de design professionnel pour vos projets visuels."
        keywords="design graphique cameroun, service design cameroun, création graphique cameroun"
        url="https://nemsservices.com/design-graphique-cameroun"
        type="website"
      />
      
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services de Design Graphique au Cameroun
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Nem's Service propose des services de design graphique professionnel au Cameroun. 
            Nous créons des visuels impactants pour vos entreprises, vos marques et vos projets personnels.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nos Services de Design Graphique
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Création de logos</li>
              <li>• Design de cartes de visite</li>
              <li>• Flyers et affiches</li>
              <li>• Brochures et catalogues</li>
              <li>• Design de bannières</li>
              <li>• Identité visuelle</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Nos Services de Design ?
            </h2>
            <p className="text-gray-700 mb-4">
              Notre équipe de designers créatifs comprend les besoins des entreprises camerounaises. 
              Nous créons des designs modernes et professionnels qui vous démarquent de la concurrence.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contactez-Nous
            </h2>
            <p className="text-gray-700 mb-4">
              Besoin d'un devis pour vos projets de design graphique au Cameroun ?
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

export default DesignGraphiqueCameroun;
