import React from 'react';
import { SEO } from '../components/SEO';

function ImpressionCameroun() {
  return (
    <>
      <SEO
        title="Service d'Impression au Cameroun | Nem's Service"
        description="Service d'impression professionnelle au Cameroun. Nem's Service offre des solutions d'impression de haute qualité à Yaoundé, Douala et dans tout le pays."
        keywords="impression cameroun, service d'impression cameroun, impression professionnelle cameroun"
        url="https://nemsservices.com/impression-cameroun"
        type="website"
      />
      
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service d'Impression Professionnelle au Cameroun
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Nem's Service est votre partenaire de confiance pour tous vos besoins d'impression au Cameroun. 
            Nous proposons des services d'impression de haute qualité à Yaoundé, Douala et dans toute la région.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nos Services d'Impression
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Impression de documents administratifs</li>
              <li>• Impression de cartes de visite</li>
              <li>• Impression de flyers et affiches</li>
              <li>• Impression de brochures et catalogues</li>
              <li>• Impression grand format</li>
              <li>• Impression sur divers supports</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Nem's Service ?
            </h2>
            <p className="text-gray-700 mb-4">
              Avec des années d'expérience dans le secteur de l'impression au Cameroun, nous comprenons 
              les besoins spécifiques des entreprises et des particuliers. Notre engagement envers la qualité 
              et le service client nous distingue de nos concurrents.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Zones de Service
            </h2>
            <p className="text-gray-700">
              Nous servons principalement Yaoundé et Douala, mais nos services sont également disponibles 
              dans d'autres villes du Cameroun. Contactez-nous pour en savoir plus sur notre couverture géographique.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contactez-Nous
            </h2>
            <p className="text-gray-700 mb-4">
              Besoin d'un devis pour votre projet d'impression ? Contactez Nem's Service dès aujourd'hui.
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

export default ImpressionCameroun;
