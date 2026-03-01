import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { coffretProduct } from '../data/sitedata'; 

interface CoffretContextType {
  allCoffrets: typeof coffretProduct;
  selectedPack: any | null; 
  setSelectedPack: (pack: any) => void;
  getCategoryByName: (name: string) => any;
}

const CoffretContext = createContext<CoffretContextType | undefined>(undefined);

export const CoffretProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1. Initialisation avec récupération depuis le localStorage
  const [selectedPack, setSelectedPack] = useState<any | null>(() => {
    const savedPack = localStorage.getItem('nem_selected_pack');
    return savedPack ? JSON.parse(savedPack) : null;
  });

  // Fonction setter qui sauvegarde aussi dans le localStorage
  const updateSelectedPack = (pack: any) => {
    setSelectedPack(pack);
    if (pack) {
      localStorage.setItem('nem_selected_pack', JSON.stringify(pack));
    } else {
      localStorage.removeItem('nem_selected_pack');
    }
  };

  const getCategoryByName = (name: string) => {
    return coffretProduct.find((item) => item.name === name);
  };

  const value = {
    allCoffrets: coffretProduct,
    selectedPack,
    setSelectedPack: updateSelectedPack, // On utilise la fonction qui sauvegarde
    getCategoryByName,
  };

  return (
    <CoffretContext.Provider value={value}>
      {children}
    </CoffretContext.Provider>
  );
};

export const useCoffrets = () => {
  const context = useContext(CoffretContext);
  if (!context) {
    throw new Error('useCoffrets must be used within a CoffretProvider');
  }
  return context;
};