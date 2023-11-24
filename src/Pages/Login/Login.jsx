import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../Component/Shared/GoogleLogin/GoogleLogin";
import { useForm } from "react-hook-form"
import useAuth from "../../Hooks/useAuth";

const Login = () => { 
    const { register,handleSubmit, formState: { errors }, } = useForm();
    const {logInUser} = useAuth();
    const navegate = useNavigate()

    const onSubmit = (data) => {
      logInUser(data.email,data.password)
      .then(()=>{
        navegate('/')
      })
      .catch(err=>{
        console.log(err.message);
      })
    }

  return (
    <div className="container mx-auto px-5 my-7 flex items-center justify-center lg:flex-row flex-col gap-8">
      <div className="">
        <h1 className="text-5xl font-semibold ">
          Hey there! <br /> Welcome back
        </h1>
        <img
          className="lg:h-[400px]"
          src="../assets/48.jpg"
          alt=""
        />
      </div>
      <div className="flex-1 max-w-sm bg-[#f0eded] px-7 py-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-5">Sign In</h1>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <label className="font-bold " htmlFor="email">
            Your Email
          </label>{" "}
          <br />
          <input
            type="email"
            {...register("email", { required: true })}
            className="py-2 px-3 mb-3 mt-1 w-full rounded-sm"
            placeholder="Enter email here..."
          />
          {errors.email && <span>This field is required</span>} <br />
          <label className="font-bold " htmlFor="email">
            Password
          </label>{" "}
          <br />
          <input
            type="password"
            {...register("password", { required: true })}
            className="py-2 px-3 mt-1 w-full rounded-sm"
            placeholder="Enter Password here..."
          />
          {errors.password && <span>This field is required</span>}
          <input
            type="submit"
            value="Sign In"
            className="w-full py-3 rounded bg-green-600 font-medium mt-5 text-white cursor-pointer text-lg"
          />
        </form>
        <div className="divider my-3 divider-neutral">Or</div>
        <GoogleLogin/>
        <p className="font-bold mt-1">
          Dont have any Account?
          <Link to="/register" className="text-red-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
