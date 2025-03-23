import React from 'react';
import DashboardTitle from '../../../components/Dashboard/Sidebar/DashboardTitle';
import useAxiosSecure from '../../../hocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GrUserAdmin } from 'react-icons/gr';
import toast from 'react-hot-toast';
import Swal from "sweetalert2";

const AllUsers = () => {

      // Data load
      const axiosSecure = useAxiosSecure()
      const { data: users = [], refetch } = useQuery({
            queryKey: ['users'],
            queryFn: async () => {
                  const res = await axiosSecure.get('/users');
                  return res.data
            }
      })

      // Admin Role Toggle
      const handleMakeAdmin = async (user) => {
            try {
                  const res = await axiosSecure.patch(`/users/admin/${user._id}`);
                  if (res.data.modifiedCount > 0) {
                        toast.success(`${user.email}, is now an Admin!`);
                        refetch();
                  } else {
                        toast.error("Admin Error. Try again!");
                  }
            } catch (error) {
                  toast.error("Something went wrong!");
            }
      };


      // User Delete
      const handleDelete = id => {
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                  if (result.isConfirmed) {
                        axiosSecure.delete(`/users/${id}`)
                              .then(res => {
                                    if (res?.data.deletedCount > 0) {
                                          refetch()
                                          Swal.fire({
                                                title: "Deleted!",
                                                text: "User Deleted Successfully!",
                                                icon: "success"
                                          });
                                    }
                              })
                  }
            });

      }


      return (
            <div>
                  <DashboardTitle role={"Admin"} action={"ALL Users"} />
                  <div className='max-w-screen-md'>


                        <div className="mt-8 max-w-screen-lg">
                              {/* Table Header */}
                              <div className="hidden lg:grid py-4 px-6 uppercase bg-[#23b792] text-white text-[18px] font-medium
            grid-cols-[80px_1fr_120px_120px] text-center rounded-t-xl">
                                    <p>SL. No</p>
                                    <p>Email</p>
                                    <p>Delete</p>
                                    <p>Role</p>
                              </div>

                              {/* Table Body */}
                              <div className="border border-[#ddd] rounded-b-xl overflow-hidden">
                                    {users.map((item, index) => (
                                          <div key={item?._id}
                                                className="grid grid-cols-1 md:grid-cols-[80px_1fr_120px_120px] 
                        items-center gap-4 py-4 px-6 border-b border-[#ddd] text-center bg-white hover:bg-gray-100 transition">

                                                {/* SL No */}
                                                <p className="text-[16px] font-medium bg-[#ddf4f0] rounded-full py-1 px-3 text-gray-700 mx-auto">
                                                      {index + 1}
                                                </p>

                                                {/* Email Column */}
                                                <p className="text-gray-800 font-medium text-[16px]">{item?.email}</p>

                                                {/* Delete Button */}
                                                <span
                                                      onClick={() => handleDelete(item?._id)}
                                                      className="cursor-pointer text-red-600 duration-300 hover:text-red-800 flex justify-center">
                                                      <RiDeleteBinLine size={22} />
                                                </span>

                                                {/* Role Column */}
                                                {item.role === "admin" ? (
                                                      <span className="text-gray-900 font-medium">Admin</span>
                                                ) : (
                                                      <span
                                                            onClick={() => handleMakeAdmin(item)}
                                                            className="cursor-pointer text-blue-600 duration-300 hover:text-blue-800 flex justify-center">
                                                            <GrUserAdmin size={22} />
                                                      </span>
                                                )}
                                          </div>
                                    ))}
                              </div>
                        </div>


                  </div>


            </div>
      );
};

export default AllUsers;