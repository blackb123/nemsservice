import React from 'react';
import { FiSearch, FiMessageSquare, FiZap } from 'react-icons/fi';

const TrustBar: React.FC = () => {
  return (
    <section className="w-full bg-white border-y border-gray-100 py-10 px-4 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
        
        {/* Step 1: Search */}
        <div className="flex items-center gap-5 px-4">
          <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
            <FiSearch size={30} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 leading-tight">Search Your Product</h3>
            <p className="text-sm text-gray-600 mt-1">Explore our catalog and find the perfect design for your brand.</p>
          </div>
        </div>

        {/* Step 2: Contact */}
        <div className="flex items-center gap-5 px-4 border-y md:border-y-0 md:border-x border-gray-100 py-8 md:py-0">
          <div className="flex-shrink-0 w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-[#f4901e]">
            <FiMessageSquare size={30} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 leading-tight">Let's Make the Deal</h3>
            <p className="text-sm text-gray-600 mt-1">Contact us directly to finalize your custom quote and details.</p>
          </div>
        </div>

        {/* Step 3: Delivery */}
        <div className="flex items-center gap-5 px-4">
          <div className="flex-shrink-0 w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600">
            <FiZap size={30} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 leading-tight">Lightning Fast Delivery</h3>
            <p className="text-sm text-gray-600 mt-1">Sit back while we print and ship your order with high speed.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustBar;