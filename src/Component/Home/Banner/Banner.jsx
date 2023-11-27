import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = () => {
  const [active, setActive] = useState(false);
  const axiosPublic = useAxiosPublic();
  const [query, setQuery] = useState("");

  const { data: courses = [] } = useQuery({
    queryKey: ["search-course", query],
    queryFn: async () => {
      const res = await axiosPublic.get(`/course-search?search=${query}`);
      return res.data;
    },
  });

  const filterCourse = courses?.filter(course=>course.status !== 'panding')

  const handleInput = (event) => {
    setActive(true);
    setQuery(event.target.value);
  };
  return (
    <div className="max-w-2xl mx-auto px-4">
      <h1 className="text-7xl font-bold text-center mt-16">
        Skills speak louder than words
      </h1>
      <p className="text-center mt-5 text-gray-600">
        CodeCrafting Challenge Haven: Embark on a Coding Odyssey, Ignite Your
        Passion, and Elevate Your Skills in the Ultimate Playground for Code
        Enthusiasts and Aspiring Developers
      </p>
      <div className="text-center mt-4 flex max-w-md mx-auto">
        <input
          onChange={handleInput}
          type="text"
          className="border-2 w-full border-black py-3 px-3"
          placeholder="Search Here..."
        />
        <input
          className="text-white bg-black px-7 py-2 cursor-pointer"
          type="button"
          value="Search"
        />
      </div>
      {active && (
        <div className="w-full h-72 bg-black px-3 py-2 overflow-y-auto">
          <div className="text-right mb-3">
            <button
              onClick={() => setActive(false)}
              className="text-red-700 text-2xl"
            >
              <MdOutlineCancel />
            </button>
          </div>
          {filterCourse?.map((course) => (
            <Link key={course._id} to={`/course/${course?._id}`}>
              <div
                key={course._id}
                className="my-2 items-center flex gap-2 text-white border-white border"
              >
                <img src={course?.image} className="h-[70px]" alt="" />
                <div className="whitespace-nowrap w-full overflow-hidden text-ellipsis">
                  <p className="text-lg">{course?.contestName}</p>
                  <p className="whitespace-nowrap text-sm w-full overflow-hidden text-ellipsis">
                    {course?.contestDetails}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Banner;
