import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config'
export   const AuthContext=createContext();
const auth=getAuth(app) 

const AuthProvider = ({children}) => {
   const [user,setUser] = useState({});
   
   const createUser=async (email,password, name, photo)=>{
      await createUserWithEmailAndPassword(auth,email,password);
      // const user = auth.currentUser;
      // console.log("User:--",user)
      // user.updateProfile({displayName:name,photoURL:photo})
      // user.displayName = name
      // user.photoURL = photo
      updateProfile(auth.currentUser, {
         displayName: name, photoURL: photo
       }).then((data) => {
         console.log(data);
       }).catch((error) => {
         console.log(error);
       });
      // console.log(user);
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
     
   //   console.log(currentUser);
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