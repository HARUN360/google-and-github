import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from './../layout/firebase.config';

export const AuthContex = createContext(null)


const AuthProvider = ({children}) => {
    const facebookProveider = new FacebookAuthProvider()
    const googleProvider = new GoogleAuthProvider()
    const [user, SetUser] = useState(null);
   
    const registerUser = (email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
     return   signInWithEmailAndPassword(auth, email, password)
      
    }
     
    const googleLogin = () => {
       return signInWithPopup(auth, googleProvider)
    }
    const facebookLogin = () => {
        return signInWithPopup(auth, facebookProveider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        registerUser,
        loginUser,
        user,
        SetUser,
        googleLogin,
        facebookLogin,
        logOut,
    }
   useEffect(()=>{
 const unsubScribar = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
         SetUser(currentUser);
        } else {
           SetUser(null);
        }
      });
      return () => {
        unsubScribar()
      }
   },[])
    return (
        <div>
           <AuthContex.Provider value={authInfo}>
              {children}
           </AuthContex.Provider>
        </div>
    );
};

export default AuthProvider;