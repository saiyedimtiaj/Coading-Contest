import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const {googleLogin} = useAuth();
  const axiosPublic = useAxiosPublic();
  const navegate = useNavigate();

  const handleGoogle = () => {
    googleLogin()
    .then(res=>{
      console.log(res.user);
      navegate('/')
      const userInfo ={
        name:res.user.displayName,
        email:res.user.email,
        image:res.user.photoURL,
        role: 'user'
      }
      axiosPublic.post('/users',userInfo)
      .then(res=>{
        console.log(res.data);
      })
    })
    .catch(err=>{
      console.log(err.message);
    })
  }

  return (
    <div>
      <button onClick={handleGoogle} className="flex justify-between w-full items-center rounded my-2 cursor-pointer bg-slate-300 px-3 py-2 text-lg font-medium">
        <span className="text-3xl">
          <FcGoogle />
        </span>
        <span>Log in with Google</span>
        <span></span>
      </button>
    </div>
  );
};

export default GoogleLogin;
