import { createContext, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
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
    const authInfo = {
        registerUser,
        loginUser,
        user,
        SetUser,
        googleLogin,
        facebookLogin
    }

    return (
        <div>
           <AuthContex.Provider value={authInfo}>
              {children}
           </AuthContex.Provider>
        </div>
    );
};

export default AuthProvider;