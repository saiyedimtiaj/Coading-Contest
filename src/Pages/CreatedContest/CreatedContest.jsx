import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const CreatedContest = () => {
    const axiosPublic = useAxiosPublic();
    const {user,loading} = useAuth()

    const { data: courses = [] , refetch} = useQuery({
      queryKey: ["creatorContest",user],
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosPublic.get(`/creatorCourses?email=${user?.email}`);
        return res.data;
      },
    });

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


    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-8">My Created Contest</h1>
            <div className="overflow-x-auto">
        <table className="table rounded-none">
          {/* head */}
          <thead className="text-white bg-black">
            <tr>
                <th></th>
                <th>Image</th>
              <th>Name</th>
              <th>Action</th>
              <th>Status</th>
              <th>Submitions</th>
            </tr>
          </thead>
          <tbody>
            {
                courses?.map((course,index)=><tr key={index}>
                    <th>{index+1}</th>
                    <th>
                        <img className="h-10" src={course?.image} alt="" />
                    </th>
                    <th>{course?.contestName}</th>
                    <th>
                        {
                          course?.status === 'approved' ? <p>You Cant edit</p> : <>
                            <button onClick={()=>handleDelete(course?._id)} className="text-2xl p-1 bg-red-600 rounded-sm text-white"><MdDelete/></button>
                       <Link to={`/dashboard/createdcontest/update/${course?._id}`}>
                       <button className="text-2xl p-1 bg-green-600 rounded-sm ml-3 text-white"><FaEdit/></button>
                       </Link>
                          </>
                        }
                    </th>
                    <th><div className="badge badge-neutral">{course?.status}</div></th>
                    <th>
                        <Link to={`/dashboard/submition/${course?._id}`} className="badge badge-accent">
                          See Submition
                        </Link>
                    </th>
                </tr>)
            }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default CreatedContest;