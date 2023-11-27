import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ManageUserRow from "./ManageUserRow";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [],refetch } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  return (
    <>
      <h1 className="text-3xl font-semibold text-center my-8">
        Manage All Usere
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <ManageUserRow key={user?._id} refetch={refetch} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUser;
