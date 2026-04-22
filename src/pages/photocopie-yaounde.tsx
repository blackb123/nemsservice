import React from 'react';
import { SEO } from '../components/SEO';

function PhotocopieYaounde() {
  return (
    <>
      <SEO
        title="Service de Photocopie à Yaoundé | Nem's Service"
        description="Service de photocopie professionnel à Yaoundé. Nem's Service offre des solutions de photocopie rapide et de haute qualité."
        keywords="photocopie yaoundé, service de photocopie yaoundé, photocopie professionnelle yaoundé"
        url="https://nemsservices.com/photocopie-yaounde"
        type="website"
      />
      
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service de Photocopie Professionnelle à Yaoundé
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Nem's Service propose un service de photocopie rapide et de haute qualité à Yaoundé. 
            Que ce soit pour des documents personnels ou professionnels, nous répondons à tous vos besoins.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nos Services de Photocopie
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Photocopie noir et blanc</li>
              <li>• Photocopie couleur</li>
              <li>• Photocopie recto-verso</li>
              <li>• Photocopie de documents administratifs</li>
              <li>• Photocopie de thèses et mémoires</li>
              <li>• Photocopie en gros volume</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Notre Service de Photocopie ?
            </h2>
            <p className="text-gray-700 mb-4">
              Nous utilisons des équipements modernes pour garantir une qualité optimale de vos photocopies. 
              Notre équipe à Yaoundé assure un service rapide et attentionné pour tous vos projets.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contactez-Nous
            </h2>
            <p className="text-gray-700 mb-4">
              Besoin d'un devis pour vos photocopies à Yaoundé ?
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

export default PhotocopieYaounde;
