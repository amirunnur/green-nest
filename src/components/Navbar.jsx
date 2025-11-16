import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contex/AuthContex';
import { toast } from 'react-toastify';

const Navbar = () => {

  const {user,setUser,signOutFunc,loading } = useContext(AuthContext)
  console.log(user)

  const handleSignOut=()=>{
   signOutFunc().then(() => {
    toast.success('Signout successful')
    setUser(null)
   }).catch(e=>{
     toast.error(e.message)
   })
 }
 console.log(loading)
    return (
        <div >
            <div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/plants'>Plants</NavLink>
        {
      user &&  <NavLink to='/myprofile' className={({isActive})=> isActive ? 'text-blue-600' : ''}>My Profile</NavLink>
    }
      </ul>
    </div>
    <a className="font-bold text-green-700  text-3xl">GreenNest</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3 font-semibold text-green-500 pr-3 ">
     <NavLink to='/' className={({isActive})=> isActive ? 'text-blue-600' : ''}>Home</NavLink>
     <NavLink to='/plants' className={({isActive})=> isActive ? 'text-blue-600' : ''} >Plants</NavLink>
    {
      user &&  <NavLink to='/myprofile' className={({isActive})=> isActive ? 'text-blue-600' : ''}>My Profile</NavLink>
    }
    </ul>
  </div>
  { loading ? 'loading...' :
    user ?  ( <div className='md:ml-100 ml-20 text-center space-y-3'>
              
            
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
{/* For TSX uncomment the commented types below */}
<button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
 <img className='h-10 w-10 rounded-full mx-auto' src={user?.photoURL} alt="" />
</button>

           <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
           popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
      
              <h2 className='text-xl font-semibold'>{user?.displayName}</h2>
              <p className=''>{user?.email}</p>
              <button onClick={handleSignOut}   className='btn bg-green-500'>Sign Out</button>
           </ul>
             </div>

            
            ) :(<div className="navbar-end">
    <Link to='/login' className='btn bg-green-500'>Login</Link>
    <Link to='/signup' className='btn bg-green-500'>Register</Link>
  </div>)
  }
  
  
</div>
        </div>
    );
};

export default Navbar;