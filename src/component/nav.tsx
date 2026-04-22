import React, { useState } from 'react';
import { FiSearch, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from "../assets/logo_nems.webp";
import { useCoffrets } from '../provider/coffreprovider'; 
import { useCategory } from '../provider/categoryprovider';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // On récupère selectedPack pour différencier les catégories qui partagent le même lien /coffrets
  const { setSelectedPack, selectedPack, allCoffrets } = useCoffrets();
  const { setCategory } = useCategory();

  const mainLinks = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
  ];

  const navCategories = [
    { name: "Tous nos produits", type: 'ALL', path: "/products" },
    { name: "Gifts Pack", type: 'COFFRET', filter: "COFFRETS 02 PIÈCES", path: "/coffrets" },
    { name: "Écriture & Bureau", type: 'COFFRET', filter: "NOTEBOOK / CONFÉRENCIER", path: "/coffrets" }
  ];

  const handleNavigation = (cat: any) => {
    if (cat.type === 'ALL') {
      setCategory('All'); 
      setSelectedPack(null); 
      navigate('/products');
    } 
    else if (cat.type === 'COFFRET') {
      if (cat.name === "Gifts Pack") {
        setSelectedPack(null); 
      } else {
        const found = allCoffrets.find(
          (c) => c.name.toUpperCase() === cat.filter.toUpperCase()
        );
        setSelectedPack(found || null);
      }
      navigate('/coffrets');
    }
    setIsOpen(false);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 font-sans sticky top-0 z-[100] shadow-sm">
      
      {/* --- Top Bar --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-24 flex items-center justify-between gap-6 md:gap-8">
        <button onClick={() => setIsOpen(true)} className="md:hidden text-gray-800 p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
          <FiMenu size={28} />
        </button>

        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Nem's Service" className="h-10 md:h-16 w-auto object-contain" />
        </Link>

        {/* Search Bar Desktop */}
        <div className="hidden md:flex flex-grow max-w-md relative">
          <input 
            type="text" 
            placeholder="Rechercher un article..." 
            className="w-full bg-gray-100 border border-gray-200 rounded-lg py-3 px-6 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
          <FiSearch className="absolute right-5 top-3.5 text-gray-500" size={20} />
        </div>

        <div className="flex items-center gap-6 text-gray-700">
          <FiUser size={24} className="cursor-pointer hover:text-blue-600 transition-colors" />
        </div>
      </div>

      {/* --- Desktop Navigation (Fix pour états actifs) --- */}
      <nav className="hidden md:block border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-10">
            {/* Liens principaux (Accueil, À propos) */}
            {mainLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`relative py-5 text-sm font-semibold uppercase tracking-wide transition-all ${
                    isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-1 bg-blue-600 transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`} />
                </Link>
              );
            })}

            <div className="h-6 w-px bg-gray-300 mx-2"></div>

            {/* Catégories de produits */}
            {navCategories.map((cat) => {
              let isActive = false;
              
              if (cat.type === 'ALL') {
                isActive = location.pathname === cat.path;
              } else if (cat.type === 'COFFRET') {
                const isOnCoffretPage = location.pathname === '/coffrets';
                if (cat.name === "Gifts Pack") {
                  // Actif si on est sur la page coffret ET qu'aucun pack spécifique n'est sélectionné
                  isActive = isOnCoffretPage && !selectedPack;
                } else {
                  // Actif si on est sur la page coffret ET que le pack actuel correspond au filtre
                  isActive = isOnCoffretPage && selectedPack?.name.toUpperCase() === cat.filter?.toUpperCase();
                }
              }

              return (
                <button 
                  key={cat.name} 
                  onClick={() => handleNavigation(cat)}
                  className={`relative py-5 text-sm uppercase tracking-wide transition-all group ${
                    isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-gray-900 font-medium"
                  }`}
                >
                  {cat.name}
                  <span className={`absolute bottom-0 left-0 w-full h-1 bg-blue-600 transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                  }`} />
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* --- Mobile Full-Width Dropdown Menu (Top to Bottom) --- */}
      <div 
        className={`fixed inset-0 z-[120] bg-white transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:hidden`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile Header in Menu */}
          <div className="flex justify-between items-center px-6 h-20 border-b border-gray-200">
            <img src={logo} alt="logo" className="h-10" />
            <button onClick={() => setIsOpen(false)} className="text-gray-800 p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
              <FiX size={32} />
            </button>
          </div>

          {/* Mobile Links Container */}
          <div className="px-8 py-12 flex flex-col gap-10 text-left">
            <div className="space-y-8">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">Navigation</p>
              {mainLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className="block text-2xl font-medium text-gray-900 tracking-tight hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="w-16 h-px bg-gray-300"></div>

            <div className="space-y-8">
              <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-6">Catalogue</p>
              {navCategories.map(cat => (
                <button 
                  key={cat.name} 
                  onClick={() => handleNavigation(cat)} 
                  className="block w-full text-left text-2xl font-medium text-gray-800 tracking-tight hover:text-blue-600 transition-colors"
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Mobile Footer Area */}
            <div className="mt-12 pt-12 border-t border-gray-200">
               <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Besoin d'aide ?" 
                    className="w-full bg-gray-100 border border-gray-200 rounded-lg py-3 px-5 text-base outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FiSearch className="absolute right-5 top-3.5 text-gray-500" size={20} />
               </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
