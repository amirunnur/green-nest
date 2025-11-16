import React, { useContext } from 'react';
import { AuthContext } from '../Contex/AuthContex';
import { Navigate, useLocation } from 'react-router';

const PrivateRought = ({children}) => {

    const{user}=useContext(AuthContext)

   const location = useLocation()
   console.log(location)

    if(!user){
        return <Navigate to='/login' state={location.pathname}></Navigate>
    }

    return children
    
};

export default PrivateRought;