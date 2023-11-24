import { useState } from "react";

const Banner = () => {
  // const [active,setActive]= useState(false)

  // const handleInput = () => {
  //   setActive(true)
  // }
  return (
    <div className="max-w-2xl mx-auto px-4">
      <h1 className="text-7xl font-bold text-center mt-16">
        Skills speak louder than words
      </h1>
      <p className="text-center mt-5 text-gray-600">
      CodeCrafting Challenge Haven: Embark on a Coding Odyssey, Ignite Your Passion, and Elevate Your Skills in the Ultimate Playground for Code Enthusiasts and Aspiring Developers
      </p>
      <div className="text-center mt-4 flex max-w-md mx-auto">
        <input type="text" className="border-2 w-full border-black py-3 px-3" placeholder="Search Here..." />
        <input className="text-white bg-black px-7 py-2 cursor-pointer" type="button" value="Search" />
      </div>
     {/* {
      active &&  <div className="w-full h-72 bg-black">

      </div>
     } */}
    </div>
  );
};

export default Banner;
