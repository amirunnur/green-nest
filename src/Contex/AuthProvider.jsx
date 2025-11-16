import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const[loading,setLoading]=useState(true)
    const googleProvider = new GoogleAuthProvider();

    const  updateProfileFunc =(displayName,photoURL)=>{
        return  updateProfile(auth.currentUser,{
            displayName,
            photoURL
        })
    }

    const createUserWithEmailAndPasswordFunc = (email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password)
    };

    const signInWithEmailAndPasswordFunc = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithEmailFunc = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const signOutFunc = ()=>{
        return signOut(auth)
    }
    const sendPasswordResetEmailFunc = (email)=>{
        return sendPasswordResetEmail(auth,email)
    }

    const authInfo ={
        user,
        setUser,
        createUserWithEmailAndPasswordFunc,
        signInWithEmailAndPasswordFunc,
        signInWithEmailFunc ,
        signOutFunc,
         sendPasswordResetEmailFunc,
         updateProfileFunc,
         loading,
         setLoading
    }
    
    useEffect(()=>{
     const unsubscribe =   onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser)
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unsubscribe();
    }
    })
    
    return (
       <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;