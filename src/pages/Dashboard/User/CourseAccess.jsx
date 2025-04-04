import React, { useContext } from 'react';
import DashboardTitle from '../../../components/Dashboard/Sidebar/DashboardTitle';
import useAxiosSecure from '../../../hocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../provider/AuthProvider';
import { GoDotFill } from 'react-icons/go';
import { FaRegCalendarCheck, FaRegClock, FaSackDollar } from 'react-icons/fa6';
import { PiStudentFill } from 'react-icons/pi';
import { MdOutlineMail, MdOutlinePlayLesson } from 'react-icons/md';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { SiConcourse } from 'react-icons/si';
import { LiaAwardSolid, LiaUserTieSolid } from 'react-icons/lia';
import { GrLanguage } from 'react-icons/gr';

const CourseAccess = () => {

      const axiosSecure = useAxiosSecure();
      const { user } = useContext(AuthContext);
      const { data: payments = [], isLoading, isError } = useQuery({
            queryKey: ["payments", user?.email],
            queryFn: async () => {
                  const res = await axiosSecure.get(`/payments`);
                  return res.data;
            },
      });


      return (
            <div>
                  <div className='flex justify-between items-center'>
                        <DashboardTitle role={"User"} action={"Course Access"} />  {
                              payments.map((item) => (
                                    <div key={item?._id} className='lg:flex items-center gap-3 text-xl text-[#23b792] hidden md:block'>
                                          <h1>Student ID: </h1>
                                          <h1 className='uppercase'>{item?.transactionsId.slice(3, 9)}</h1>
                                    </div>
                              ))
                        }
                  </div>
                  <div className='mt-10'>
                        {
                              payments.map((item) => (
                                    <div key={item?._id}>

                                          {/* Blog List */}
                                          <div className="flex flex-col lg:flex-row gap-8 mt-8">
                                                {/* Left Side (Scrollable) */}
                                                <div className="lg:w-2/3">
                                                      {/* h-[100vh] overflow-y-auto py-4 px-4 */}
                                                      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
                                                            <div className="rounded-xl shadow-lg">
                                                                  {/* overflow-hidden */}
                                                                  <img src={item?.course.image} alt={item?.course?.title} className="w-full lg:h-[470px] rounded-t-xl" />
                                                                  <div className="p-4">
                                                                        <h2 className="font-medium text-gray-600 uppercase">{item?.course.category}</h2>
                                                                        <p className="text-gray-800 text-[22px] mt-2">{item?.course?.title}</p>
                                                                        <div className='flex items-center gap-14 mt-3 text-gray-600'>
                                                                              <span className='flex items-center gap-2'>
                                                                                    <FaRegCalendarCheck size={17} className="text-[#23b792]" />
                                                                                    {new Date(item?.course?.submitDate).toLocaleDateString("en-US", {
                                                                                          day: "numeric",
                                                                                          month: "short",
                                                                                          year: "numeric"
                                                                                    })}
                                                                              </span>

                                                                              <span className='flex items-center gap-1'><PiStudentFill size={20} className="text-[#23b792]" />
                                                                                    {item?.course?.enrollmentCount} Students</span>
                                                                        </div>
                                                                        <p className="mt-3 text-gray-700">{item?.course?.description?.slice(0, 80)}...</p>
                                                                  </div>
                                                            </div>
                                                      </div>

                                                      {/* Instructor Information */}
                                                      <div className="mt-10 bg-white">
                                                            <h1 className="text-2xl font-medium tracking-wide text-gray-800  font">
                                                                  Instructor Information
                                                            </h1>
                                                            <div className="mt-4 space-y-3 text-[16px] text-gray-700">
                                                                  {/* Category */}
                                                                  <p className="flex items-center gap-3">
                                                                        <SiConcourse size={20} />
                                                                        {item?.course?.category} Expert
                                                                  </p>

                                                                  {/* Instructor Name */}
                                                                  <h1 className="flex items-center gap-3 text-gray-900">
                                                                        <HiOutlineUserCircle size={22} />
                                                                        {item?.course?.instructorName}
                                                                  </h1>

                                                                  {/* Email */}
                                                                  <p className="flex items-center gap-3">
                                                                        <MdOutlineMail size={20} />
                                                                        {item?.course?.email}
                                                                  </p>
                                                            </div>
                                                      </div>
                                                      <div className="mt-10 bg-white">
                                                            <h1 className="text-2xl font-medium tracking-wide text-gray-800  font">
                                                                  Course Description
                                                            </h1>
                                                            <p className='text-gray-600 tracking-wide mt-4'>This comprehensive program covers Web Development, Data Science, UI/UX Design, Android Development, Cybersecurity, AI, Blockchain, and Cloud Computing. You will learn frontend & backend development, <br /> data analysis & machine learning, and cybersecurity & blockchain technology.</p>
                                                      </div>
                                                      <div className="mt-10 bg-white">
                                                            <h1 className="text-2xl font-medium tracking-wide text-gray-800  font">
                                                                  What You’ll Learn From This Course
                                                            </h1>
                                                            <div className='mt-4 space-y-3 text-gray-700 tracking-wide'>
                                                                  <p className='flex items-center gap-2'><GoDotFill size={15} /> Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</p>
                                                                  <p className='flex items-center gap-2'><GoDotFill size={15} /> Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer</p>
                                                                  <p className='flex items-center gap-2'><GoDotFill size={15} /> Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac</p>
                                                                  <p className='flex items-center gap-2'><GoDotFill size={15} />Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis</p>
                                                            </div>
                                                      </div>
                                                      <div className="mt-10 bg-white">
                                                            <h1 className="text-2xl font-medium tracking-wide text-gray-800  font">
                                                                  Certification
                                                            </h1>
                                                            <p className='text-gray-600 tracking-wide mt-4'>Yes! Upon successful completion of the course, you will receive a verified certification recognized by industry professionals.</p>
                                                      </div>
                                                </div>

                                                {/* Right Side */}
                                                <div className="lg:w-1/3 mt-2">
                                                      <h1 className='text-2xl'>Course Includes:</h1>

                                                      <div className="mt-4 lg:text-lg text-gray-700 bg-white p-5 rounded-lg space-y-2">
                                                            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                                                                  <h1 className="flex items-center gap-3">
                                                                        <FaSackDollar size={18} className="text-green-500" /> Price:
                                                                  </h1>
                                                                  <h1 className="text-gray-900">${item?.course?.price}</h1>
                                                            </div>

                                                            <div className="flex justify-between items-center border-b border-gray-200 py-3">
                                                                  <h1 className="flex items-center gap-2">
                                                                        <LiaUserTieSolid size={25} className="text-blue-500" /> Instructor:
                                                                  </h1>
                                                                  <h1 className="text-gray-900">{item?.course?.instructorName}</h1>
                                                            </div>

                                                            <div className="flex justify-between items-center border-b border-gray-200 py-3">
                                                                  <h1 className="flex items-center gap-3">
                                                                        <FaRegClock size={18} className="text-purple-500" /> Duration:
                                                                  </h1>
                                                                  <h1 className="text-gray-900">{item?.course?.duration}</h1>
                                                            </div>

                                                            <div className="flex justify-between items-center border-b border-gray-200 py-3">
                                                                  <h1 className="flex items-center gap-3">
                                                                        <MdOutlinePlayLesson size={22} className="text-orange-500" /> Lessons:
                                                                  </h1>
                                                                  <h1 className="text-gray-900">{item?.course?.lessons}</h1>
                                                            </div>

                                                            <div className="flex justify-between items-center border-b border-gray-200 py-3">
                                                                  <h1 className="flex items-center gap-2">
                                                                        <PiStudentFill size={25} className="text-teal-500" /> Students:
                                                                  </h1>
                                                                  <h1 className="text-gray-900">{item?.course?.enrollmentCount}</h1>
                                                            </div>

                                                            <div className="flex justify-between items-center border-b border-gray-200 py-3">
                                                                  <h1 className="flex items-center gap-3">
                                                                        <GrLanguage size={18} className="text-indigo-500" /> Language:
                                                                  </h1>
                                                                  <h1 className="text-gray-900">{item?.course?.language}</h1>
                                                            </div>

                                                            <div className="flex justify-between items-center pt-3">
                                                                  <h1 className="flex items-center gap-2">
                                                                        <LiaAwardSolid size={25} className="text-yellow-500" /> Certifications:
                                                                  </h1>
                                                                  <h1 className="text-gray-900">Yes</h1>
                                                            </div>
                                                      </div>

                                                      {/* Sidebar Image */}
                                                      <div>
                                                            <img src="https://i.ibb.co.com/YFvL4Qc4/sidebar-ad.png" alt="img" className='w-full' />
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              ))
                        }
                  </div>
            </div>
      );
};

export default CourseAccess;