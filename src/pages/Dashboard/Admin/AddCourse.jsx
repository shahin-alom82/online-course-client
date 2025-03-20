import React from 'react';
import { useForm } from "react-hook-form";
import { FaUtensils } from 'react-icons/fa6';

const AddCourse = () => {
      const { register, handleSubmit, reset } = useForm();

      const onSubmit = (data) => {
            console.log('data', data)
      }

      return (
            <div className=''>
                  <form className="mt-10 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>


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
                              {/* Course Title */}
                              <div className="w-full md:w-1/2">
                                    <label className="block text-gray-700 font-medium">Duration*</label>
                                    <input
                                          {...register("time")}
                                          className="w-full px-3 py-2 border border-gray-400 outline-none placeholder:text-gray-700 rounded mt-2"
                                          placeholder="Enter Duration"
                                          required
                                    />
                              </div>
                              {/* Price Input */}
                              <div className="w-full md:w-1/2">
                                    <label className="block text-gray-700 font-medium">Enrollment Count*</label>
                                    <input
                                          {...register("count")}
                                          type="number"
                                          className="w-full px-3 py-2 border border-gray-400 outline-none placeholder:text-gray-700 text-gray-700 rounded mt-2"
                                          placeholder="Enter Enroll Count"
                                          required
                                    />
                              </div>
                        </div>

                        {/* language & Lessons */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                              {/* Course Title */}
                              <div className="w-full md:w-1/2">
                                    <label className="block text-gray-700 font-medium">Language*</label>
                                    <input
                                          {...register("language")}
                                          className="w-full px-3 py-2 border border-gray-400 outline-none placeholder:text-gray-700 rounded mt-2"
                                          placeholder="Enter Language"
                                          required
                                    />
                              </div>
                              {/* Price Input */}
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
                                          {...register("instructoremail")}
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
                                          {...register("date")}
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
                                          {...register("levelcategory")}
                                          className="w-full px-3 py-2.5 border mt-2 border-gray-400 rounded placeholder:text-gray-700 text-gray-800 bg-white "
                                          required
                                    >
                                          <option value="salad">Advanced</option>
                                          <option value="pizza">Intermediate</option>
                                          <option value="soup">Beginner</option>
                                    </select>
                              </div>
                        </div>


                        {/* 2 File Upload */}
                        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                              <div className="w-full md:w-1/2">
                                    <label className="block text-gray-700 font-medium">Course Image</label>
                                    <input
                                          {...register("courseImage")}
                                          required
                                          type="file"
                                          className="w-full outline-none border border-gray-400 placeholder:text-gray-700 rounded mt-2 py-2 px-3"
                                    />
                              </div>
                              <div className="w-full md:w-1/2">
                                    <label className="block text-gray-700 font-medium">Instructor Image</label>
                                    <input
                                          {...register("instructorImage")}
                                          required
                                          type="file"
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
                                    rows="3"
                                    placeholder="Enter Course Description"
                                    required
                              ></textarea>
                        </div>


                        {/* Submit Button */}
                        <button
                              type="submit"
                              className="mt-2 w-32 bg-yellow-600 text-white rounded py-1 px-4 flex items-center gap-2"
                        >
                              <FaUtensils size={13} />
                              Add Item
                        </button>
                  </form>
            </div >
      );
};

export default AddCourse;