import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useWinner = () => {
    const {user,loading} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {  data:winningInfo=[] } = useQuery({
        queryKey: ['winning-info'],
        enabled: !loading,
        queryFn:  async () => {
            const res = await axiosSecure.get(`/winners?email=${user?.email}`)
            return res.data
        }
      })
    return [winningInfo]
};

export default useWinner;