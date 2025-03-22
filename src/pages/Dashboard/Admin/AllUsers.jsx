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
                        <div className="mt-8">
                              {/* Table Header with Borders */}
                              <div className="hidden lg:grid py-4 px-6 uppercase rounded-t-xl text-white bg-[#23b792] text-[18px] font-medium grid-cols-3 justify-between w-full ">
                                    <p>Email</p>
                                    <p className="pl-24">Delete</p>
                                    <p className="pl-[100px]">Role</p>
                              </div>

                              {/* Table Body with Borders */}
                              <div>
                                    {users.map((item) => (
                                          <div key={item?._id} className="lg:border-b lg:border-l lg:border-r  border-[#ddd]">
                                                <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center gap-6 py-4">
                                                      {/* Email Column with Borders */}
                                                      <p className="lg:text-[16px] text-[13px] text-gray-800 font-medium px-4">{item?.email}</p>

                                                      {/* Delete Column */}
                                                      <span
                                                            onClick={() => handleDelete(item?._id)}
                                                            className="cursor-pointer text-red-600 duration-300 hover:text-red-800 px-4 lg:pl-28"
                                                      >
                                                            <RiDeleteBinLine size={20} />
                                                      </span>

                                                      {/* Role Column with Borders */}
                                                      {item.role === "admin" ? (
                                                            <span className="lg:text-[16px] text-[13px] text-gray-900 px-4 lg:pl-[78px]">Admin</span>
                                                      ) : (
                                                            <span
                                                                  onClick={() => handleMakeAdmin(item)}
                                                                  className="cursor-pointer text-blue-600 duration-300 hover:text-blue-800 px-4 lg:pl-[90px]"
                                                            >
                                                                  <GrUserAdmin size={20} />
                                                            </span>
                                                      )}
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>


            </div>
      );
};

export default AllUsers;