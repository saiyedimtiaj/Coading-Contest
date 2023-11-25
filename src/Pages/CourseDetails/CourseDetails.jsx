import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Counte from "../../Component/Counte/Counte";


const CourseDetails = () => {
    const {id}= useParams()
    const axiosPublic = useAxiosPublic();
    const {  data:course=[] } = useQuery({
        queryKey: ['course',id],
        queryFn:  async () => {
            const res = await axiosPublic.get(`/courses/${id}`)
            return res.data
        }
      })
    return (
        <div className="max-w-6xl mx-auto my-14 px-4 flex flex-col lg:flex-row gap-5">
            <div className="lg:w-3/5">
                <img src={course?.image} alt="" />
                <p className="mt-2 text-gray-600">{course?.contestDetails}</p>
            </div>
            <div className="space-y-2">
                <h1 className="text-xl font-semibold">CourseName : {course?.contestName}</h1>
                <h1 className="text-2xl font-bold">Attempted : {course?.participationCount}</h1>
                <Counte/>
                <h1 className="text-xl  font-semibold">Contest Prize: $ {course?.contestPrize}</h1>
                <button className="bg-black px-4 py-2 text-white font-medium" >Register</button>
            </div>
        </div>
    );
};

export default CourseDetails;