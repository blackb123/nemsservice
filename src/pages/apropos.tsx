import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from  'framer-motion';
import { FiCheckCircle, FiTarget, FiPenTool, FiZap, FiArrowRight } from 'react-icons/fi';
import type { IconType } from 'react-icons';

// Définition de l'interface pour les services
interface ServiceItem {
  icon: IconType;
  title: string;
  desc: string;
}

const fadeIn:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const AboutPage: React.FC = () => {
  const services: ServiceItem[] = [
    { 
      icon: FiPenTool, 
      title: "Studio de Design", 
      desc: "Conception graphique stratégique pour aligner vos supports visuels avec vos impératifs commerciaux." 
    },
    { 
      icon: FiTarget, 
      title: "Solutions Corporate", 
      desc: "De la signalétique au textile, nous garantissons une cohérence visuelle absolue sur tous vos points de contact." 
    },
    { 
      icon: FiZap, 
      title: "Flux Intelligents", 
      desc: "Optimisation de vos commandes pour une livrasion efficace " 
    },
  ];

  const stats = [
    { label: "Partenaires B2B", value: "500+" },
    { label: "Unités produites", value: "250k" },
    { label: "Précision technique", value: "100%" },
    { label: "Délai moyen", value: "48h" },
  ];

  return (
    <div className="bg-white font-sans overflow-hidden text-slate-900">
      
      {/* --- Hero Section --- */}
      <section className="relative py-32 md:py-48 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" 
            alt="Nem's Service Corporate" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="inline-block px-3 py-1 mb-6 border border-blue-500/30 bg-blue-500/10 rounded-full">
              <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">Expertise B2B Premium</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              L'ingénierie de votre <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-orange-500">
                Identité Visuelle.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 font-medium max-w-xl">
              Nem's Service accompagne les institutions dans la création de supports de communication d'exception. 
              Performance industrielle et finitions artisanales.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4  font-bold transition-all flex items-center gap-2 group shadow-xl shadow-blue-900/20">
                Consulter le catalogue <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Notre Vision Section --- */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <motion.h2 variants={fadeIn} className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Notre Vision</motion.h2>
            <motion.h3 variants={fadeIn} className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
              La rigueur comme standard de fabrication.
            </motion.h3>
            <motion.p variants={fadeIn} className="text-slate-600 text-lg mb-8 leading-relaxed">
              Dans un monde saturé d'images, la différence se joue sur la qualité tactile et la précision du détail. 
              Nem's Service fusionne les techniques traditionnelles d'imprimerie avec les technologies de personnalisation les plus avancées.
            </motion.p>
            <motion.div variants={fadeIn} className="space-y-4">
              {["Marquage haute définition", "Sourcing matériaux éco-responsables"].map((item) => (
                <div key={item} className="flex items-center gap-3 font-semibold text-slate-800">
                  <FiCheckCircle className="text-blue-600" size={18} /> {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800" className="rounded-2xl shadow-lg w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Configuration Corporate" />
              <img src="https://images.unsplash.com/photo-1586075010633-2445198ba293?q=80&w=800" className="rounded-2xl shadow-lg w-full h-80 object-cover" alt="Contrôle Qualité" />
            </div>
            <div className="space-y-4 pt-12">
              <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800" className="rounded-2xl shadow-lg w-full h-80 object-cover" alt="Focus Détail" />
              <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800" className="rounded-2xl shadow-lg w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Produit Fini" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Statistiques --- */}
      <section className="bg-slate-900 py-24 text-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeIn} className="border-l border-slate-700 pl-6">
              <div className="text-4xl font-bold mb-2 tracking-tight">{stat.value}</div>
              <div className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- Services Section --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Infrastructures</motion.h2>
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold tracking-tight">Expertises Métiers</motion.h3>
        </div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon size={22} />
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- Final CTA --- */}
 <section className="py-32 px-6 bg-white text-center">
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto"
  >
    <h2 className="text-4xl font-bold mb-8 tracking-tight">Discutons de votre prochain projet.</h2>
    <p className="text-slate-500 text-lg mb-12 font-light">
      Nos conseillers experts vous accompagnent dans la définition de vos besoins techniques et esthétiques pour des résultats sans compromis.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-6">
      {/* Quote Request */}
      <a 
        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Bonjour%2C%20je%20souhaite%20obtenir%20un%20devis%20professionnel%20pour%20mon%20projet.`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-900 text-white px-10 py-4 font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 inline-block"
      >
        Demander un devis sur WhatsApp
      </a>

      {/* Appointment Request */}
      <a 
        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Bonjour%2C%20je%20souhaite%20prendre%20rendez-vous%20pour%20discuter%20de%20mon%20projet.`}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-slate-200 text-slate-900 px-10 py-4 font-bold hover:bg-slate-50 transition-all inline-block"
      >
        Prendre rendez-vous via WhatsApp
      </a>
    </div>
  </motion.div>
</section>
    </div>
  );
};

export default AboutPage;