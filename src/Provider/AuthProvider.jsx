/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../Config/Firebase.config'
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext([])
const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

    const emailRegister = (email,password) => {
        setLoading(true);
        return  createUserWithEmailAndPassword(auth,email,password)
    }

    const googleLogin = ()=> {
        setLoading(true);
        return signInWithPopup(auth,provider)
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
        logOut,
        googleLogin
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('user is----->',currentUser);
            setUser(currentUser);
            const userEmail = {email:currentUser?.email};
            setLoading(false)
            // if(currentUser){
            //     axiosPublic.post('/jwt',userEmail)
            //     .then(res=>{
            //         console.log(res.data);
            //     })
            //     .catch(err=>{
            //         console.log(err.message);
            //     })
            // }
            // else{
            //     axiosPublic.post('/logout')
            //     .then(res=>{
            //         console.log(res.data);
            //     })
            // }
        })
        return () => {
            return unSubscribe()
        }
    },[axiosPublic])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;