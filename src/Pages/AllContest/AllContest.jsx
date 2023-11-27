import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { useState } from "react";


const AllContest = () => {
    const axiosPublic = useAxiosPublic();
    const [category,setCategory] = useState('App Development')
    const {  data:courses=[] } = useQuery({
        queryKey: ['course',category],
        queryFn:  async () => {
            const res = await axiosPublic.get(`/courses?category=${category}`)
            return res.data
        }
      })

      const Allcategoryes = ["App Development","UI/UX Development","Web Development"];

      const handleCategory = (name) =>{
        setCategory(name)
      }

      const filterCourse = courses?.filter(course=>course.status !== 'panding')

    return (
        <div className="max-w-7xl mx-auto">
            <img className="w-full h-[500px]" src="../assets/html-system-website-concept.jpg" alt="" />
            <div className="px-4 mt-16">
                <div className="text-center space-x-2">
                   {
                    Allcategoryes?.map((category,index)=><button onClick={()=>handleCategory(category)} key={index} className="px-5 py-2 m-2 bg-green-600 font-medium text-white">
                        {category}
                    </button>)
                   }
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5 my-5">
                {
                    filterCourse?.map(course=><div key={course?._id} className="flex flex-col md:flex-row items-center  border-black border">
                        <img className="w-full md:w-1/2 h-full" src={course?.image} alt="" />
                        <div className="px-2 py-4 space-y-1">
                            <h1 className="text-xl font-semibold">{course?.contestName}</h1>
                            {/* <p>{course?.contestDetails.slice(0,60)}...</p> */}
                            <h1 className="text-lg font-semibold">Attempted : {course?.participationCount}</h1>
                            <Link to={`/course/${course?._id}`}>
                            <button className="bg-blue-600 text-white px-6 py-1.5 font-medium">Datails</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
            </div>
        </div>
    );
};

export default AllContest;