import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user,loading } = useAuth();


  const { data: isAdmin = [],isPending } = useQuery({
    queryKey: ["singleUser",user],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });
  return [isAdmin,isPending];
};

export default useRole;
