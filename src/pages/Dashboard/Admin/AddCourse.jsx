import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import DashboardTitle from '../../../components/Dashboard/Sidebar/DashboardTitle';
import { SiConcourse } from 'react-icons/si';
import useAxiosPublic from '../../../hocks/useAxiosPublic';
import useAxiosSecure from '../../../hocks/useAxiosSecure';
import toast from 'react-hot-toast';


const image_hosting_key = import.meta.env.VITE_IMGBB_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddCourse = () => {
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

        // instructorImage: res?.data?.data?.display_url,
      }
      const menuRes = await axiosSecure.post('/course', menuItem);

      if (menuRes.data.insertedId) {
        toast.success('Course Added Successfully!')
        reset()
      }

    }
  }


  return (
    <div>
      <DashboardTitle role={"Admin"} action={"Add Course"} />
      <form className="mt-6 flex flex-col gap-2 max-w-screen-md text-[15px]" onSubmit={handleSubmit(onSubmit)}>

        {/* Course Title & Price */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Course Title */}
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 font-medium">Course Title*</label>
            <input
              {...register("title")}
              className="w-full px-3 py-2 border border-gray-400 outline-none placeholder:text-gray-700 rounded mt-2"
              placeholder="Enter Course Title"
              required
              type='text'
            />
          </div>
          {/* Price Input */}
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 font-medium">Price*</label>
            <input
              {...register("price")}
              type="number"
              className="w-full px-3 py-2 border border-gray-400 outline-none placeholder:text-gray-700 text-gray-700 rounded mt-2"
              placeholder="Enter price"
              required
            />
          </div>
        </div>


        {/* Duration & EnrollMentCount */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Duration */}
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 font-medium">Duration*</label>
            <input
              {...register("duration")}
              className="w-full px-3 py-2 border border-gray-400 outline-none placeholder:text-gray-700 rounded mt-2"
              placeholder="Enter Duration"
              required
              type='text'
            />
          </div>
          {/* Enrollment Count Input */}
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 font-medium">Enrollment Count*</label>
            <input
              {...register("enrollmentCount")}
              type="number"
              className="w-full px-3 py-2 border border-gray-400 outline-none placeholder:text-gray-700 text-gray-700 rounded mt-2"
              placeholder="Enter Enroll Count"
              required
            />
          </div>
        </div>


        {/* language & Lessons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Language */}
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 font-medium">Language*</label>
            <input
              {...register("language")}
              className="w-full px-3 py-2 border border-gray-400 outline-none placeholder:text-gray-700 rounded mt-2"
              placeholder="Enter Language"
              required
              type='text'
            />
          </div>
          {/* Lessons Input */}
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 font-medium">Lessons*</label>
            <input
              {...register("lessons")}
              type="number"
              className="w-full px-3 py-2 border border-gray-400 outline-none placeholder:text-gray-700 text-gray-700 rounded mt-2"
              placeholder="Enter Lessons"
              required
            />
          </div>
        </div>


        {/* Email & Date */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Email */}
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 font-medium">Email*</label>
            <input
              {...register("email")}
              className="w-full px-3 py-2 border border-gray-400 outline-none placeholder:text-gray-700 rounded mt-2"
              placeholder="Enter Email"
              required
              type='email'
            />
          </div>
          {/* Date */}
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 font-medium">Date*</label>
            <input
              {...register("submitDate")}
              type="date"
              className="w-full px-3 py-2 border border-gray-400 outline-none placeholder:text-gray-700 text-gray-700 rounded mt-2"
              placeholder="Enter date"
              required
            />
          </div>
        </div>


        {/* Category & Level Select */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Select */}
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 font-medium">Select Category*</label>
            <select defaultValue={'default'}
              {...register("category")}
              className="w-full px-3 py-2.5 border mt-2 border-gray-400 rounded placeholder:text-gray-700 text-gray-800 bg-white "
              required
            >
              <option value="salad">Web Development</option>
              <option value="pizza">Data Science</option>
              <option value="soup">UI/UX Design</option>
              <option value="dessert">Mobile Development</option>
              <option value="drinks">Cyber Security</option>
              <option value="drinks">Artificial Intelligence</option>
              <option value="drinks">MERN Stack Development</option>
              <option value="drinks">Cloud Computing</option>
            </select>
          </div>
          {/* Level Select */}
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 font-medium">Select Level*</label>
            <select defaultValue={'default'}
              {...register("level")}
              className="w-full px-3 py-2.5 border mt-2 border-gray-400 rounded placeholder:text-gray-700 text-gray-800 bg-white "
              required
            >
              <option value="salad">Advanced</option>
              <option value="pizza">Intermediate</option>
              <option value="soup">Beginner</option>
            </select>
          </div>
        </div>


        {/* 1 File Upload  Name*/}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className='w-full md:w-1/2'>
            <label className="block text-gray-700 font-medium">Course Image</label>
            <input
              {...register("image")}
              required
              type="file"
              className="w-full outline-none border border-gray-400 placeholder:text-gray-700 rounded mt-2 py-2 px-3"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 font-medium">Instructor Name</label>
            <input
              {...register("instructorName")}
              required
              type="text"
              className="w-full outline-none border border-gray-400 placeholder:text-gray-700 rounded mt-2 py-2 px-3"
            />
          </div>
        </div>

        {/* Course Description */}
        <div>
          <label className="block text-gray-700 font-medium">Course Description*</label>
          <textarea
            {...register("description")}
            className="w-full px-3 py-2 border border-gray-400 outline-none placeholder:text-gray-700 rounded mt-2"
            rows="2"
            placeholder="Enter Course Description"
            required
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

export default AddCourse;















