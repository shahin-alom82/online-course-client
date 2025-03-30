import React, { useState } from 'react';
import DashboardTitle from '../../../components/Dashboard/Sidebar/DashboardTitle';
import { useForm } from 'react-hook-form';
import { SiConcourse } from 'react-icons/si';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../hocks/useAxiosSecure';
import useAxiosPublic from '../../../hocks/useAxiosPublic';


const image_hosting_key = import.meta.env.VITE_IMGBB_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddTeacher = () => {
      const { register, handleSubmit, reset } = useForm();
      const axiosPublic = useAxiosPublic()
      const axiosSecure = useAxiosSecure()

      const onSubmit = async (data) => {
            const imageFile = { image: data.image[0] }
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                  headers: {
                        'content-type': 'multipart/form-data'
                  }
            });
            if (res.data.success) {
                  const menuItem = {
                        teachername: data?.teachername,
                        category: data?.category,
                        experience: data?.experience,
                        email: data?.email,
                        date: data?.date,
                        description: data?.description,
                        image: res?.data?.data?.display_url
                  }
                  const menuRes = await axiosSecure.post('/teacher', menuItem);

                  if (menuRes.data.insertedId) {
                        toast.success('Course Added Successfully!')
                        reset()
                  }

            }
      }





      return (
            <div>
                  <DashboardTitle role={"Admin"} action={"Add Teacher"} />

                  <div>
                        <form className="mt-6 flex flex-col text-[15px] gap-2 max-w-screen-md" onSubmit={handleSubmit(onSubmit)}>
                              {/* Teacher Name & Category */}
                              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                    {/* Course Title */}
                                    <div className="w-full md:w-1/2">
                                          <input
                                                {...register("teachername")}
                                                className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full mt-4 focus:border-[#23b792] focus:outline-none"
                                                placeholder="Enter Teacher Name"
                                                required
                                                type='text'
                                          />
                                    </div>
                                    {/* Category Select */}
                                    <div className="w-full md:w-1/2">
                                          <select
                                                defaultValue={'default'}
                                                {...register("category")}
                                                className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full appearance-none mt-4 focus:border-[#23b792] focus:outline-none"
                                                required
                                          >
                                                <option value="Web Development">Web Development</option>
                                                <option value="Data Science">Data Science</option>
                                                <option value="UI/UX Design">UI/UX Design</option>
                                                <option value="Mobile Development">Mobile Development</option>
                                                <option value="Cyber Security">Cyber Security</option>
                                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                                                <option value="MERN Stack Development">MERN Stack Development</option>
                                                <option value="Cloud Computing">Cloud Computing</option>
                                          </select>

                                    </div>
                              </div>


                              {/* Email & Experience */}
                              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                    {/* Experience */}
                                    <div className="w-full md:w-1/2">
                                          <input
                                                {...register("experience")}
                                                className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full mt-4 focus:border-[#23b792] focus:outline-none"
                                                placeholder="Enter Experience"
                                                required
                                                type='text'
                                          />
                                    </div>
                                    {/*Email */}
                                    <div className="w-full md:w-1/2">
                                          <input
                                                {...register("email")}
                                                type="email"
                                                className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full mt-4 focus:border-[#23b792] focus:outline-none"
                                                placeholder="Enter Email"
                                                required
                                          />
                                    </div>
                              </div>


                              {/* image & Date */}
                              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                    {/* Email */}
                                    <div className="w-full md:w-1/2">
                                          <input
                                                {...register("image")}
                                                className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full mt-4 focus:border-[#23b792] focus:outline-none"
                                                placeholder="Image Upload"
                                                required
                                                type='file'
                                          />
                                    </div>
                                    {/* Date */}
                                    <div className="w-full md:w-1/2">
                                          <input
                                                {...register("date")}
                                                type="date"
                                                className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full mt-4 focus:border-[#23b792] focus:outline-none"
                                                placeholder="Enter date"
                                                required
                                          />
                                    </div>
                              </div>


                              {/* Course Description */}
                              <div>
                                    <textarea
                                          {...register("description")} 
                                          className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full resize-none mt-4 focus:border-[#23b792] focus:outline-none"
                                          rows="2"
                                          placeholder="Enter Description"
                                          required
                                    ></textarea>
                              </div>

                              {/* Submit Button */}
                              <button
                                    type="submit"
                                    className="mt-2 w-full bg-[#23b792] text-white rounded-full py-2 px-4 flex items-center gap-4 text-lg text-center justify-center"
                              >
                                    <SiConcourse size={18} />
                                    Add Teacher
                                    <SiConcourse size={18} />
                              </button>

                        </form>
                  </div>

            </div>
      );
};

export default AddTeacher;