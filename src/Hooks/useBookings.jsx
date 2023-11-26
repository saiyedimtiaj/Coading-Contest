import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useBookings = () => {
    const axiosSecure = useAxiosSecure()
    const {user,loading} = useAuth() 
    const {  data:bookings=[] } = useQuery({
      queryKey: ['userBooking'],
      enabled: !loading,
      queryFn:  async () => {
          const res = await axiosSecure.get(`/bookings?email=${user?.email}`)
          return res.data
      }
    })
    return [bookings]
};

export default useBookings;