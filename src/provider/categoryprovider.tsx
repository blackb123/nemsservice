import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface CategoryContextType {
  activeCategory: string;
  setCategory: (category: string) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1. Initialiser l'état avec la valeur stockée dans le localStorage (si elle existe)
  // Sinon, utiliser 'All' par défaut
  const [activeCategory, setActiveCategory] = useState<string>(() => {
    const saved = localStorage.getItem('selected_category');
    return saved ? saved : 'All';
  });

  // 2. Chaque fois que la catégorie change, on l'enregistre dans le localStorage
  const setCategory = (category: string) => {
    setActiveCategory(category);
    localStorage.setItem('selected_category', category);
  };

  return (
    <CategoryContext.Provider value={{ activeCategory, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return context;
};