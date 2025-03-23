import React from 'react';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from 'react-icons/ri';
import DashboardTitle from '../../../components/Dashboard/Sidebar/DashboardTitle';
import useCourse from '../../../hocks/useCourse';
import useAxiosSecure from '../../../hocks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageCourse = () => {

      const axiosSecure = useAxiosSecure()
      const [course] = useCourse()



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
                        axiosSecure.delete(`/course/${id}`)
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
                  <div>
                        <DashboardTitle role={"Admin"} action={"Manage Course"} />



                        <div className="mt-8 max-w-screen-lg">
                              {/* Table Header */}
                              <div className="hidden lg:grid py-4 px-6 uppercase bg-[#23b792] text-white text-[18px] font-medium
                  grid-cols-[80px_120px_1fr_120px_100px_100px] text-center rounded-t-xl">
                                    <p>SL. No</p>
                                    <p>Image</p>
                                    <p>Title</p>
                                    <p>Price</p>
                                    <p>Delete</p>
                                    <p className='lg:ml-4'>Edit</p>
                              </div>

                              {/* Table Body */}
                              <div className="border border-[#ddd] rounded-b-xl overflow-hidden">
                                    {course.map((item, index) => (
                                          <div key={item?._id}
                                                className="grid grid-cols-1 md:grid-cols-[80px_150px_1fr_120px_100px_100px] 
                        items-center gap-6 py-4 px-4 border-b border-[#ddd] text-center bg-white hover:bg-gray-100 transition">

                                                {/* Serial Number */}
                                                <p className="text-[16px] font-medium bg-[#ddf4f0] rounded-full py-1 px-3 text-gray-700 mx-auto">
                                                      {index + 1}
                                                </p>

                                                {/* Image */}
                                                <div className="flex justify-center">
                                                      <img src={item?.image} alt="img" className="h-20 w-36 rounded-lg shadow-md" />
                                                </div>
                                                {/* Title */}
                                                <h1 className="text-gray-800 font-medium text-[18px]">{item?.title}</h1>

                                                {/* Price */}
                                                <h1 className="text-gray-900 font-medium lg:ml-[67px]">${item?.price}</h1>

                                                {/* Delete Button */}
                                                <span onClick={() => handleDelete(item)} className="cursor-pointer text-red-600 duration-300 hover:text-red-800 flex justify-center lg:ml-4">
                                                      <RiDeleteBinLine size={22} />
                                                </span>

                                                {/* Edit Button */}
                                                <span className="cursor-pointer text-blue-600 duration-300 hover:text-blue-800 flex justify-center">
                                                      <FiEdit size={22} />
                                                </span>
                                          </div>
                                    ))}
                              </div>
                        </div>



                  </div>
            </div>
      );
};

export default ManageCourse;