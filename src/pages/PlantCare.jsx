import React from 'react';

const PlantCare = () => {
    return (
        <div>
            <section class="bg-green-50 py-12">
  <h2 class="text-4xl font-bold text-center text-green-800 mb-8">Plant Care Tips</h2>
  <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
    
    <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <h3 class="text-2xl font-bold text-green-700 mb-3"> Watering</h3>
      <ul class="text-gray-700 space-y-1">
        <li className='font-semibold'>Water when top soil feels dry.</li>
        <li className='font-semibold'>Avoid overwatering to prevent rot.</li>
        <li className='font-semibold'>Morning is best for watering.</li>
      </ul>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <h3 class="text-2xl font-bold text-yellow-600 mb-3"> Sunlight</h3>
      <ul class="text-gray-700 space-y-1">
        <li className='font-semibold'>Bright, indirect light works best.</li>
        <li className='font-semibold'>Rotate weekly for even growth.</li>
        <li className='font-semibold'>Avoid harsh midday sun.</li>
      </ul>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <h3 class="text-2xl font-bold text-green-600 mb-3"> Fertilizing</h3>
      <ul class="text-gray-700 space-y-1">
        <li className='font-semibold'>Feed every 4-6 weeks in growing season.</li>
        <li className='font-semibold'>Use balanced, water-soluble fertilizer.</li>
        <li className='font-semibold'>Water before fertilizing.</li>
      </ul>
    </div>

  </div>
</section>

        </div>
    );
};

export default PlantCare;