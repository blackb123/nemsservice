import React from 'react';
import { SEO } from '../components/SEO';

function ImpressionYaounde() {
  return (
    <>
      <SEO
        title="Service d'Impression à Yaoundé | Nem's Service"
        description="Service d'impression professionnelle à Yaoundé. Nem's Service offre des solutions d'impression de haute qualité dans la capitale camerounaise."
        keywords="impression yaoundé, service d'impression yaoundé, impression professionnelle yaoundé"
        url="https://nemsservices.com/impression-yaounde"
        type="website"
      />
      
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service d'Impression Professionnelle à Yaoundé
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Situé au cœur de Yaoundé, Nem's Service est votre partenaire de confiance pour tous vos besoins 
            d'impression. Nous servons les entreprises, les institutions et les particuliers avec des solutions 
            d'impression de haute qualité.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nos Services d'Impression à Yaoundé
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Impression de documents administratifs</li>
              <li>• Impression de cartes de visite professionnelles</li>
              <li>• Flyers et affiches promotionnels</li>
              <li>• Brochures et catalogues</li>
              <li>• Impression grand format</li>
              <li>• Bureautique et documents d'entreprise</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Nem's Service à Yaoundé ?
            </h2>
            <p className="text-gray-700 mb-4">
              Notre équipe locale comprend les besoins spécifiques des entreprises yaoundéennes. 
              Nous offrons un service rapide, fiable et personnalisé pour tous vos projets d'impression.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contactez-Nous à Yaoundé
            </h2>
            <p className="text-gray-700 mb-4">
              Besoin d'un devis ou d'informations sur nos services d'impression à Yaoundé ?
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

export default ImpressionYaounde;
