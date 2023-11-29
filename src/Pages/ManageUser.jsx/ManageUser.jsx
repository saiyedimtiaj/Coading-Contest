import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ManageUserRow from "./ManageUserRow";
import { useEffect, useState } from "react";

const ManageUser = () => {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [size, setSize] = useState(10);
  const pageCount = Math.ceil(count / size);
  const pages = [];
  for (let i = 0; i < pageCount; i++) {
    pages.push(i);
  }
  console.log(pages);

  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["allusers",currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users?skip=${currentPage}&limit=${size}`
      );
      return res.data;
    },
  });
  console.log(count);

  useEffect(() => {
    axiosSecure.get("/userCount").then((res) => {
      setCount(res.data.total);
    });
  }, [axiosSecure]);

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-semibold text-center my-8">
        Manage All Usere
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <ManageUserRow key={user?._id} refetch={refetch} user={user} />
            ))}
          </tbody>
        </table>
        <div className="flex items-center gap-3 mt-4 justify-end">
        <button className="px-3 py-1 text-white bg-black" onClick={handlePrev}>Prev</button>
        <p className="font-semibold">
          Showing {currentPage + 1}-{size * (currentPage + 1)} of {count}
        </p>
        <button className="px-3 py-1 text-white bg-black" onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
};

export default ManageUser;
