import React, { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi'; // Assurez-vous d'avoir react-icons
import { useLocation } from "react-router-dom";

export default function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Gérer la visibilité du bouton au défilement
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Défilement fluide
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[150]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl transition-all duration-300 animate-bounce active:scale-90"
          aria-label="Retour en haut"
        >
          <FiChevronUp size={24} />
        </button>
      )}
    </div>
  );
};
