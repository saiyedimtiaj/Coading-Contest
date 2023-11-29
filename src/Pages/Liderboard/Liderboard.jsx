import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Liderboard = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [] } = useQuery({
        queryKey: ["liderboard"],
        queryFn: async () => {
          const res = await axiosSecure.get(`/winner-liderboard`);
          return res.data;
        },
      });
      console.log(users);
    return (
        <>
      <h1 className="text-3xl font-semibold text-center my-8">
        Contestor Lider Board
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Contest Name</th>
              <th>Contest Winner</th>
              <th>Winning Price</th>
            </tr>
          </thead>
          <tbody>
            {
                users?.map((user,index)=><tr key={user?._id}>
                    <td>{index+ 1}</td>
                    <td>
                        <img className="w-12 h-12" src={user?.contestInage} alt="" />
                    </td>
                    <td>{user?.contestName}</td>
                    <td>{user?.winnerEmail}</td>
                    <td>{user?.winningPrice}</td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </>
    );
};

export default Liderboard;