/* eslint-disable react/prop-types */
import { FadeLoader } from "react-spinners";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const {user,loading} = useAuth()
    if(loading){
        return <div className="min-h-[calc(100vh-90px)] flex items-center justify-center">
            <FadeLoader height={30} width={5} color="#36d7b7" />
        </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={location.pathname} />
};

export default PrivateRoutes;