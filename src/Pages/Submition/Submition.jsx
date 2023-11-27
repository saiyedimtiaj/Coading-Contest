import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Submition = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const {id} = useParams();

    const {  data:course=[],refetch } = useQuery({
        queryKey: ['contest-winner-selection',id],
        queryFn:  async () => {
            const res = await axiosPublic.get(`/courses/${id}`)
            return res.data
        }
      })


    const { data: bookings = []} = useQuery({
      queryKey: ["creator-bookings",],
      queryFn: async () => {
        const res = await axiosSecure.get(`/bookings/${id}`);
        return res.data;
      },
    });



    const handleSelectWinner = (userInfo) =>{
        if(course?.winnerName){
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Winner is Already Declard",
                showConfirmButton: false,
                timer: 1500
              });
        }else{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.patch(`/select-winner/${userInfo.contestId}`,userInfo)
                    .then(res=>{
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                              position: "center",
                              icon: "success",
                              title: "The winner declard id Done",
                              showConfirmButton: false,
                              timer: 1500,
                            });
                            refetch();
                          }
                    })
                }
              });
        }
    }

    

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">
        Select The Winner
      </h1>
      <div className="overflow-x-auto">
        <table className="table rounded-none">
          {/* head */}
          <thead className="text-white bg-black">
            <tr>
              <th></th>
              <th>Contest Name</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Select Winner</th>
            </tr>
          </thead>
          <tbody>
                {
                    bookings?.map((booking,index)=><tr key={booking?._id}>
                        <th>{index+1}</th>
                        <th>{booking?.contestName}</th>
                        <th>{booking?.name}</th>
                        <th>{booking?.email}</th>
                        <th><div onClick={()=>handleSelectWinner(booking)} className="badge badge-secondary cursor-pointer">Winner</div></th>
                    </tr>)
                }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Submition;
