import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import ProfileChart from "../../Component/ProfileChart/ProfileChart";

const MyProfile = () => {
  const { user, profileUpdate } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data?.name;
    const image = data?.image;
    console.log(name,image);
    Swal.fire({
        title: "Are you sure?",
        text: "You you sure to update your profile",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Update it!"
      }).then((result) => {
        if (result.isConfirmed) {
           profileUpdate(name,image)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Profile is update sucessfully",
                showConfirmButton: false,
                timer: 1500
              });
        }
      });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10">
      <div className="max-w-sm px-5 py-4 rounded-md bg-amber-100">
        <h1 className="text-2xl font-semibold text-center border-b-2 mb-3 pb-1 border-black">Update Profile</h1>
        <div className="mt-1">
            <img className="h-40 w-40 mx-auto" src={user?.photoURL} alt="" />
            <h1 className="text-xl font-bold mt-1 text-center">Name : {user?.displayName}</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
          <label htmlFor="image" className="font-semibold">
            Update Image
          </label>
          <input
            defaultValue={user?.photoURL}
            {...register("image", { required: true })}
            type="url"
            className="px-3 py-1 mt-1 mb-2 border-2 border-black w-full"
          />
          <br />
          <label htmlFor="image" className="font-semibold">
            Update Name
          </label>
          <input
            defaultValue={user?.displayName}
            {...register("name", { required: true })}
            type="text"
            className="px-3 py-1 mt-1 mb-2 border-2 border-black w-full"
          />
          {errors.name && <span>This field is required</span>} <br />
          <div className="text-center">
            <button className="px-5 py-2 bg-blue-600 text-white font-medium">
              Update
            </button>
          </div>
        </form>
      </div>
      <div>
        <ProfileChart />
      </div>
    </div>
  );
};

export default MyProfile;
