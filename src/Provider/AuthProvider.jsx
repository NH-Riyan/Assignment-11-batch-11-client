import React, { useEffect, useState } from 'react';
import Authcontext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {

    const[user,Setuser]=useState(null)
    const[loading,Setloading]=useState(true)

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
            Setuser(currentUser)
            Setloading(false)
        })
        return()=>unsubscribe()
    },[])

    const SignUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const SignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const LoginInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
     }

     const LogOut=()=>{
        return signOut(auth);
    }

    const AuthData={
      SignUp,
      SignIn,
      LoginInWithGoogle,
      LogOut,
      loading,
      user
    }

    return <Authcontext value={AuthData}>{children}</Authcontext>
};

export default AuthProvider;