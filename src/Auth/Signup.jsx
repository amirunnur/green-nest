import React from 'react';
import { Link, NavLink } from 'react-router';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../Firebase/firebase.config';
import { toast } from 'react-toastify';


const Signup = () => {
   
    const handleSignup=(e)=>{
        e.preventDefault()
        const email = e.target.email?.value;
        const password = e.target.password?.value;
       
        createUserWithEmailAndPassword(auth,email,password)
        .then(res=>{
            console.log(res)
            toast.success('signup successful')
           
        })
         .catch(e=>{
                toast.error(e.message)
            })
    }


    return (
        <div>
              <div>
                <div className="min-h-[96vh] flex items-center justify-center  relative overflow-hidden">
     
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72  rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>

      
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 ">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Create Your Account
            </h1>
            <p className="mt-4 text-lg leading-relaxed">
              Join our community and unlock exclusive features. Your journey
              begins here!
            </p>
          </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center ">
              Sign Up
            </h2>

            <form onSubmit={handleSignup}  className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full 
                  "
                />
              </div>

              <div  >
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type= "text"
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full "
                />
               <span  className='absolute right-2 top-9cursor-pointer z-50'>
                   
               </span>
              </div>

              <button  type="submit" className="btn w-full bg-green-500 ">
                Sign Up
              </button>

              <div className="text-center mt-3">
                <p className="text-sm">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-red-500 font-medium underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
     
    </div>
        </div>
    
        </div>
    );
};

export default Signup;