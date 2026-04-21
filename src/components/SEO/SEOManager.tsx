import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  schema?: object;
}

const DEFAULT_SEO = {
  title: "Nem's Service | Premier Service d'Impression et Design au Cameroun",
  description: "Nem's Service - N°1 du service d'impression et design au Cameroun. Leader en impression professionnelle, design graphique et articles de bureau à Yaoundé, Douala et dans toute l'Afrique centrale.",
  keywords: "impression cameroun, design cameroun, service d'impression n°1 cameroun, impression professionnelle Yaoundé, impression Douala, design graphique cameroun, articles bureau, fournitures scolaires, photocopie, reliure, leader impression Afrique centrale, nems services, nems service, nem's services, nem's service, nems, nem's, nems impression, nems printing, nems bureau, nems articles, nems cameroun, nems yaoundé, nems douala, nems services cameroun, nems printing cameroun, nems impression cameroun, nems services yaoundé, nems services douala, nems office supplies, nems fournitures, nems photocopie, nems reliure, nems documents, nems services impression, nems services design, nems services bureau, nems services articles",
  image: "https://nemsservices.com/logo_nems.webp",
  url: "https://nemsservices.com",
  type: "website" as const,
};

export function useSEO({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  image = DEFAULT_SEO.image,
  url,
  type = DEFAULT_SEO.type,
  noindex = false,
  schema,
}: SEOProps = {}) {
  const location = useLocation();
  const canonicalUrl = url || `https://nemsservices.com${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to update or create meta tag
    const setMetaTag = (name: string, content: string, property = false) => {
      let meta = document.querySelector(property ? `meta[property="${name}"]` : `meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Helper to update or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Standard Meta Tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Canonical URL
    setLinkTag('canonical', canonicalUrl);

    // Open Graph Tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:site_name', "Nem's Service", true);
    setMetaTag('og:locale', 'fr_FR', true);

    // Twitter Cards
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add Schema.org structured data
    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: "Nem's Service",
      description: "N°1 du service d'impression et design au Cameroun. Leader en impression professionnelle, design graphique et articles de bureau à Yaoundé, Douala et Afrique centrale.",
      url: 'https://nemsservices.com',
      telephone: '+237671810319',
      email: 'contact@nemsservices.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CM',
        addressLocality: 'Yaoundé',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '3.8480',
        longitude: '11.5021',
      },
      openingHours: 'Mo-Fr 08:00-18:00',
      priceRange: '€€',
      image: 'https://nemsservices.com/logo_nems.webp',
    };

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(schema || defaultSchema);
    document.head.appendChild(schemaScript);

    // Cleanup function
    return () => {
      // Note: We don't remove these on unmount as it can cause flickering
      // The next page will update them
    };
  }, [title, description, keywords, image, canonicalUrl, type, noindex, schema]);
}

// Component wrapper for declarative usage
export function SEO(props: SEOProps) {
  useSEO(props);
  return null;
}

export default SEO;
