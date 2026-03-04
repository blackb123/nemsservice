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
    <footer className="w-full bg-[#020617] border-t border-slate-800 pt-20 pb-10 px-6 font-sans text-slate-400" id='footer'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-4 space-y-6">
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Nem's Service" 
              className="h-12 md:h-16 w-auto object-contain brightness-110"
            />
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-slate-400">
            L'excellence de l'impression personnalisée et des coffrets cadeaux premium pour les institutions et entreprises exigeantes.
          </p>
          <div className="flex gap-5 text-slate-500">
            <FiFacebook className="hover:text-blue-500 cursor-pointer transition-all hover:-translate-y-1" size={20} />
            <FiInstagram className="hover:text-blue-500 cursor-pointer transition-all hover:-translate-y-1" size={20} />
            <FiTwitter className="hover:text-blue-500 cursor-pointer transition-all hover:-translate-y-1" size={20} />
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-6">Expertises</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="/coffrets" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
              <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Gifts Packs
            </a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
              <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Tous Nos Produits
            </a></li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-6">Support</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Aide & Devis</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Livraison Express</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Confidentialité</a></li>
          </ul>
        </div>

        {/* Contact Column - Dynamisée avec ENV */}
        <div className="col-span-1 md:col-span-4 space-y-6">
          <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-6">Contact</h3>
          <div className="space-y-4">
            <a href={`tel:${telLink}`} className="flex items-center gap-4 text-sm hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-all">
                <FiPhone size={18} />
              </div>
              <span>{whatsappNumber}</span>
            </a>
            <a href={`mailto:${contactEmail}`} className="flex items-center gap-4 text-sm hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-all">
                <FiMail size={18} />
              </div>
              <span>{contactEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-slate-500">
          <span>© {year} Nem's Service</span>
          <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
          <span className="text-slate-600">Engineering Identity</span>
        </div>
        
        <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-slate-500">
          <span className="hover:text-blue-400 cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-blue-400 cursor-pointer transition-colors">Privacy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;