import React from 'react';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { PiStudentFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const BlogCourse = ({ blog }) => {

      return (
            <div key={blog._id} className="rounded-xl shadow-lg">
                  {/* overflow-hidden */}
                  <Link to={`/coursedetails/${blog._id}`}>
                        <img src={blog.image} alt={blog?.title} className="w-full lg:h-64 rounded-t-xl" />
                  </Link>
                  <div className="p-4">
                        <h2 className="font-medium text-gray-600 uppercase">{blog.category}</h2>
                        <p className="text-gray-800 text-[22px] mt-2">{blog?.title}</p>
                        <div className='flex items-center gap-14 mt-3 text-gray-600'>
                              <span className='flex items-center gap-2'>
                                    <FaRegCalendarCheck size={17} className="text-[#23b792]" />
                                    {new Date(blog?.submitDate).toLocaleDateString("en-US", {
                                          day: "numeric",
                                          month: "short",
                                          year: "numeric"
                                    })}
                              </span>

                              <span className='flex items-center gap-1'><PiStudentFill size={20} className="text-[#23b792]" />
                                    {blog?.enrollmentCount} Students</span>
                        </div>
                        <p className="mt-3 text-gray-700">{blog?.description.slice(0, 58)}...</p>
                  </div>
            </div>
      );
};

export default BlogCourse;