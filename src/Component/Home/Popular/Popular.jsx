import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import {useQuery} from '@tanstack/react-query'
import useAuth from "../../../Hooks/useAuth";

const Popular = () => {
    const axiosPublic = useAxiosPublic();
    const {loading} = useAuth()
    const {  data:courses=[],isPending } = useQuery({
        queryKey: ['allcourse'],
        enabled: !loading,
        queryFn:  async () => {
            const res = await axiosPublic.get('/courses?sortby=participationCount&limit=5')
            return res.data
        }
      })

      if(isPending){
        return <p>Loading.....</p>
      }

      const filterCourse = courses?.filter(course=>course.status !== 'panding')
    
    return (
        <div className="container mx-auto px-4 mt-20">
            <h1 className="text-3xl font-bold">Popular Contest</h1>
            <hr className="border-2 border-green-700 max-w-[250px] rounded-sm mt-1 mb-4" />
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5 my-5">
                {
                    filterCourse?.map(course=><div key={course?._id} className="flex flex-col md:flex-row items-center  border-black border">
                        <img className="w-full md:w-1/2 h-full" src={course?.image} alt="" />
                        <div className="px-2 py-4 space-y-1">
                            <h1 className="text-xl font-semibold">{course?.contestName}</h1>
                            <p>{course?.description.slice(0,60)}...</p>
                            <h1 className="text-lg font-semibold">Attempted : {course?.participationCount}</h1>
                            <Link to={`/course/${course?._id}`}>
                            <button className="bg-blue-600 text-white px-6 py-1.5 font-medium">Datails</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Popular;