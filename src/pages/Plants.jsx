import React from 'react';
import { useLoaderData } from 'react-router';
import Indoorplants from './Indoorplants';

const Plants = () => {
    const plants = useLoaderData()
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 m-5'>
            
           {
            plants.map(plant=>(
                <Indoorplants plant={plant}></Indoorplants>
            ))
           }
        </div>
    );
};

export default Plants;