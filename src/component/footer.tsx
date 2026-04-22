import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone } from 'react-icons/fi';
import logo from "../assets/logo_nems.webp";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  // Import des variables d'environnement
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "+237 671 810 319";
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "nemssservice@gmail.com";
    const telLink = whatsappNumber.replace(/\s/g, '');

  return (
    <footer className="w-full bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 pt-20 md:pt-24 pb-12 px-6 font-sans text-gray-700" id='footer'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-10">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-4 space-y-8">
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Nem's Service" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
          <p className="text-base md:text-lg leading-relaxed max-w-sm text-gray-700">
            L&apos;excellence de l&apos;impression personnalisée et des coffrets cadeaux premium pour les institutions et entreprises exigeantes.
          </p>
          <div className="flex gap-6 text-gray-600">
            <FiFacebook className="hover:text-blue-600 cursor-pointer transition-all hover:-translate-y-1" size={24} />
            <FiInstagram className="hover:text-blue-600 cursor-pointer transition-all hover:-translate-y-1" size={24} />
            <FiTwitter className="hover:text-blue-600 cursor-pointer transition-all hover:-translate-y-1" size={24} />
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-8">Expertises</h3>
          <ul className="space-y-5 text-base">
            <li><a href="/coffrets" className="hover:text-blue-600 transition-colors flex items-center gap-3 group font-medium">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Gifts Packs
            </a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-3 group font-medium">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Tous Nos Produits
            </a></li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-8">Support</h3>
          <ul className="space-y-5 text-base">
            <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">Aide & Devis</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">Livraison Express</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">Confidentialité</a></li>
          </ul>
        </div>

        {/* Contact Column - Dynamisée avec ENV */}
        <div className="col-span-1 md:col-span-4 space-y-8">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-8">Contact</h3>
          <div className="space-y-5">
            <a href={`tel:${telLink}`} className="flex items-center gap-4 text-base hover:text-blue-600 transition-colors group font-medium">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition-all">
                <FiPhone size={20} />
              </div>
              <span>{whatsappNumber}</span>
            </a>
            <a href={`mailto:${contactEmail}`} className="flex items-center gap-4 text-base hover:text-blue-600 transition-colors group font-medium">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition-all">
                <FiMail size={20} />
              </div>
              <span>{contactEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 md:mt-20 pt-8 md:pt-10 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 text-xs uppercase font-semibold tracking-widest text-gray-600">
          <span>© {year} Nem&apos;s Service</span>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span className="text-gray-500">Premium Services</span>
        </div>
        
        <div className="flex gap-10 text-xs uppercase font-semibold tracking-widest text-gray-600">
          <span className="hover:text-blue-600 cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-blue-600 cursor-pointer transition-colors">Privacy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
