import React, { useState } from 'react';
import { FiSearch, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo_nems.webp";
import { useCoffrets } from '../provider/coffreprovider'; 
import { useCategory } from '../provider/categoryprovider'; // Ton provider de catégories produits

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Accès aux deux providers
  const { setSelectedPack, allCoffrets } = useCoffrets();
  const { setCategory } = useCategory();

  const mainLinks = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
  ];

  // Configuration des catégories avec leurs types respectifs
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
        // ICI : Pour "Gifts Pack", on veut TOUT voir
        // On reset le pack sélectionné pour que le composant de la page
        // affiche la liste complète (allCoffrets)
        setSelectedPack(null); 
      } else {
        // Pour les autres (ex: Écriture), on cherche un pack spécifique si besoin
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
        <button onClick={() => setIsOpen(true)} className="md:hidden text-gray-800">
          <FiMenu size={26} />
        </button>

        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Nem's Service" className="h-10 md:h-14 w-auto object-contain" />
        </Link>

        {/* Search Bar */}
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

      {/* --- Desktop Navigation --- */}
      <nav className="hidden md:block border-t border-gray-50 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-8 py-3">
            {mainLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-[12px] font-bold text-gray-900 hover:text-blue-600 uppercase tracking-widest transition-all"
              >
                {link.name}
              </Link>
            ))}

            <div className="h-4 w-[1px] bg-gray-200 mx-2"></div>

            {navCategories.map((cat) => (
              <button 
                key={cat.name} 
                onClick={() => handleNavigation(cat)}
                className={`text-[12px] font-medium uppercase tracking-tight transition-colors ${
                  cat.type === 'ALL' ? "text-blue-600 font-bold" : "text-gray-500 hover:text-black"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- Mobile Sidebar --- */}
      <div className={`fixed inset-0 z-[120] bg-white transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-10">
            <img src={logo} alt="logo" className="h-10" />
            <button onClick={() => setIsOpen(false)}><FiX size={30} /></button>
          </div>
          <div className="space-y-6">
            {mainLinks.map(link => (
              <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="block text-2xl font-black text-gray-900">{link.name}</Link>
            ))}
            <hr />
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nos Produits</p>
            {navCategories.map(cat => (
              <button key={cat.name} onClick={() => handleNavigation(cat)} className="block w-full text-left text-xl font-bold text-gray-700">
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;