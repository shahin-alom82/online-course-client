import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaAngleRight, FaRegCalendarCheck } from "react-icons/fa";
import Container from "../../components/Container";
import { Helmet } from "react-helmet-async";
import useCourse from "../../hocks/useCourse"
import { MdOutlinePlayLesson } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import SearchInput from "./SearchInput";
const Blog = () => {

      const [course] = useCourse()

      return (
            <Container className={'border-t-2 border-[#23b792] mt-[82px]'}>
                  <Helmet>
                        <title>EduBlink | Blog</title>
                  </Helmet>
                  <div className="px-4 py-5">
                        {/* Header Section */}
                        <div className='mt-6'>
                              <div className='flex flex-col lg:justify-center lg:items-center lg:text-center'>
                                    <h1 className="text-4xl font">Our Blog</h1>
                                    <div className='flex mt-3 items-center gap-2 text-gray-600'>
                                          <Link to={"/"}>
                                                <h1 className="text-lg">Home</h1>
                                          </Link>
                                          <FaAngleRight />
                                          <h1 className="text-lg text-black">Our Blog</h1>
                                    </div>
                              </div>
                        </div>

                        {/* Blog List */}
                        <div className="flex flex-col lg:flex-row gap-8 mt-8">
                              {/* Left Side (Scrollable) */}
                              <div className="lg:w-2/3 h-[100vh] overflow-y-auto py-4 px-4 ">
                                    {/* h-[100vh] overflow-y-auto py-4 px-4 */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                                          {course.map((blog) => (
                                                <div key={blog._id} className="rounded-xl shadow-lg overflow-hidden">
                                                      {/* overflow-hidden */}
                                                      <img src={blog.image} alt={blog?.title} className="w-full lg:h-64" />
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
                                          ))}
                                    </div>
                              </div>

                              {/* Right Side (Fixed) */}
                              <div className="w-1/3 mt-4 h-screen sticky top-20">
                                    {/* h-screen sticky top-20 */}
                                    <h1>Search</h1>
                                    <div>
                                          <SearchInput />
                                    </div>
                              </div>
                        </div>



                  </div>
            </Container>
      );
};

export default Blog;