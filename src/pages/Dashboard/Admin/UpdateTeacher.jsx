import React from "react";
import DashboardTitle from "../../../components/Dashboard/Sidebar/DashboardTitle";
import { useForm } from "react-hook-form";
import { SiConcourse } from "react-icons/si";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hocks/useAxiosSecure";
import useAxiosPublic from "../../../hocks/useAxiosPublic";
import { useLoaderData, useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMGBB_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateTeacher = () => {
      const { description, date, email, experience, category, teachername, _id } = useLoaderData();
      const { register, handleSubmit, reset } = useForm();
      const axiosPublic = useAxiosPublic();
      const axiosSecure = useAxiosSecure();
      const navigate = useNavigate();

      const onSubmit = async (data) => {
            try {
                  const imageFile = new FormData();
                  imageFile.append("image", data.image[0]);

                  const res = await axiosPublic.post(image_hosting_api, imageFile, {
                        headers: { "Content-Type": "multipart/form-data" }
                  });

                  if (res.data.success) {
                        const updatedTeacher = {
                              teachername: data.teachername,
                              category: data.category,
                              experience: data.experience,
                              email: data.email,
                              date: data.date,
                              description: data.description,
                              image: res.data.data.display_url
                        };

                        const menuRes = await axiosSecure.patch(`/teacher/${_id}`, updatedTeacher);

                        if (menuRes.data.modifiedCount > 0) {
                              toast.success("Teacher Updated Successfully!");
                              navigate("/dashboard/manageteacher");
                              reset();
                        }
                  }
            } catch (error) {
                  console.error("Error updating teacher:", error);
                  toast.error("Failed to update teacher!");
            }
      };
      return (
            <div>
                  <DashboardTitle role="Admin" action="Update Teacher" />

                  <form className="mt-6 flex flex-col gap-2 max-w-screen-md" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col md:flex-row gap-4">
                              <div className="w-full md:w-1/2">
                                    <label className="block text-gray-700 font-medium">Teacher Name*</label>
                                    <input {...register("teachername")} className="w-full px-3 py-2 border border-gray-400 rounded mt-2" placeholder="Enter Teacher Name" required defaultValue={teachername} type="text" />
                              </div>

                              <div className="w-full md:w-1/2">
                                    <label className="block text-gray-700 font-medium">Select Category*</label>
                                    <select defaultValue={category} {...register("category")} className="w-full px-3 py-2.5 border mt-2 border-gray-400 rounded text-gray-800 bg-white" required>
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

                        <div className="flex flex-col md:flex-row gap-4">
                              <div className="w-full md:w-1/2">
                                    <label className="block text-gray-700 font-medium">Experience*</label>
                                    <input {...register("experience")} className="w-full px-3 py-2 border border-gray-400 rounded mt-2" placeholder="Enter Experience" required defaultValue={experience} type="text" />
                              </div>

                              <div className="w-full md:w-1/2">
                                    <label className="block text-gray-700 font-medium">Email*</label>
                                    <input {...register("email")} type="email" className="w-full px-3 py-2 border border-gray-400 rounded mt-2" placeholder="Enter Email" required defaultValue={email} />
                              </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                              <div className="w-full md:w-1/2">
                                    <label className="block text-gray-700 font-medium">Image Upload*</label>
                                    <input {...register("image")} className="w-full px-3 py-2 border border-gray-400 rounded mt-2" required type="file" />
                              </div>

                              <div className="w-full md:w-1/2">
                                    <label className="block text-gray-700 font-medium">Date*</label>
                                    <input {...register("date")} type="date" className="w-full px-3 py-2 border border-gray-400 rounded mt-2" required defaultValue={date} />
                              </div>
                        </div>

                        <div>
                              <label className="block text-gray-700 font-medium">Course Description*</label>
                              <textarea
                                    {...register("description")}
                                    className="w-full px-4 py-4 border border-gray-400 rounded mt-2"
                                    rows="4"
                                    placeholder="Enter Description"
                                    required
                                    defaultValue={description}
                              ></textarea>
                        </div>

                        <button type="submit" className="mt-2 w-full bg-[#23b792] text-white rounded-full py-2 px-4 flex items-center gap-4 text-lg justify-center">
                              <SiConcourse size={18} /> Update Teacher <SiConcourse size={18} />
                        </button>
                  </form>
            </div>
      );
};

export default UpdateTeacher;
