import React from 'react';
import { SEO } from '../components/SEO';

function ImpressionDouala() {
  return (
    <>
      <SEO
        title="Service d'Impression à Douala | Nem's Service"
        description="Service d'impression professionnelle à Douala. Nem's Service offre des solutions d'impression de haute qualité dans la capitale économique du Cameroun."
        keywords="impression douala, service d'impression douala, impression professionnelle douala"
        url="https://nemsservices.com/impression-douala"
        type="website"
      />
      
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service d'Impression Professionnelle à Douala
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Nem's Service offre des services d'impression professionnels à Douala, la capitale économique 
            du Cameroun. Nous servons les entreprises, les institutions et les particuliers avec des solutions 
            d'impression de haute qualité adaptées à vos besoins.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nos Services d'Impression à Douala
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Impression de documents administratifs</li>
              <li>• Cartes de visite professionnelles</li>
              <li>• Marketing : flyers, affiches, brochures</li>
              <li>• Catalogues et présentations</li>
              <li>• Impression grand format</li>
              <li>• Documents d'entreprise</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Nem's Service à Douala ?
            </h2>
            <p className="text-gray-700 mb-4">
              Notre équipe à Douala comprend les besoins des entreprises dans la capitale économique. 
              Nous offrons un service rapide, fiable et personnalisé pour tous vos projets d'impression.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contactez-Nous à Douala
            </h2>
            <p className="text-gray-700 mb-4">
              Besoin d'un devis ou d'informations sur nos services d'impression à Douala ?
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

export default ImpressionDouala;
