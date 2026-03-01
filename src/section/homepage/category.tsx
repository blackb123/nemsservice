import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { siteData } from '../../data/sitedata';
import { useCategory } from '../../provider/categoryprovider'; 
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate

const CategorySlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); // 2. Initialize navigate
  
  const { activeCategory, setCategory } = useCategory();

  const handleCategoryClick = (categoryName: string) => {
    // 3. Update the provider state
    setCategory(categoryName);
    
    // 4. Immediately jump to the products page
    // The ProductPage will read 'activeCategory' from the provider and filter automatically
    navigate('/products'); 
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto text-black my-8 bg-white px-4 relative group">
      <h2 className="text-2xl font-bold mb-10 text-gray-900">Explore all categories</h2>
      
      {/* Navigation Buttons */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slider Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 scroll-smooth no-scrollbar snap-x snap-mandatory pb-4"
      >
        {siteData.categories.map((cat) => {
          const isActive = activeCategory === cat.name;

          return (
            <div 
              key={cat.id} 
              onClick={() => handleCategoryClick(cat.name)} 
              className="flex-none w-[100px] md:w-[150px] flex flex-col items-center group cursor-pointer snap-center"
            >
              <div className={`
                w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden mb-3 border-2 transition-all flex items-center justify-center
                ${isActive ? 'border-blue-600 ring-4 ring-blue-50' : 'border-transparent group-hover:border-gray-300'}
              `}>
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full rounded-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <p className={`text-center font-bold text-sm tracking-tight leading-tight px-2 transition-colors uppercase ${isActive ? 'text-blue-600' : 'text-gray-900'}`}>
                {cat.name}
              </p>
            </div>
          );
        })}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default CategorySlider;