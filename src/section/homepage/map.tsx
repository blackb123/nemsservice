import React from 'react';
import { motion } from 'framer-motion';

const FullWidthMap = () => {
  // Encoded location for Akwa Bureau de Transport, Douala
  const locationQuery = "Akwa+bureau+de+transport+Douala";
  // Note: For the "No API Key" version, we use the standard Embed URL format:
  const embedUrl = `https://www.google.com/maps?q=${locationQuery}&output=embed`;

  return (
    <section className="w-full h-[450px] md:h-[450px] relative bg-gray-900 overflow-hidden">
      {/* Optional: Title or Overlay if you want to label the section */}
      <div className="absolute top-8 left-8 z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-2xl border border-gray-200"
        >
          <h3 className="text-black font-black uppercase text-sm tracking-widest">Localisation</h3>
          <p className="text-gray-600 text-xs font-bold">Akwa Bureau de Transport</p>
        </motion.div>
      </div>

      <iframe
        title="Map Akwa Bureau de Transport"
        src={embedUrl}
        className="w-full h-full border-0 grayscale-[20%] contrast-[1.1]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
      {/* Bottom Gradient for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default FullWidthMap;