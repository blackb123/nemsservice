import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  header: string;
  description: string;
  features: string[];
  image?: string;
  image_url?: string;
  category: string;
  index: number;
}

const ProductSection: React.FC<SectionProps> = ({ header, description, features, image, image_url, category, index }) => {
  const isEven = index % 2 === 0;

  // Configuration du lien WhatsApp dynamique
  const rawNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "237671810319";
  const whatsappNumber = rawNumber.replace('+', '');
  
  const orderMessage = encodeURIComponent(`Bonjour Nem's Service, je souhaite commander : ${header}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${orderMessage}`;

  // Use image_url if available, otherwise fall back to image
  const productImage = image_url || image;

  return (
    <section 
      className="w-full bg-white relative overflow-hidden" 
      id={index === 0 ? "products" : undefined}
    >
      {/* Subtle texture background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #020617 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Minimal geometric accents */}
      <div className={`absolute top-20 ${isEven ? 'right-20' : 'left-20'} w-40 h-px bg-gradient-to-l from-blue-500/10 to-transparent rotate-45 hidden md:block`} />
      <div className={`absolute bottom-20 ${isEven ? 'left-20' : 'right-20'} w-40 h-px bg-gradient-to-r from-blue-500/10 to-transparent -rotate-45 hidden md:block`} />

      <div className={`max-w-7xl mx-auto px-6 py-12 md:py-0 flex flex-col gap-12 md:gap-24 relative z-10 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}>
        
        {/* TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-[45%] space-y-8"
        >
          {/* Category with refined line */}
          <div className="flex items-center gap-4 group">
            <span className="h-[1px] w-8 bg-blue-500/30 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500" />
            <p className="text-gray-400 text-[10px] font-light uppercase tracking-[0.3em] group-hover:text-blue-500/70 transition-colors duration-500">
              {category}
            </p>
          </div>

          {/* Header with refined typography */}
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-[-0.02em] leading-tight">
            {header}
          </h2>

          {/* Mobile: Show image after header on mobile, hide in desktop text container */}
          <div className="block md:hidden w-full -mx-6 px-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-50 group">
              <img 
                src={productImage}
                alt={header} 
                className="w-full h-full object-contain transition-transform duration-[1.8s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/5 rounded-3xl" />
            </div>
          </div>

          {/* Description with subtle line accent */}
          <div className="relative pl-6">
            <span className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent" />
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Minimal Features List */}
          <div className="pt-4 space-y-3">
            {features.map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 group/item"
              >
                <div className="w-1 h-1 rounded-full bg-gray-300 group-hover/item:bg-blue-500 transition-colors duration-300" />
                <span className="text-gray-600 text-sm font-light tracking-wide group-hover/item:text-gray-900 transition-colors duration-300">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Refined Action Buttons */}
          <div className="pt-8 flex flex-wrap items-center gap-6 md:gap-8">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative text-sm font-light bg-black text-white p-3 rounded-3xl px-10  overflow-hidden"
            >
              <span className="relative z-10">Commander</span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-gray-900 transform origin-left transition-transform duration-300 scale-x-100 group-hover/btn:scale-x-0" />
              <span className="absolute bottom-0 left-0 w-full h-px bg-blue-500 transform origin-right transition-transform duration-300 scale-x-0 group-hover/btn:scale-x-100" />
            </a>
           
          </div>

          {/* Minimal separator */}
          <div className="w-12 h-px bg-gray-100" />
        </motion.div>

        {/* IMAGE CONTENT - Desktop only */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block w-full md:w-[55%]"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-50 group">
            <img 
              src={productImage}
              alt={header} 
              className="w-full h-full object-contain transition-transform duration-[1.8s] ease-out group-hover:scale-105"
            />
            
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Minimal frame */}
            <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/5 rounded-3xl" />
            
            {/* Decorative corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gray-900/5 rounded-tl-2xl" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gray-900/5 rounded-br-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;