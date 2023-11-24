import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../Component/Shared/GoogleLogin/GoogleLogin";
import { useForm } from "react-hook-form"
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
const image_Hosting_Key = import.meta.env.VITE_Imgbb_Secret;
const image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${image_Hosting_Key}`


const Register = () => {
    const { register,handleSubmit,formState: { errors }, } = useForm();
    const {emailRegister,profileUpdate} = useAuth();
    const navegate = useNavigate()

    const onSubmit = (data) => {
        const name = data.name
        const email = data.email
        const password = data.password
        const imageFile = {image:data.image[0]}
        axios.post(image_Hosting_Api,imageFile,{
            headers: {
                "content-type": "multipart/form-data",
              }
        })
        .then(res=>{
            const image = res.data?.data?.display_url
            emailRegister(email,password)
            .then(()=>{
                profileUpdate(name,image)
                navegate('/')
            })
            .catch(err=>{
                console.log(err.message);
            })
        })


    }

    return (
        <div className="container mx-auto px-5 py-4 flex items-center justify-center lg:flex-row flex-col gap-8 min-h-screen">
        <div className="">
          <h1 className="text-5xl font-semibold ">
          </h1>
          <img
            className="lg:h-[400px]"
            src="../assets/32.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 max-w-sm bg-[#f0eded] px-7 py-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-5">Register Here Now...</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="font-semibold " htmlFor="email">
              Name Here
            </label>{" "}
            <br />
            <input
              type="text"
              {...register("name", { required: true })}
              className="py-1.5 px-3 mb-1 mt-1 w-full rounded-sm"
              placeholder="Enter Your Name"
            />
            {errors.name && <span>This field is required</span>} <br />
            <br />
            <label  className="font-semibold " htmlFor="photo">Photo Url</label>
            <input type="file"  {...register("image", { required: true })} id="" className="mb-1" /><br />
            {errors.image && <span>This field is required</span>} <br />
            <label className="font-semibold " htmlFor="email">
              Your Email
            </label>{" "}
            <input
              type="email"
              {...register("email", { required: true })}
              className="py-1.5 px-3 mb-2 mt-1 w-full rounded-sm"
              placeholder="Enter email here..."
            />
             {errors.email && <span>This field is required</span>} <br />
            <label className="font-semibold " htmlFor="email">
              Password
            </label>{" "}
            <br />
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 16,
                pattern: /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])/,
              })}
              className="py-1.5 px-3 mt-1 w-full rounded-sm"
              placeholder="Enter Password here..."
            />
             {errors.password?.type === "required" && (
            <span>password is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span>password must be 6 chercter</span>
          )}
          {errors.password?.type === "pattern" && (
            <span>
              password must have one uppercase one lowercase, onse Number , one
              Special cheracter{" "}
            </span>
          )}
            <input
              type="submit"
              value="Register"
              className="w-full py-2 rounded bg-green-600 font-medium mt-4 text-white cursor-pointer"
            />
          </form>
          <div className="divider my-2 divider-neutral">Or</div>
          <GoogleLogin/>
          <p className="font-bold mt-1">
            Already Have an Account?
            <Link to="/login" className="text-red-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;