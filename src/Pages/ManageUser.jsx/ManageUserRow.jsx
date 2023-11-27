/* eslint-disable react/prop-types */

import { useState } from "react";
import ManageUserModel from "../../Component/Shared/Model/ManageUserModel";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUserRow = ({ user, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState(user?.role);
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSelect = (event) => {
    setUserRole(event.target.value);
  };

  const handleRole = () => {
    axiosSecure.patch(`/users/${user?._id}`, { role: userRole }).then((res) => {
      if (res.data.modifiedCount > 0) {
        setIsOpen(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Contest is now Approved",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <tr>
      <th>
        <img className="h-10" src={user?.image} alt="" />
      </th>
      <th>{user?.name}</th>
      <th>{user?.email}</th>
      <th>
        {user?.role === "admin" ? (
          <div className="badge badge-success gap-2">Admin</div>
        ) : (
          <>
          <div className="badge badge-info mr-2">{user?.role}</div>
          <div onClick={()=>setIsOpen(true)} className="badge cursor-pointer badge-neutral">Update</div>
          </>
        )}
      </th>
      <ManageUserModel
        handleRole={handleRole}
        handleSelect={handleSelect}
        user={user}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </tr>
  );
};

export default ManageUserRow;
