import React from 'react';

interface SectionProps {
  header: string;
  description: string;
  features: string[];
  image: string;
  category: string;
  index: number;
}

const ProductSection: React.FC<SectionProps> = ({ header, description, features, image, category, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="w-full py-24 md:py-40 bg-white">
      <div className={`max-w-7xl mx-auto px-6 flex flex-col items-center gap-12 md:gap-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        
        {/* TEXT CONTENT */}
        <div className="w-full md:w-[45%] space-y-8">
          <div>
            <p className="text-blue-600 font-medium tracking-[0.2em] text-[11px] uppercase mb-4">
              {category}
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight">
              {header}
            </h2>
          </div>

          <p className="text-slate-500 text-lg leading-relaxed font-light max-w-lg">
            {description}
          </p>
          
          {/* Minimal Features List */}
          <div className="pt-4 space-y-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4 group/item">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-blue-500 transition-colors" />
                <span className="text-slate-600 text-sm font-light tracking-wide">{feature}</span>
              </div>
            ))}
          </div>

          {/* Clean Action Buttons */}
          <div className="pt-8 flex items-center gap-8">
            <button className="text-sm font-semibold text-slate-900 pb-1 border-b-2 border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-all">
              Commander
            </button>
            <button className="text-sm font-semibold text-slate-400 hover:text-slate-900 transition-colors">
              Fiche technique
            </button>
          </div>
        </div>

        {/* IMAGE CONTENT */}
        <div className="w-full md:w-[55%]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-50 group">
            <img 
              src={`/assets/${image}`} 
              alt={header} 
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            {/* Subtle Inner Shadow for Depth */}
            <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/5 rounded-3xl" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;