import { data } from "autoprefixer";
import { useEffect, useState } from "react";


const Counte = () => {
    const [days,setDays] = useState(0)
    const [hours,setHours] = useState(0)
    const [mins,setMins] = useState(0)
    const [secs,setSecs] = useState(0)

    const dedline = 'November ,27 ,2023'

    const getTime = () => {
        const time = Date.parse(dedline)-Date.now()
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
        setHours(Math.floor(time / (1000 * 60 * 60)%24))
        setMins(Math.floor((time / 1000 / 60)%60))
        setSecs(Math.floor((time / 1000 )%60))
    }

   
    useEffect(()=>{
        const intervel = setInterval(()=>getTime(dedline),1000)
        return () => clearInterval(intervel)
    },[])

    return (
        <div>
            <h1 className="text-3xl font-semibold pt-5 mb-2">Contest End in:</h1>
            <div className="flex gap-3 pb-5">
            <div className="text-center">
                <h1 className="text-xl">Days</h1>
                <p className="text-3xl font-semibold">{days < 10 ? '0'+ days : days }</p>
            </div>
           <div className="text-center">
                <h1 className="text-xl">Hours</h1>
                <p className="text-3xl font-semibold">{hours < 10 ? '0'+ hours : hours }</p>
            </div>
            <div className="text-center">
                <h1 className="text-xl">Minute</h1>
                <p className="text-3xl font-semibold">{mins < 10 ? '0'+ mins : mins }</p>
            </div>
            <div className="text-center">
                <h1 className="text-xl">Secound</h1>
                <p className="text-3xl font-semibold">{secs < 10 ? '0'+ secs : secs }</p>
            </div>
        </div>
        </div>
    );
};

export default Counte;