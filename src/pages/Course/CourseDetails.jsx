import { Link, useLoaderData } from 'react-router-dom';
import Container from '../../components/Container';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaAngleRight, FaRegCalendarCheck, FaRegClock, FaSackDollar } from 'react-icons/fa6';
import { PiStudentFill } from 'react-icons/pi';
import { LiaAwardSolid, LiaUserTieSolid } from 'react-icons/lia';
import { MdOutlineMail, MdOutlinePlayLesson } from 'react-icons/md';
import { GrLanguage } from 'react-icons/gr';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { SiConcourse } from 'react-icons/si';
import { GoDotFill } from "react-icons/go";

const CourseDetails = () => {


      const course = useLoaderData()
      // console.log('details', details)
      return (
            <div>
                  <Container className={'border-t-2 border-[#23b792] mt-[82px]'}>
                        <Helmet>
                              <title>EduBlink | Details</title>
                        </Helmet>


                        <div className='mt-8'>
                              <div className='flex mt-3 items-center gap-2 text-gray-600'>
                                    <Link to={"/"}>
                                          <h1 className="text-lg">Home</h1>
                                    </Link>
                                    <FaAngleRight />
                                    <Link to={"/course"}>
                                          <h1 className="text-lg">Course</h1>
                                    </Link>
                                    <FaAngleRight />
                                    <h1 className="text-black tracking-wide text-xl">{course?.title}</h1>
                              </div>
                        </div>

                        {/* Blog List */}
                        <div className="flex flex-col lg:flex-row gap-8 mt-8">
                              {/* Left Side (Scrollable) */}
                              <div className="lg:w-2/3">
                                    {/* h-[100vh] overflow-y-auto py-4 px-4 */}
                                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
                                          <div className="rounded-xl shadow-lg">
                                                {/* overflow-hidden */}
                                                <img src={course.image} alt={course?.title} className="w-full lg:h-[450px]" />
                                                <div className="p-4">
                                                      <h2 className="font-medium text-gray-600 uppercase">{course.category}</h2>
                                                      <p className="text-gray-800 text-[22px] mt-2">{course?.title}</p>
                                                      <div className='flex items-center gap-14 mt-3 text-gray-600'>
                                                            <span className='flex items-center gap-2'>
                                                                  <FaRegCalendarCheck size={17} className="text-[#23b792]" />
                                                                  {new Date(course?.submitDate).toLocaleDateString("en-US", {
                                                                        day: "numeric",
                                                                        month: "short",
                                                                        year: "numeric"
                                                                  })}
                                                            </span>

                                                            <span className='flex items-center gap-1'><PiStudentFill size={20} className="text-[#23b792]" />
                                                                  {course?.enrollmentCount} Students</span>
                                                      </div>
                                                      <p className="mt-3 text-gray-700">{course?.description.slice(0, 58)}...</p>
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
                                                      {course?.category} Expert
                                                </p>

                                                {/* Instructor Name */}
                                                <h1 className="flex items-center gap-3 text-gray-900">
                                                      <HiOutlineUserCircle size={22} />
                                                      {course?.instructorName}
                                                </h1>

                                                {/* Email */}
                                                <p className="flex items-center gap-3">
                                                      <MdOutlineMail size={20} />
                                                      {course?.email}
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

                              {/* Right Side (Fixed) */}
                              <div className="lg:w-1/3 mt-2">
                                    {/* h-screen sticky top-20 */}
                                    <h1 className='text-2xl '>
                                          Course Includes:</h1>

                                    <div className="mt-4 text-lg text-gray-700 bg-white p-5 rounded-lg space-y-2">
                                          {/* Price */}
                                          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                                                <h1 className="flex items-center gap-3">
                                                      <FaSackDollar size={18} className="text-green-500" /> Price:
                                                </h1>
                                                <h1 className="text-gray-900">${course?.price}</h1>
                                          </div>

                                          {/* Instructor */}
                                          <div className="flex justify-between items-center border-b border-gray-200 py-3">
                                                <h1 className="flex items-center gap-2">
                                                      <LiaUserTieSolid size={25} className="text-blue-500" /> Instructor:
                                                </h1>
                                                <h1 className="text-gray-900">{course?.instructorName}</h1>
                                          </div>

                                          {/* Duration */}
                                          <div className="flex justify-between items-center border-b border-gray-200 py-3">
                                                <h1 className="flex items-center gap-3">
                                                      <FaRegClock size={18} className="text-purple-500" /> Duration:
                                                </h1>
                                                <h1 className="text-gray-900">{course?.duration}</h1>
                                          </div>

                                          {/* Lessons */}
                                          <div className="flex justify-between items-center border-b border-gray-200 py-3">
                                                <h1 className="flex items-center gap-3">
                                                      <MdOutlinePlayLesson size={22} className="text-orange-500" /> Lessons:
                                                </h1>
                                                <h1 className="text-gray-900">{course?.lessons}</h1>
                                          </div>

                                          {/* Students */}
                                          <div className="flex justify-between items-center border-b border-gray-200 py-3">
                                                <h1 className="flex items-center gap-2">
                                                      <PiStudentFill size={25} className="text-teal-500" /> Students:
                                                </h1>
                                                <h1 className="text-gray-900">{course?.enrollmentCount}</h1>
                                          </div>

                                          {/* Language */}
                                          <div className="flex justify-between items-center border-b border-gray-200 py-3">
                                                <h1 className="flex items-center gap-3">
                                                      <GrLanguage size={18} className="text-indigo-500" /> Language:
                                                </h1>
                                                <h1 className="text-gray-900">{course?.language}</h1>
                                          </div>

                                          {/* Certifications */}
                                          <div className="flex justify-between items-center pt-3">
                                                <h1 className="flex items-center gap-2">
                                                      <LiaAwardSolid size={25} className="text-yellow-500" /> Certifications:
                                                </h1>
                                                <h1 className="text-gray-900">Yes</h1>
                                          </div>
                                          {/* Enroll Button */}
                                          <button className='bg-[#23b792] text-center justify-center py-3 w-full text-lg rounded-full tracking-wide text-white mt-4 font'>Enroll Now</button>
                                    </div>

                                    <div>
                                          <img src="https://i.ibb.co.com/YFvL4Qc4/sidebar-ad.png" alt="img" className='w-full' />
                                    </div>
                              </div>
                        </div>

                  </Container>
            </div>
      );
};

export default CourseDetails;
