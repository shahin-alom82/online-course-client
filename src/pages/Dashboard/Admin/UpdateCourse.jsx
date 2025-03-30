import React from 'react';
import { SiConcourse } from 'react-icons/si';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DashboardTitle from '../../../components/Dashboard/Sidebar/DashboardTitle';
import useAxiosPublic from '../../../hocks/useAxiosPublic';
import useAxiosSecure from '../../../hocks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';



const image_hosting_key = import.meta.env.VITE_IMGBB_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateCourse = () => {

      const { title, description, category, level, price, duration, instructorName, email, enrollmentCount, language, lessons, submitDate, _id } = useLoaderData();


      const { register, handleSubmit, reset } = useForm();
      const axiosPublic = useAxiosPublic()
      const axiosSecure = useAxiosSecure()
      const navigate = useNavigate()

      const onSubmit = async (data) => {
            const imageFile = { image: data.image[0] }

            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                  headers: {
                        'content-type': 'multipart/form-data'
                  }
            });
            if (res.data.success) {
                  const menuItem = {
                        title: data?.title,
                        price: data?.price,
                        duration: data?.duration,
                        instructorName: data?.instructorName,
                        image: res?.data?.data?.display_url,
                        enrollmentCount: data?.enrollmentCount,
                        lessons: data?.lessons,
                        language: data?.language,
                        submitDate: data?.submitDate,
                        email: data?.email,
                        level: data?.level,
                        category: data?.category,
                        description: data?.description,
                  }
                  const menuRes = await axiosSecure.patch(`/course/${_id}`, menuItem);

                  if (menuRes.data.modifiedCount > 0) {
                        toast.success('Course Updated Successfully!')
                        navigate('/dashboard/managecourse')
                        reset()
                  }

            }
      }


      return (
            <div>
                  <DashboardTitle role={"Admin"} action={"Update Course"} />
                  <form className="mt-6 flex flex-col gap-2 max-w-screen-md text-[15px]" onSubmit={handleSubmit(onSubmit)}>


                        {/* Course Title & Price */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                              {/* Course Title */}
                              <div className="w-full md:w-1/2">
                                    <input
                                          {...register("title")}
                                          className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full mt-4 focus:border-[#23b792] focus:outline-none"
                                          placeholder="Enter Course Title"
                                          required
                                          type='text'
                                          defaultValue={title}
                                    />
                              </div>
                              {/* Price Input */}
                              <div className="w-full md:w-1/2">
                                    <input
                                          {...register("price")}
                                          type="text"
                                          className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full mt-4 focus:border-[#23b792] focus:outline-none"
                                          placeholder="Enter price"
                                          required
                                          defaultValue={price}
                                    />
                              </div>
                        </div>


                        {/* Duration & EnrollMentCount */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                              {/* Duration */}
                              <div className="w-full md:w-1/2">
                                    <input
                                          {...register("duration")}
                                          className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full mt-4 focus:border-[#23b792] focus:outline-none"
                                          required
                                          placeholder="Enter Duration"
                                          type='text'
                                          defaultValue={duration}
                                    />
                              </div>
                              {/* Enrollment Count Input */}
                              <div className="w-full md:w-1/2">
                                    <input
                                          {...register("enrollmentCount")}
                                          type="text"
                                          className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full mt-4 focus:border-[#23b792] focus:outline-none"
                                          placeholder="Enter Enroll Count"
                                          required
                                          defaultValue={enrollmentCount}
                                    />
                              </div>
                        </div>


                        {/* language & Lessons */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                              {/* Language */}
                              <div className="w-full md:w-1/2">
                                    <input
                                          {...register("language")}
                                          className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full mt-4 focus:border-[#23b792] focus:outline-none"
                                          placeholder="Enter Language"
                                          required
                                          type='text'
                                          defaultValue={language}
                                    />
                              </div>
                              {/* Lessons Input */}
                              <div className="w-full md:w-1/2">
                                    <input
                                          {...register("lessons")}
                                          type="text"
                                          className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full mt-4 appearance-none focus:border-[#23b792] focus:outline-none"
                                          placeholder="Enter Lessons"
                                          required
                                          defaultValue={lessons}
                                    />
                              </div>
                        </div>


                        {/* Email & Date */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                              {/* Email */}
                              <div className="w-full md:w-1/2">
                                    <input
                                          {...register("email")}
                                          className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full mt-4 focus:border-[#23b792] focus:outline-none"
                                          placeholder="Enter Email"
                                          required
                                          type='email'
                                          defaultValue={email}
                                    />
                              </div>
                              {/* Date */}
                              <div className="w-full md:w-1/2">
                                    <input
                                          {...register("submitDate")}
                                          type="date"
                                          className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full mt-4 focus:border-[#23b792] focus:outline-none"
                                          placeholder="Enter date"
                                          required
                                          defaultValue={submitDate}
                                    />
                              </div>
                        </div>


                        {/* Category & Level Select */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                              {/* Category Select */}
                              <div className="w-full md:w-1/2">
                                    <select defaultValue={category}
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
                              {/* Level Select */}
                              <div className="w-full md:w-1/2">
                                    <select defaultValue={level}
                                          {...register("level")}
                                          className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full appearance-none mt-4 focus:border-[#23b792] focus:outline-none"
                                          required
                                    >
                                          <option value="Advanced">Advanced</option>
                                          <option value="Intermediate">Intermediate</option>
                                          <option value="Beginner">Beginner</option>
                                    </select>
                              </div>
                        </div>


                        {/* 1 File Upload  Name*/}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                              <div className='w-full md:w-1/2'>
                                    <input
                                          {...register("image")}
                                          required
                                          type="file"
                                          className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full mt-4 focus:border-[#23b792] focus:outline-none"
                                    />
                              </div>
                              <div className="w-full md:w-1/2">
                                    <input
                                          {...register("instructorName")}
                                          required
                                          defaultValue={instructorName}
                                          placeholder='Enter Instructor Name'
                                          type="text"
                                          className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full mt-4 focus:border-[#23b792] focus:outline-none"
                                    />
                              </div>
                        </div>

                        {/* Course Description */}
                        <div>
                              <textarea
                                    {...register("description")}
                                    className="outline-none border-b-2 border-gray-300 py-2 rounded-md px-2 text-gray-500 placeholder:text-gray-500 w-full resize-none mt-4 focus:border-[#23b792] focus:outline-none"
                                    rows="2"
                                    placeholder="Enter Course Description"
                                    required
                                    defaultValue={description}
                              ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                              type="submit"
                              className="mt-2 w-full bg-[#23b792] text-white rounded-full py-2 px-4 flex items-center gap-4 text-lg text-center justify-center"
                        >
                              <SiConcourse size={18} />
                              Add Course
                              <SiConcourse size={18} />
                        </button>

                  </form>
            </div >
      );
};

export default UpdateCourse;