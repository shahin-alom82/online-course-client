import React from 'react';
import { MdOutlinePlayLesson } from 'react-icons/md';
import { PiStudentFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const CourseCart = ({ course }) => {

      return (
            <div className='relative'>
                  <img src={course?.image} alt="img" className='w-full h-48 rounded-lg' />
                  <div className='px-4 bg-gray-100 py-4 rounded-b-lg'>
                        <h1 className='bg-[#ddf4f0] text-[#23b792] w-40 text-center py-1'>{course?.level} Level</h1>
                        <h1 className='text-lg mt-3 text-gray-800 font-medium'>{course?.title}</h1>
                        <p className='mt-2 tracking-wide text-[#23b792] text-[16px] flex items-center'>Course Fee: ${course?.price}</p>
                        <p className='absolute top-0 right-0 text-sm bg-[#23b792] text-white py-1 px-3 rounded-t-lg '>{course?.duration}</p>
                        <div className='flex items-center justify-between mt-3 text-gray-600 text-sm'>
                              <span className='flex items-center gap-1'><MdOutlinePlayLesson size={17} />{course?.lessons} Lessons </span>
                              <span className='flex items-center gap-1'><PiStudentFill size={18} />
                                    {course?.enrollmentCount} Students</span>
                        </div>
                        <Link to={`/coursedetails/${course._id}`}>
                              <button className='mt-5 bg-[#23b792] text-[16px] w-full text-white rounded-full py-1 tracking-wide'>Course Details</button>
                        </Link>

                  </div>
            </div>
      );
};

export default CourseCart;