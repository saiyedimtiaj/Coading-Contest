import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useAuth = () => {
    const getAuth = useContext(AuthContext)

    return getAuth
};

export default useAuth;