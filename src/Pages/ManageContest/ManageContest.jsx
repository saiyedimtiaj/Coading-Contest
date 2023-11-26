import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";

const ManageContest = () => {
    const axiosPublic = useAxiosPublic();
    const {loading} = useAuth()
    const {  data:courses=[],refetch } = useQuery({
        queryKey: ['allcourse'],
        enabled: !loading,
        queryFn:  async () => {
            const res = await axiosPublic.get('/courses')
            return res.data
        }
      })

      const handleDelete = (id) => {
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
              axiosPublic.delete(`/courses/${id}`)
              .then(res=>{
                if(res.data?.deletedCount > 0){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Course delete sucessfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
                }
              })
            }
          });
    }

    const handleUpdate = (id) => {
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
                axiosPublic.put(`/courses/${id}`)
                .then(res=>{
                    if(res.data.modifiedCount > 0){
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Contest is now Approved",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          refetch()
                    }
                })
            }
          });
    }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-8">
        All Contest
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-black text-white">
            <tr>
                <th></th>
              <th>Contest Name</th>
              <th>Creator Email</th>
              <th>Delete</th>
              <th>Accpect contest</th>
            </tr>
          </thead>
          <tbody>
            
            {
                courses.map((course,index)=><tr key={index}>
                    <th>{index+1}</th>
                    <th>{course?.contestName}</th>
                    <th>{course?.creatorEmail}</th>
                    <th> <button onClick={()=>handleDelete(course?._id)} className="text-2xl p-1 bg-red-600 rounded-sm text-white"><MdDelete/></button></th>
                    <th>
                        {course?.status === 'panding' && <p onClick={()=>handleUpdate(course?._id)}  className="badge cursor-pointer badge-neutral">{course?.status}</p> }
                        {course?.status === 'approved' && <p  className="badge badge-success">approved</p> }
                    </th>
                </tr>)
            }
            
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageContest;
