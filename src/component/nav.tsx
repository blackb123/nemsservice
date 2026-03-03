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
    <header className="w-full bg-white border-b border-gray-100 font-sans sticky top-0 z-[100] shadow-sm">
      
      {/* --- Top Bar --- */}
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between gap-8">
        <button onClick={() => setIsOpen(true)} className="md:hidden text-gray-800 p-1">
          <FiMenu size={24} />
        </button>

        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Nem's Service" className="h-9 md:h-14 w-auto object-contain" />
        </Link>

        {/* Search Bar Desktop */}
        <div className="hidden md:flex flex-grow max-w-md relative">
          <input 
            type="text" 
            placeholder="Rechercher un article..." 
            className="w-full bg-gray-50 border-none rounded-full py-2 px-5 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
          />
          <FiSearch className="absolute right-4 top-2.5 text-gray-400" size={18} />
        </div>

        <div className="flex items-center gap-4 text-gray-600">
          <FiUser size={22} className="cursor-pointer hover:text-blue-600 transition-colors" />
        </div>
      </div>

      {/* --- Desktop Navigation (Fix pour états actifs) --- */}
      <nav className="hidden md:block border-t border-gray-50 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-8">
            {/* Liens principaux (Accueil, À propos) */}
            {mainLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`relative py-4 text-[11px] font-bold uppercase tracking-widest transition-all ${
                    isActive ? "text-blue-600" : "text-gray-900 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`} />
                </Link>
              );
            })}

            <div className="h-4 w-[1px] bg-gray-200 mx-2"></div>

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
                  className={`relative py-4 text-[11px] uppercase tracking-widest transition-all group ${
                    isActive ? "text-blue-600 font-bold" : "text-gray-500 hover:text-black font-medium"
                  }`}
                >
                  {cat.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-transform duration-300 ${
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
          <div className="flex justify-between items-center px-6 h-16 border-b border-gray-50">
            <img src={logo} alt="logo" className="h-8" />
            <button onClick={() => setIsOpen(false)} className="text-gray-800 p-1">
              <FiX size={28} />
            </button>
          </div>

          {/* Mobile Links Container */}
          <div className="px-8 py-10 flex flex-col gap-8 text-left">
            <div className="space-y-6">
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Navigation</p>
              {mainLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className="block text-xl font-light text-gray-900 tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="w-12 h-[1px] bg-gray-100 my-2"></div>

            <div className="space-y-6">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Catalogue</p>
              {navCategories.map(cat => (
                <button 
                  key={cat.name} 
                  onClick={() => handleNavigation(cat)} 
                  className="block w-full text-left text-xl font-light text-gray-700 tracking-tight hover:text-blue-600 transition-colors"
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Mobile Footer Area */}
            <div className="mt-10 pt-10 border-t border-gray-50">
               <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Besoin d'aide ?" 
                    className="w-full bg-gray-50 rounded-lg py-3 px-4 text-sm outline-none"
                  />
                  <FiSearch className="absolute right-4 top-3.5 text-gray-300" size={16} />
               </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;