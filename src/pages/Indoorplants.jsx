import React from 'react';
import { Link } from 'react-router';

const Indoorplants = ({plant}) => {
    return (
        <div>
               <div className="card bg-base-100 m-4 shadow-sm hover:scale-105 h-100">
                   <figure>
                     <img
                     
                       src={plant.image}
                       alt="Plants" />
                   </figure>
                   <div className="card-body">
                     <h2 className="card-title text-2xl ">{plant.plantName}</h2>
                     <p className='font-semibold'>Price: {plant.price} $</p>
                     <p className='font-semibold '>Rating: {plant.rating}</p>
                     <div className="">
                       <Link to={`/plantDetails/${plant.id}`} className="btn bg-green-500 w-full">View Details</Link> 
                     </div>
                   </div>
                 </div>
        </div>
    );
};

export default Indoorplants;