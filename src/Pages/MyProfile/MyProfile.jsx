import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
const image_Hosting_Key = import.meta.env.VITE_Imgbb_Secret;
const image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${image_Hosting_Key}`

const MyProfile = () => {
    const {user,profileUpdate} = useAuth()
    const { register,handleSubmit,formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        const name  = data?.name;
        const imageFile = {image:data.image[0]}
        axios.post(image_Hosting_Api,imageFile,{
            headers: {
                "content-type": "multipart/form-data",
              }
        })
        .then(res=>{
            const image = res.data?.data?.display_url
            console.log(image);
            profileUpdate(name,image)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Update User Information Sucessfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
        })
    }

    return (
        <div>
            <div className="max-w-sm px-5 py-4 rounded-md bg-amber-100">
                <h1 className="text-2xl font-semibold text-center">Update Profile</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                    <label htmlFor="image" className="font-semibold">Update Image</label>
                    <input type="file" className=""  {...register("image", { required: true })} /><br />
                    {errors.image && <span>This field is required</span>} <br />
                    <label htmlFor="image" className="font-semibold">Update Name</label>
                    <input defaultValue={user?.displayName}  {...register("name", { required: true })} type="text" className="px-3 py-1 mt-1 mb-2 border-2 border-black w-full" />
                    {errors.name && <span>This field is required</span>} <br />
                    <div className="text-center">
                        <button className="px-5 py-2 bg-blue-600 text-white font-medium">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;