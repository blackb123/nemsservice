import React from 'react';
import { motion } from 'framer-motion';

const FullWidthMap = () => {
  // Encoded location for Akwa Bureau de Transport, Douala
  const locationQuery = "Akwa+bureau+de+transport+Douala";
  // Note: For the "No API Key" version, we use the standard Embed URL format:
  const embedUrl = `https://www.google.com/maps?q=${locationQuery}&output=embed`;

  return (
    <section className="w-full h-96 md:h-[500px] relative bg-gray-200 overflow-hidden border-t border-gray-200">
      {/* Optional: Title or Overlay if you want to label the section */}
      <div className="absolute top-8 left-8 z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/95 backdrop-blur-md p-5 md:p-6 rounded-xl shadow-lg border-2 border-gray-200"
        >
          <h3 className="text-gray-900 font-bold uppercase text-sm md:text-base tracking-wide">Localisation</h3>
          <p className="text-gray-700 text-xs md:text-sm font-semibold mt-1">Akwa Bureau de Transport</p>
        </motion.div>
      </div>

      <iframe
        title="Map Akwa Bureau de Transport"
        src={embedUrl}
        className="w-full h-full border-0 grayscale-0 contrast-100"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
      {/* Bottom Gradient for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-20 md:h-24 bg-gradient-to-t from-white via-white/60 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default FullWidthMap;
