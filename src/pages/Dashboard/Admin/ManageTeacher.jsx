import React from 'react';
import DashboardTitle from '../../../components/Dashboard/Sidebar/DashboardTitle';
import useTeacher from '../../../hocks/useInstructors';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hocks/useAxiosSecure';

const ManageTeacher = () => {
      const [teacher, loading, refetch] = useTeacher();
      const axiosSecure = useAxiosSecure()

      // Teacher Delete
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
                        axiosSecure.delete(`/teacher/${id}`)
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
                  <DashboardTitle role={"Admin"} action={"Manage Teacher"} />
                  <div className='mt-8'>
                        <div className="mt-8 max-w-screen-lg">

                              {/* Table Header */}
                              <div className="hidden lg:grid py-4 px-6 uppercase bg-[#23b792] text-white text-[18px] font-medium
                        grid-cols-[80px_120px_1fr_150px_100px_100px] text-center rounded-t-xl">
                                    <p>SL. No</p>
                                    <p>Image</p>
                                    <p>Name</p>
                                    <p>Experience</p>
                                    <p>Delete</p>
                                    <p className='lg:ml-4'>Edit</p>
                              </div>

                              {/* Table Body */}
                              <div className="border border-[#ddd] rounded-b-xl overflow-hidden">
                                    {teacher.length === 0 ? (
                                          <div className="text-center py-6 text-gray-600 font-medium text-lg">
                                                <img src={'https://i.ibb.co.com/MxrX4hmV/empty-Cart.png'} alt="img" className='mx-auto h-20' />
                                                <h1 className='mt-2 text-sm tracking-wide'>Data Not Found</h1>
                                          </div>
                                    ) : (
                                          teacher.map((item, index) => (
                                                <div key={item?._id}
                                                      className="grid grid-cols-1 md:grid-cols-[80px_150px_1fr_150px_100px_100px] 
                                        items-center gap-6 py-4 px-4 border-b border-[#ddd] text-center bg-white hover:bg-gray-100 transition">

                                                      {/* Serial Number */}
                                                      <p className="text-[16px] font-medium bg-[#ddf4f0] rounded-full py-1 px-3 text-gray-700 mx-auto">
                                                            {index + 1}
                                                      </p>

                                                      {/* Image */}
                                                      <div className="flex justify-center">
                                                            <img src={item?.image} alt="img" className="h-20 w-20 rounded-full shadow-md" />
                                                      </div>

                                                      {/* Name */}
                                                      <h1 className="text-gray-800 font-medium text-[18px]">{item?.teachername}</h1>

                                                      {/* Experience (Increased Size) */}
                                                      <h1 className="text-gray-900 font-medium lg:ml-[50px]">{item?.experience}</h1>

                                                      {/* Delete Button */}
                                                      <span
                                                            onClick={() => handleDelete(item?._id)}
                                                            className="cursor-pointer text-red-600 duration-300 hover:text-red-800 flex justify-center lg:ml-4">
                                                            <RiDeleteBinLine size={22} />
                                                      </span>
                                                      {/* Edit Button */}
                                                      <Link to={`/dashboard/teacher/${item._id}`}>
                                                            <span className="cursor-pointer text-blue-600 duration-300 hover:text-blue-800 flex justify-center">
                                                                  <FiEdit size={22} />
                                                            </span>
                                                      </Link>
                                                </div>
                                          ))
                                    )}
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ManageTeacher;
