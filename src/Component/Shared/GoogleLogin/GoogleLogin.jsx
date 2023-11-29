import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GoogleLogin = () => {
  const {googleLogin} = useAuth();
  const axiosPublic = useAxiosPublic();
  const navegate = useNavigate();
  const location = useLocation()

  const handleGoogle = () => {
    googleLogin()
    .then(res=>{
      console.log(res.user);
      navegate(location?.state ? location.state : '/')
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login User Sucessfully",
        showConfirmButton: false,
        timer: 1500
      });
      const userInfo ={
        name:res.user.displayName,
        email:res.user.email,
        image:res.user.photoURL,
        role: 'user',
        winningMoney:0
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
