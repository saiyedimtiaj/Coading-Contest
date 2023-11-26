import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_Hosting_Key = import.meta.env.VITE_Imgbb_Secret;
const image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${image_Hosting_Key}`

const AddContest = () => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure()

  const { register,handleSubmit,formState: { errors }, } = useForm();

  const onSubmit = (data) => {
    const imageFile = {image:data.image[0]}
    axios.post(image_Hosting_Api,imageFile,{
        headers: {
            "content-type": "multipart/form-data",
          }
    })
    .then(res=>{
      const image = res.data?.data?.display_url;
      const courseInfo = {
        contestName:data?.name,
        category:data?.category,
        image:image,
        description:data?.details,
        participationCount: 1,
        dedline:data?.dedline,
        contestPrize:parseInt(data?.contestPrize),
        prizeMoney:parseInt(data?.prizeMoney),
        creatorEmail:user?.email,
        creatorImage:user?.photoURL,
        status: 'panding'
      }
      axiosSecure.post('/courses',courseInfo)
      .then(res=>{
        if(res.data?.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Course Contest Added Sucessfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-8">Add A Contest</h1>
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3 flex-col md:flex-row">
          <div className="w-full">
            <label htmlFor="name" className="font-bold text-sm">
              Course name
            </label>
            <br />
            <input
             {...register("name", { required: true })}
             type="text"
              className="border-2 w-full border-black px-3 py-2"
              placeholder="Course name"
            />
            {errors.name && <span>This field is required</span>} <br />
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
              placeholder="Contest Price"
            />
            {errors.contestPrize && <span>This field is required</span>} <br />
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
              placeholder="Prize Money"
            />
             {errors.prizeMoney && <span>This field is required</span>} <br />
          </div>
          <div className="w-full">
            <label htmlFor="name" className="font-bold text-sm">
              image
            </label>
            <input
             {...register("image", { required: true })}
              className="border-2 w-full border-black px-3 py-2"
              placeholder="Contest Price"
              type="file"
            />
              {errors.image && <span>This field is required</span>} <br />
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
              defaultValue={"App Development"}
              className="select  w-full border-2 border-black"
            >
              <option value='App Development'>App Development</option>
              <option value='Machine Learning'>Machine Learning</option>
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
              placeholder="Contest Price"
              type="date"
            />
             {errors.dedline && <span>This field is required</span>} <br />
          </div>
        </div>
        <div className="flex gap-3 flex-col md:flex-row">
          <div className="w-full">
            <label htmlFor="name" className="font-bold text-sm">
              Description
            </label>
            <textarea
               {...register("details", { required: true })}
              rows="5"
              className="border-2 w-full border-black px-3 py-2"
            ></textarea>
              {errors.details && <span>This field is required</span>} <br />
          </div>
        </div>
        <input
          className="mt-1 px-5 py-3 bg-black text-white font-medium cursor-pointer"
          type="submit"
          value="Add Contest"
        />
      </form>
    </div>
  );
};

export default AddContest;
