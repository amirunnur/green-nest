import React from 'react';

import { useLoaderData } from 'react-router';
import Indoorplants from './Indoorplants';
import PlantCare from './PlantCare';
import Exparts from './Exparts';
import EcoDecor from './EcoDecor';




const Home = () => {
    const plants = useLoaderData()
    const featuredPlants = plants.slice(0,4)
    
    return (
       <div className='bg-green-50'>
           <h1 className='text-4xl font-bold text-center m-5 text-green-900'>Top rated Indoor Plants</h1>
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[70%] mx-auto'>
               {
                   featuredPlants.map(plant =>(
                    <Indoorplants plant={plant}></Indoorplants>
                   ))
               }
            
           </div>
           <PlantCare></PlantCare>
           <Exparts></Exparts>
           <EcoDecor></EcoDecor>
       </div>
    );
};

export default Home;