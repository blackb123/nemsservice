import React from 'react';
import Navbar from '../component/nav';
import Footer from '../component/footer';
import zapp from "../assets/zapp.webp"

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // Import de la variable d'environnement Vite
  const rawNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "237671810319";
  const whatsappNumber = rawNumber.replace('+', '');
  
  const message = encodeURIComponent("Je suis intéressé par vos services nems service");

  return (
    <div className="flex min-h-screen flex-col text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* HEADER SECTION */}
      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>

      {/* WHATSAPP FLOATING BUTTON */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-5 right-10 flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg transition-transform hover:scale-105 z-[100] p-3"
      >
        <img 
          src={zapp}
          className="w-10 h-10" 
          alt="whatsapp" 
        />
      </a>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
};

export default MainLayout;