/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from '../Config/Firebase.config'


export const AuthContext = createContext([])

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)

    const emailRegister = (email,password) => {
        setLoading(true);
        return  createUserWithEmailAndPassword(auth,email,password)
    }

    const profileUpdate = (name,image) => {
        setLoading(true);
        updateProfile(auth.currentUser,{
            displayName: name, 
            photoURL: image
        })
    }

    const logInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const userInfo ={
        user,
        loading,
        emailRegister,
        profileUpdate,
        logInUser,
        logOut
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('user is----->',currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    },[])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;