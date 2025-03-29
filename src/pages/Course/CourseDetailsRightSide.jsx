import React from 'react';
import { FaRegClock, FaSackDollar } from 'react-icons/fa6';
import { MdOutlinePlayLesson } from 'react-icons/md';
import { PiStudentFill } from 'react-icons/pi';
import { useLoaderData } from 'react-router-dom';
import { LiaAwardSolid, LiaUserTieSolid } from "react-icons/lia";
import { GrLanguage } from "react-icons/gr";

const CourseDetailsRightSide = ({course}) => {
     
      return (
            <div>
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
      );
};

export default CourseDetailsRightSide;