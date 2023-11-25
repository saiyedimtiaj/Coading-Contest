import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageUser = () => {
    const axiosSecure = useAxiosSecure()
    const {  data:users=[] } = useQuery({
      queryKey: ['allusers'],
      queryFn:  async () => {
          const res = await axiosSecure.get(`/users`)
          return res.data
      }
    })
    console.log(users);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-8">
        Manage All Usere
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            
            {
                users?.map(user=><tr key={user._id}>
                    <th>
                        <img className="h-10" src={user?.image} alt="" />
                    </th>
                    <th>
                        {user?.name}
                    </th>
                    <th>
                        {user?.email}
                    </th>
                    <tr>
                        {
                            user?.role === 'admin' ? <p className="font-semibold">Admin</p> : <select defaultValue={user?.role} className="border border-black px-3 py-2 font-semibold">
                                <option value="user">User</option>
                                <option value="creator">Creator</option>
                                <option value="admin">Admin</option>
                            </select>
                        }
                    </tr>
                </tr>)
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;