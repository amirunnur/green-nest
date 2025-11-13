import React from 'react';
import { Link } from 'react-router';


const Login = () => {
   
    return (
     
        <div >
         
            <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col w-[70%] ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
            <button
                  type="button"
                  className="flex items-center justify-center bg-gray-200 gap-3 text-gray-800 px-5 py-2  w-full font-semibold hover:bg-gray-300 transition-colors cursor-pointer"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>
          <Link  className='btn bg-green-500'>Login</Link>
          <p>Don't have an account ? <Link to='/signup' className='p-2 text-red-500 font-semibold'>Signup</Link></p>
        </fieldset>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;