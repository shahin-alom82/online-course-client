import React from 'react';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SortCourse = ({ course }) => {
      const sortedCourses = course.sort((a, b) => new Date(b.submitDate) - new Date(a.submitDate));
      return (
            <div className='mt-6'>
                  {/* Latest posts (showing top 2 courses) */}
                  {sortedCourses.slice(0, 3).map((blog) => (
                        <Link to={`/coursedetails/${blog._id}`}>
                              <div key={blog?._id} className="flex  gap-4 mt-4 border-b border-gray-300 pb-4">

                                    <img src={blog.image} alt={blog?.title} className="w-28 h-20 rounded-md" />

                                    <div className='space-y-1 text-gray-600'>
                                          <h1 className='hidden md:block'>{blog?.category}</h1>
                                          <h1>{blog?.title}</h1>
                                          <span className='flex items-center gap-2'>
                                                <FaRegCalendarCheck size={17} className="text-[#23b792]" />
                                                {new Date(blog?.submitDate).toLocaleDateString("en-US", {
                                                      day: "numeric",
                                                      month: "short",
                                                      year: "numeric"
                                                })}
                                          </span>
                                    </div>
                              </div>
                        </Link>
                  ))}
            </div>
      );
};

export default SortCourse;
