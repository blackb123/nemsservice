import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight, FiAward, FiUsers, FiClock, FiBriefcase } from 'react-icons/fi';
import type { Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// Animation Variant (consistent with product page) - Properly typed
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] as any // Cast to any to avoid type conflict
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

// Stats data
const stats = [
  { value: '500+', label: 'Projets Réalisés' },
  { value: '15', label: 'Années d\'expertise' },
  { value: '200+', label: 'Clients Satisfaits' },
  { value: '24/7', label: 'Support Client' }
];

// Services data
const services = [
  {
    icon: FiAward,
    title: 'Qualité Premium',
    desc: 'Des finitions irréprochables grâce à un contrôle qualité rigoureux à chaque étape.'
  },
  {
    icon: FiUsers,
    title: 'Accompagnement Dédié',
    desc: 'Un expert attitré vous guide de la conception à la livraison finale.'
  },
  {
    icon: FiClock,
    title: 'Délais Garantis',
    desc: 'Respect des engagements temporels avec une planification industrielle précise.'
  },
  {
    icon: FiBriefcase,
    title: 'Sourcing Matériaux',
    desc: 'Sélection rigoureuse des meilleurs supports d\'impression et matières premières.'
  }
];

const AboutPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  
  // Get WhatsApp number from env
  const rawNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "237671810319";
  const whatsappNumber = rawNumber.replace('+', '');
 const navigate = useNavigate()
  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  function handlenav(): void {
    navigate("/products")
  }

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
          <section className="relative py-32 md:py-48 bg-gradient-to-br from-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Subtle texture background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Minimal geometric accents */}
      <div className="absolute top-40 right-20 w-64 h-px bg-gradient-to-l from-blue-500/20 to-transparent rotate-45" />
      <div className="absolute bottom-40 left-20 w-64 h-px bg-gradient-to-r from-blue-500/20 to-transparent -rotate-45" />
      
      {/* Soft background image - much more subtle */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" 
          alt="Nem's Service Corporate" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-8"
        >
          {/* Category with refined line */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 group"
          >
            <span className="h-[1px] w-12 bg-blue-500/50 group-hover:w-16 transition-all duration-500" />
            <span className="text-blue-400/50 text-[10px] font-light uppercase tracking-[0.3em] group-hover:text-blue-400 transition-colors duration-500">
              Expertise B2B Premium
            </span>
          </motion.div>
          
          {/* Main title with refined typography */}
          <h1 className="text-5xl md:text-7xl font-light leading-[1.1] tracking-[-0.02em] space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block text-white"
            >
              L'ingénierie de votre
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block text-blue-400 relative inline-block group"
            >
              Identité Visuelle.
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-700" />
            </motion.span>
          </h1>
          
          {/* Description with subtle line accent */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative pl-6"
          >
            <span className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent" />
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Nem's Service accompagne les institutions dans la création de supports de communication d'exception. 
              Performance industrielle et finitions artisanales.
            </p>
          </motion.div>

          {/* Button with refined design */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-4"
          >
            <motion.button 
              onClick={() => handlenav()}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="group relative inline-flex items-center gap-4 text-sm font-light text-white pb-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Consulter le catalogue
                <FiArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-white/30" />
              <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-500" />
            </motion.button>
          </motion.div>

          {/* Minimal separator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="w-20 h-px bg-white/10 pt-8" 
          />
        </motion.div>
      </div>

      {/* Simple baseline */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[8px] text-slate-700 font-light uppercase tracking-[0.5em]"
      >
        • Qualité • Exigence • Durabilité •
      </motion.div>
    </section>
      {/* --- VISION SECTION --- */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <motion.div variants={fadeIn} className="flex items-center gap-4 group">
                <span className="h-[1px] w-8 bg-blue-500/30 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500" />
                <span className="text-blue-500/70 text-[10px] font-light uppercase tracking-[0.3em] group-hover:text-blue-500 transition-colors duration-500">
                  Notre Vision
                </span>
              </motion.div>
              
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-light text-gray-900 tracking-[-0.02em] leading-tight">
                La rigueur comme standard de fabrication.
              </motion.h2>
            </div>
            
            <motion.div variants={fadeIn} className="relative pl-6">
              <span className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent" />
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                Dans un monde saturé d'images, la différence se joue sur la qualité tactile et la précision du détail. 
                Nem's Service fusionne les techniques traditionnelles d'imprimerie avec les technologies de personnalisation les plus avancées.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="space-y-3 pt-4">
              {["Marquage haute définition", "Sourcing matériaux éco-responsables"].map((item, i) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-3 group/item"
                >
                  <FiCheckCircle className="text-blue-500 group-hover/item:text-blue-600 transition-colors" size={16} />
                  <span className="text-gray-600 text-sm font-light group-hover/item:text-gray-900 transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/4491884/pexels-photo-4491884.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-105" 
                  alt="Artisan sérigraphie au travail"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                src="https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=800" 
                className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-105" 
                alt="Stylos publicitaires de luxe - Cadeaux d'entreprise"
              />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>            
            </div>
            <div className="space-y-4 pt-12">
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800" 
                  className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-105" 
                  alt="Artisan peignant à la main des détails"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="relative group overflow-hidden rounded-2xl">
                  <img 
                  src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800" 
                  className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-105" 
                  alt="Sacs tote bag personnalisés - Cadeaux d'entreprise"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- STATISTIQUES --- */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 to-slate-900 text-white overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Geometric accents */}
        <div className="absolute top-20 left-20 w-40 h-px bg-gradient-to-r from-blue-500/20 to-transparent" />
        <div className="absolute bottom-20 right-20 w-40 h-px bg-gradient-to-l from-blue-500/20 to-transparent" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 relative z-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label} 
                variants={fadeIn}
                className="relative group"
              >
                <div className="absolute -left-4 top-0 h-full w-px bg-white/5 group-hover:bg-blue-500/30 transition-colors duration-500" />
                <div className="pl-6">
                  <motion.div 
                    className="text-4xl md:text-5xl font-light text-white mb-2 tracking-[-0.02em]"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-slate-500 text-[9px] font-light uppercase tracking-[0.2em] group-hover:text-slate-400 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #020617 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 group"
            >
              <span className="h-[1px] w-8 bg-blue-500/30 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500" />
              <span className="text-blue-500/70 text-[10px] font-light uppercase tracking-[0.3em] group-hover:text-blue-500 transition-colors duration-500">
                Infrastructures
              </span>
              <span className="h-[1px] w-8 bg-blue-500/30 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-light text-gray-900 tracking-[-0.02em]"
            >
              Expertises Métiers
            </motion.h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeIn}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-500"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gray-100 rounded-tr-xl group-hover:border-blue-500/30 transition-colors duration-500" />
                
                <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-500">
                  <service.icon size={20} />
                </div>
                
                <h4 className="text-lg font-light text-gray-900 mb-3 group-hover:text-blue-500 transition-colors duration-500">
                  {service.title}
                </h4>
                
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {service.desc}
                </p>

                {/* Subtle hover indicator */}
                <div className="absolute bottom-4 left-8 w-0 h-px bg-blue-500/30 group-hover:w-8 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #020617 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Geometric accents */}
        <div className="absolute top-40 left-20 w-40 h-px bg-gradient-to-r from-blue-500/10 to-transparent rotate-45" />
        <div className="absolute bottom-40 right-20 w-40 h-px bg-gradient-to-l from-blue-500/10 to-transparent -rotate-45" />
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10 space-y-12"
        >
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4 group"
            >
              <span className="h-[1px] w-8 bg-blue-500/30 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500" />
              <span className="text-blue-500/70 text-[10px] font-light uppercase tracking-[0.3em] group-hover:text-blue-500 transition-colors duration-500">
                Collaboration
              </span>
              <span className="h-[1px] w-8 bg-blue-500/30 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-light text-gray-900 tracking-[-0.02em]"
            >
              Discutons de votre prochain projet.
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative pl-6 max-w-2xl mx-auto"
          >
            <span className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent" />
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Nos conseillers experts vous accompagnent dans la définition de vos besoins techniques et esthétiques pour des résultats sans compromis.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
          >
            {/* Quote Request */}
            <motion.a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Bonjour, je souhaite obtenir un devis professionnel pour mon projet."
              )}`}
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="group relative inline-flex items-center gap-3 text-sm font-light text-gray-900 pb-2 overflow-hidden"
            >
              <span className="relative z-10">Demander un devis sur WhatsApp</span>
              <FiArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
              <span className="absolute bottom-0 left-0 w-full h-px bg-gray-200" />
              <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-500" />
            </motion.a>

            {/* Appointment Request */}
            <motion.a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Bonjour, je souhaite prendre rendez-vous pour discuter de mon projet."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="group relative inline-flex items-center gap-3 text-sm font-light text-gray-400 hover:text-gray-900 pb-2 overflow-hidden transition-colors"
            >
              <span className="relative z-10">Prendre rendez-vous via WhatsApp</span>
              <FiArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
              <span className="absolute bottom-0 left-0 w-full h-px bg-gray-100" />
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 group-hover:w-full transition-all duration-500" />
            </motion.a>
          </motion.div>

          {/* Minimal separator */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="w-20 h-px bg-gray-100 mx-auto pt-8"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;