import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Counte from "../../Component/Counte/Counte";
import { useState } from "react";
import Model from "../../Component/Shared/Model/Model";
import useAuth from "../../Hooks/useAuth";


const CourseDetails = () => {
    let [isOpen, setIsOpen] = useState(false);
    const {user} = useAuth()
    const {id}= useParams()
    const axiosPublic = useAxiosPublic();
    const {  data:course=[] } = useQuery({
        queryKey: ['course',id],
        queryFn:  async () => {
            const res = await axiosPublic.get(`/courses/${id}`)
            return res.data
        }
      })


      const closeModal = () => {
        setIsOpen(false)
      }

      const bookingInfo = {
        contestName : course?.contestName,
        image:course?.image,
        contestPrize: course?.contestPrize,
        category:course?.category,
        email: user?.email,
        contestId:course?._id,
        participationCount:course?.participationCount
      }


    return (
        <div className="max-w-6xl mx-auto my-14 px-4 flex flex-col lg:flex-row gap-5">
            <div className="lg:w-3/5">
                <img className="w-full" src={course?.image} alt="" />
                <p className="mt-2 text-gray-600">{course?.description}</p>
            </div>
            <div className="space-y-2">
                <h1 className="text-xl font-semibold">CourseName : {course?.contestName}</h1>
                <h1 className="text-2xl font-bold">Attempted : {course?.participationCount}</h1>
                <Counte counter={course?.dedline}/>
                <h1 className="text-xl  font-semibold">Contest Prize: $ {course?.contestPrize}</h1> 
                <button onClick={()=>setIsOpen(true)} className="bg-black px-4 py-2 text-white font-medium" >Register</button>
            </div>
            <Model closeModal={closeModal} isOpen={isOpen} bookingInfo={bookingInfo} />
        </div>
    );
};

export default CourseDetails;