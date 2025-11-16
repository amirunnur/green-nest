import React, { useContext } from 'react';
import { AuthContext } from '../Contex/AuthContex';
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const MyProfile = () => {
    const {user,setUser,signOutFunc} = useContext(AuthContext)

     const handleSignOut=()=>{
       signOutFunc().then(() => {
        toast.success('Signout successful')
        setUser(null)
       }).catch(e=>{
         toast.error(e.message)
       })
     }
    return (
        <div className='min-h-screen'>
           {
    user ?  ( 
              
            
       <div className='text-center space-y-3 mt-10'>
              <img className='h-20 w-20 rounded-full mx-auto' src={user?.photoURL || 'https://via.placeholder.com'} alt="" />
              <h2 className='text-xl font-semibold'>{user?.displayName}</h2>
              <p className=' '>{user?.email}</p>
              <button onClick={handleSignOut} className='btn bg-green-500'>Sign Out</button>

             </div>
            

            
            ) :(<div className="flex justify-center items-center mt-10">
              <p className='text-2xl font-bold p-3'>Please Log in to your Account or if you do not have an Account create an Account  </p>
    <Link to='/login' className='btn bg-green-500'>Login</Link>
    <Link to='/signup' className='btn bg-green-500'>Register</Link>
  </div>)
  }
        </div>
    );
};

export default MyProfile;