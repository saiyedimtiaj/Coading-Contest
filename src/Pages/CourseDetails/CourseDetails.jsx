import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Counte from "../../Component/Counte/Counte";
import { useState } from "react";
import Model from "../../Component/Shared/Model/Model";
import useAuth from "../../Hooks/useAuth";
import WinnerDetails from "../../Component/WinnerDetails/WinnerDetails";
import Swal from "sweetalert2";


const CourseDetails = () => {
    const [days,setDays] = useState(0)
    const [hours,setHours] = useState(0)
    const [mins,setMins] = useState(0)
    const [secs,setSecs] = useState(0)


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

      const handleOpen = () => {
        if(Date.parse(course?.dedline) > Date.now()){
           return setIsOpen(true)
        }
        Swal.fire({
            position: "center",
            icon: "error",
            title: "The Contest is already End!!",
            showConfirmButton: false,
            timer: 1500
          });
      }


      const closeModal = () => {
        setIsOpen(false)
      }

      const bookingInfo = {
        contestName : course?.contestName,
        image:course?.image,
        contestPrize: course?.contestPrize,
        category:course?.category,
        name:user?.displayName,
        userImage:user?.photoURL,
        email: user?.email,
        contestId:course?._id,
        participationCount:course?.participationCount,
        dedline:course?.dedline
      }

      const getTime = () => {
        const time = Date.parse(course?.dedline)-Date.now()
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
        setHours(Math.floor(time / (1000 * 60 * 60)%24))
        setMins(Math.floor((time / 1000 / 60)%60))
        setSecs(Math.floor((time / 1000 )%60))
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
                {
                    Date.parse(course?.dedline) > Date.now() ? <Counte getTime={getTime} days={days} hours={hours} mins={mins} secs={secs} dedline={course?.dedline}/> :
                    <WinnerDetails name={course?.winnerName} image={course?.winnerImage} />
                }
                <h1 className="text-xl  font-semibold">Contest Prize: $ {course?.contestPrize}</h1> 
                <button onClick={handleOpen} className="bg-black px-4 py-2 text-white font-medium" >Register</button>
            </div>
            <Model closeModal={closeModal} isOpen={isOpen} bookingInfo={bookingInfo} />
        </div>
    );
};

export default CourseDetails;