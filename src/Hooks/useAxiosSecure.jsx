import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials:true
  });

const useAxiosSecure = () => {
    axiosSecure.interceptors.response.use(function(response){
      return response
    },function(error){
      const status = error.response?.status
      console.log(status);
      if(status === 401 || status === 403){
        // logOut()
        // navegate('/login')
      }
      return Promise.reject(error)
    })
    return axiosSecure
}
export default useAxiosSecure