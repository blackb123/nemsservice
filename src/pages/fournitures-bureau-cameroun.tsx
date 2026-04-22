import React from 'react';
import { SEO } from '../components/SEO';

function FournituresBureauCameroun() {
  return (
    <>
      <SEO
        title="Fournitures de Bureau au Cameroun | Nem's Service"
        description="Fournitures de bureau au Cameroun. Nem's Service propose une large gamme de fournitures de bureau et articles de bureau à Yaoundé et Douala."
        keywords="fournitures bureau cameroun, articles bureau cameroun, fournitures scolaires cameroun"
        url="https://nemsservices.com/fournitures-bureau-cameroun"
        type="website"
      />
      
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fournitures de Bureau au Cameroun
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Nem's Service propose une large gamme de fournitures de bureau au Cameroun. 
            Nous servons les entreprises, les institutions et les particuliers avec des produits 
            de qualité pour répondre à tous vos besoins bureautiques.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nos Fournitures de Bureau
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Papier et cahiers</li>
              <li>• Stylos et crayons</li>
              <li>• Classeurs et dossiers</li>
              <li>• Enveloppes et étiquettes</li>
              <li>• Agrafeuses et accessoires</li>
              <li>• Matériel de dessin</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Nos Fournitures ?
            </h2>
            <p className="text-gray-700 mb-4">
              Nous proposons des produits de qualité à des prix compétitifs. Notre équipe 
              sélectionne soigneusement chaque article pour garantir votre satisfaction.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contactez-Nous
            </h2>
            <p className="text-gray-700 mb-4">
              Besoin d'informations sur nos fournitures de bureau au Cameroun ?
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

export default FournituresBureauCameroun;
