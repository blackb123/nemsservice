import React from 'react';
import Navbar from '../component/nav';
import Footer from '../component/footer';
import zapp from "../assets/zapp.png"
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col  text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* HEADER SECTION */}
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>

        <a 
          href="https://wa.me/2376XXXXXXXX"
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2 px-4 rounded-full shadow-lg transition-transform hover:scale-105 z-[100]"
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