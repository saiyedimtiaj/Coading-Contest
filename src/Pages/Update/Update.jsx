import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Update = () => {
    const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const { data: course = [] } = useQuery({
    queryKey: ["course", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/courses/${id}`);
      return res.data;
    },
  });

  const onSubmit = (data) => {
    axiosPublic.patch(`/courses/${id}`,data)
    .then(res=>{
        if(res.data?.modifiedCount > 0){
            console.log(res.data);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Update course information Sucessfully",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-8">
        Update Contest
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3 flex-col md:flex-row">
          <div className="w-full">
            <label htmlFor="name" className="font-bold text-sm">
              Course name
            </label>
            <br />
            <input
              {...register("contestName", { required: true })}
              type="text"
              className="border-2 w-full border-black px-3 py-2"
              defaultValue={course?.contestName}
            />
          </div>
          <div className="w-full">
            <label htmlFor="prize" className="font-bold text-sm">
              Contest Price
            </label>
            <br />
            <input
              {...register("contestPrize", { required: true })}
              type="number"
              className="border-2 w-full border-black px-3 py-2"
              defaultValue={course?.contestPrize}
            />
          </div>
        </div>
        <div className="flex gap-3 flex-col md:flex-row">
          <div className="w-full">
            <label htmlFor="name" className="font-bold text-sm">
              Prize Money
            </label>
            <br />
            <input
              type="number"
              {...register("prizeMoney", { required: true })}
              className="border-2 w-full border-black px-3 py-2"
              defaultValue={course?.prizeMoney}
            />
          </div>
          <div className="w-full">
            <label htmlFor="name" className="font-bold text-sm">
              image
            </label>
            <input
              {...register("image", { required: true })}
              className="border-2 w-full border-black px-3 py-2"
              defaultValue={course?.image}
              type="url"
            />
          </div>
        </div>
        <div className="flex gap-3 flex-col md:flex-row">
          <div className="w-full">
            <label htmlFor="name" className="font-bold text-sm">
              Select Category
            </label>
            <br />
            <select
              {...register("category", { required: true })}
              defaultValue={course?.category}
              className="select  w-full border-2 border-black"
            >
              <option value="App Development">App Development</option>
              <option value="Machine Learning">Machine Learning</option>
            </select>
            {errors.category && <span>This field is required</span>}
          </div>
          <div className="w-full">
            <label htmlFor="name" className="font-bold text-sm">
              Set Dedline
            </label>
            <input
              {...register("dedline", { required: true })}
              className="border-2 w-full border-black px-3 py-2"
              defaultValue={course?.dedline}
              type="date"
            />
          </div>
        </div>
        <div className="flex gap-3 flex-col md:flex-row">
          <div className="w-full">
            <label htmlFor="name" className="font-bold text-sm">
              Description
            </label>
            <textarea
              {...register("description", { required: true })}
              defaultValue={course?.description}
              rows="5"
              className="border-2 w-full border-black px-3 py-2"
            ></textarea>
          </div>
        </div>
        <input
          className="mt-1 px-5 py-3 bg-black text-white font-medium cursor-pointer"
          type="submit"
          value="Update Contest"
        />
      </form>
    </div>
  );
};

export default Update;
