import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials:true
  });

const useAxiosSecure = () => {
  const {logOut} = useAuth()
  const navegate = useNavigate()

  axiosSecure.interceptors.response.use(function(response){
    return response
  },function(error){
    const status = error.response?.status
    if(status === 401 || status === 403){
      logOut()
      navegate('/login')
    }
    return Promise.reject(error)
  })

    return axiosSecure
}
export default useAxiosSecure