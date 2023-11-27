/* eslint-disable react/prop-types */

import { useEffect } from "react";



const Counte = ({days,hours,mins,secs,dedline,getTime}) => {
   
    useEffect(()=>{
        const intervel = setInterval(()=>getTime(dedline),1000)
        return () => clearInterval(intervel)
    },[dedline,getTime])

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