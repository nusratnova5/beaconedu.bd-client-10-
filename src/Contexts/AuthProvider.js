import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../Firebase/Firebase.config'
export   const AuthContext=createContext();
const auth=getAuth(app) 

const AuthProvider = ({children}) => {
   const [user,setUser]=useState({});
   
   const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
   }

   const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
   }

   const githubLogIn=(provider)=>{
      return signInWithPopup(auth,provider);
   }

   const googleLogIn=(provider)=>{
      return signInWithPopup(auth,provider);
   }

   const logOut =()=>{
    return signOut(auth);
   }
   
   useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser=>{
     
     console.log(currentUser);
     setUser(currentUser);
    })
    return ()=>{
     unsubscribe();
    }
 },[])

    const authInfo={user,createUser,logIn,githubLogIn,googleLogIn,logOut}

    return (
        <AuthContext.Provider value ={authInfo}>
          {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;