import React from 'react';

const EcoDecor = () => {
    return (
        <div>
            <section className="bg-green-50 py-12">
  <h2 className="text-3xl font-semibold text-center text-green-800 mb-8">
    Eco Decor Ideas
  </h2>
  <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
    Discover creative ways to style your home with plants — from cozy corners to modern minimal setups.
  </p>

  <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">

    
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
      <img src="https://i.ibb.co.com/gZGcgtC2/kate-darmody-x9m-WESM9hqw-unsplash.jpg" 
           alt="Living Room Plants" className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"/>
      <div className="p-5">
        <h3 className="text-lg font-bold text-green-700 mb-2">Living Room Refresh</h3>
        <p className="text-gray-600 text-sm">Combine tall indoor plants with wooden furniture for a cozy, natural vibe.</p>
      </div>
    </div>

   
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
      <img src="https://i.ibb.co.com/rK1Zm4ZR/dorin-mottaghi-djpne-Qo-Cfn-U-unsplash.jpg" 
           alt="Bedroom Plants" className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"/>
      <div className="p-5">
        <h3 className="text-lg font-bold text-green-700 mb-2">Bedroom Serenity</h3>
        <p className="text-gray-600 text-sm">Add air-purifying plants like snake plants for fresh air and calm energy.</p>
      </div>
    </div>

    
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
      <img src="https://i.ibb.co.com/PscNRqyy/emile-victor-portenart-9sl-FL1al-Eh0-unsplash.jpg" 
           alt="Kitchen Decor" className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"/>
      <div className="p-5">
        <h3 className="text-lg font-bold text-green-700 mb-2">Green Kitchen</h3>
        <p className="text-gray-600 text-sm">Use small herb pots on windowsills for a fresh and functional touch.</p>
      </div>
    </div>

    
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
      <img src="https://i.ibb.co.com/G4wqjprC/vaida-krau-u-Msp-Z6-Ug-WPU-unsplash.jpg" 
           alt="Balcony Garden" className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"/>
      <div className="p-5">
        <h3 className="text-lg font-bold text-green-700 mb-2">Balcony Garden</h3>
        <p className="text-gray-600 text-sm">Turn small balconies into relaxing plant havens with hanging pots and vines.</p>
      </div>
    </div>

  </div>
</section>

        </div>
    );
};

export default EcoDecor;