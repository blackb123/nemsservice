import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { coffretProduct } from '../data/sitedata'; 

interface Pack {
  name: string;
  ref: string;
  details: string;
  colors: string[];
  includes: string[];
  image: string;
}

interface CoffretGroup {
  id: number;
  name: string;
  category: string;
  tagline: string;
  packs: Pack[];
}

interface CoffretContextType {
  allCoffrets: CoffretGroup[];
  selectedPack: CoffretGroup | null; 
  setSelectedPack: (pack: CoffretGroup | null) => void;
  getCategoryByName: (name: string) => CoffretGroup | undefined;
}

const CoffretContext = createContext<CoffretContextType | undefined>(undefined);

export const CoffretProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  //  Initialisation avec récupération depuis le localStorage
  const [selectedPack, setSelectedPack] = useState<CoffretGroup | null>(() => {
    const savedPack = localStorage.getItem('nem_selected_pack');
    return savedPack ? JSON.parse(savedPack) : null;
  });

  // Fonction setter qui sauvegarde aussi dans le localStorage
  const updateSelectedPack = (pack: CoffretGroup | null) => {
    setSelectedPack(pack);
    if (pack) {
      localStorage.setItem('nem_selected_pack', JSON.stringify(pack));
    } else {
      localStorage.removeItem('nem_selected_pack');
    }
  };

  const getCategoryByName = (name: string) => {
    return coffretProduct.find((item: CoffretGroup) => item.name === name);
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