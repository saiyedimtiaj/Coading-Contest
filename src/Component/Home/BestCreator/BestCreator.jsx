import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";

const BestCreator = () => {
  const axiosPublic = useAxiosPublic();
  const { loading } = useAuth();
  const { data: courses = [], isPending } = useQuery({
    queryKey: ["creator-popular"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(
        "/courses?sortby=participationCount&limit=3"
      );
      return res.data;
    },
  });

  if (isPending) {
    return <p>Loading.....</p>;
  }
  return (
    <div className="max-w-5xl mx-auto px-5 my-14">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold">Our Best Contest Creator</h1>
        <p className="text-gray-600 mt-2 mb-7">
          Ignite Ingenuity, Foster Competition, and Showcase Coding Excellence -
          Your Premier Platform for Effortlessly Creating, Hosting, and
          Participating in the Most Dynamic and Diverse Code Contests Imaginable
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses?.map((course) => (
          <div key={course?._id} className="bg-slate-300 rounded-md px-4">
            <div className="pt-5">
              <img
                className="rounded-full w-60 mx-auto h-60 bg-contain border-2 border-black"
                src={course?.creatorImage}
                alt=""
              />
            </div>
            <div className="py-3">
              <h1 className="text-2xl font-bold">
                Name : {course?.creatorName}
              </h1>
              <h1 className="text-lg my-1 font-bold">
                Contest : {course?.contestName}
              </h1>
              <p className="text-gray-600">
                    {course.description.slice(0,80)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestCreator;
