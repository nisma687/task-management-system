

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config";
import { createContext, useEffect, useState } from "react";
const auth = getAuth(app);
export const AuthContext= createContext(); 
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const login=(email,password)=>{
        setLoading(true);
        setError(null);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logout=()=>{
        setUser(null);
        setLoading(false);
        setError(null);
        return signOut(auth);
    }
    const createUser=(email,password)=>{
        setLoading(true);
        setError(null);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logInWithGoogle=()=>{
        setLoading(true);
        setError(null);
        return signInWithPopup(auth,provider);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser);
                console.log(currentUser);
                setLoading(false);
            }else{
                setUser(null);
                setLoading(false);
            }
        })
        return unsubscribe;
    },[])

    const authInfo={logInWithGoogle,login,logout,createUser,user,loading,error};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;