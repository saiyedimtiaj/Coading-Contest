import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  return (
    <div>
      <button className="flex justify-between w-full items-center rounded my-2 cursor-pointer bg-slate-300 px-3 py-2 text-lg font-medium">
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
