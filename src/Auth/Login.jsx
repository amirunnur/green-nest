
import React, { useContext, useRef, useState } from 'react';
import {  FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../Contex/AuthContex';




const Login = () => {

  const navigate = useNavigate()

  const [show,setShow]=useState(false)
 
   
   const emailRef = useRef(null)

   const {signInWithEmailAndPasswordFunc,signInWithEmailFunc,
     sendPasswordResetEmailFunc,user,setUser
   }=useContext(AuthContext)

 

  const handleSignin=(e)=>{
  e.preventDefault();
  const email = e.target.email?.value;
  const password = e.target.password?.value;
   
  signInWithEmailAndPasswordFunc(email,password)
  .then(res=>{
    setUser(res.user)
    toast.success('Login successful')
    navigate('/')
  })
  .catch(e=>{
    toast.error(e.message)
  })
  
  }
  console.log(user)

   const handleGoogleSignIn =()=>{
  signInWithEmailFunc ()
  .then(res=>{
    console.log(res)
    toast.success('Login successful')
  })
  .catch(e=>{
    console.log(e)
    toast.error(e.message)
  })
  }

  const handleForgetPassword = ()=>{
      const email = emailRef.current.value;
    console.log(email)
      sendPasswordResetEmailFunc(email).then(()=>{
      toast.success('Check your email to reset password')
     }).catch(e=>{
      toast .error(e.message)
     })
    
  }
   
    return (
     
         <div className="min-h-[calc(100vh-20px)] flex items-center justify-center  relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>

      
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 ">
         
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Welcome Back
            </h1>
            <p className="mt-4 text-lg  leading-relaxed">
              Sign in to continue your journey. Manage your account, explore new
              features, and more.
            </p>
          </div>

         
          <div className="w-full max-w-md backdrop-blur-lg  border border-white/20 shadow-2xl rounded-2xl p-8">
            
             
              <form onSubmit={handleSignin} className="space-y-5">
                <h2 className="text-2xl font-semibold mb-2 text-center ">
                  Sign In
                </h2>

                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    ref={emailRef}
                    placeholder="example@email.com"
                    className="input input-bordered w-full bg-white/20   focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm mb-1">Password</label>
                  <input
                   type= {show ? 'text':'password'}
                    name="password"
                    placeholder="••••••••"
                    className="input input-bordered w-full bg-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                 <span onClick={()=>setShow(!show)}  className= "absolute right-2 top-9 cursor-pointer z-50"> 
                  {show?  <FaRegEye /> :<FaRegEyeSlash />} </span>
                </div>
                <button className='hover:underline cursor-pointer'
                 onClick={handleForgetPassword}
                 type='button'
                 >Forget password?</button>
                <button type="submit" className="btn w-full bg-green-500">
                  Login
                </button>

                
                <div className="flex items-center justify-center gap-2 ">
                  <div className="h-px w-16 bg-gray-600 "></div>
                  <span className="text-sm ">or</span>
                  <div className="h-px w-16 bg-gray-600"></div>
                </div>

               
                <button
                 onClick={handleGoogleSignIn}
                  type="button"
                  className="flex items-center justify-center gap-3 bg-gray-200 text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-300 transition-colors cursor-pointer"
                >
                  <img
                    
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5 " 
                  />
                  Continue with Google
                </button>

                <p className="text-center text-sm  mt-3">
                Don't have an account ?{" "}
                  <Link
                    to="/signup"
                    className="text-red-400  underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
             
            
          </div>
        </div>
     
    </div>
    );
};

export default Login;