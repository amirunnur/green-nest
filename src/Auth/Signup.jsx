import React from 'react';
import { Link, NavLink } from 'react-router';

const Signup = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col w-[70%] ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Sign up!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="email" className="input" placeholder="name" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Photo Url</label>
          <input type="email" className="input" placeholder="Photo Url" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <Link to='/home'  className='btn bg-green-500'>Signup</Link>
         <p>Already have an account ? <Link to='/login' className='text-red-500 p-2 font-semibold'>Login</Link> </p>
        </fieldset>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Signup;