import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const PlantDetails = () => {
    const {id} = useParams()
   
   const plants = useLoaderData()
  const plant = plants.find(p=>String(p.id )=== id)

  
  
    return (
        
            <div className='md:flex gap-20  border-gray-400 min-h-screen md:text-2xl'>
                <div className='m-6'>
                    <figure className='overflow-clip '>
                      <img className='w-150 flex  '
                        src={plant.image}
                        alt="plants" />
                    </figure>
                </div>
                <div className='m-6 md:flex justify-center items-center'>
                     <div>
                         <p className='text-3xl font-semibold'>Plant Name : {plant.plantName}</p>
                         <p>Plant category : {plant.category}</p>
                         <p className='text-xl font-bold'>Price : {plant.price} $</p>
                         <p>Rating : {plant.rating}</p>
                         <p>AvailableStock : {plant.availableStock}</p>
                         <p>CareLevel : {plant.careLevel}</p>
                         <p>Description: {plant.description}</p>
                     </div>
                </div>
                
        </div>
    );
};

export default PlantDetails;

