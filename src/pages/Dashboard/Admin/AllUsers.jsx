import React from 'react';
import DashboardTitle from '../../../components/Dashboard/Sidebar/DashboardTitle';
import useAxiosSecure from '../../../hocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GrUserAdmin } from 'react-icons/gr';

const AllUsers = () => {

      const axiosSecure = useAxiosSecure()
      const { data: users = [], refetch } = useQuery({
            queryKey: ['users'],
            queryFn: async () => {
                  const res = await axiosSecure.get('/users');
                  return res.data
            }
      })



      return (
            <div>
                  <DashboardTitle role={"Admin"} action={"ALL Users"} />
                  <div>
                        <div className="mt-8">
                              <div className="hidden py-4 px-4 uppercase rounded-t-xl  text-white bg-[#23b792] lg:grid  text-xl font-medium grid-cols-5 justify-between w-full ">
                                    <p>SL.No</p>
                                    <p>Name</p>
                                    <p>Email</p>
                                    <p className="pl-24">Delete</p>
                                    <p className="pl-24">Role</p>
                              </div>
                              <div>
                                    {users.map((item, index) => (
                                          <div key={item?._id}>
                                                <div className="w-full grid grid-cols-1 md:grid-cols-5 items-center  gap-6 py-4 border lg:border-none mt-2 lg:mt-0 px-4 lg:px-0">

                                                      <p className="ml-6 text-lg hidden md:block">{index + 1}</p>
                                                      <p className="lg:text-lg text-[15px] tracking-wide text-gray-800 font-medium">{item?.name}</p>
                                                      <p className="lg:text-lg text-[13px] tracking-wide text-gray-800 font-medium">{item?.email}</p>
                                                      <span onClick={() => handleDelete(item?._id)} className="cursor-pointer duration-300 text-red-600 lg:ml-24"><RiDeleteBinLine size={25} /></span>
                                                      {
                                                            item.role === "admin" ? <span className="lg:ml-[74px] lg:text-lg text-[15px]">Admin</span> : <span onClick={() => handleMakeAdmin(item)} className="cursor-pointer text-blue-600 duration-300 lg:ml-20"> <GrUserAdmin size={25} className="text-start" /></span>
                                                      }
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