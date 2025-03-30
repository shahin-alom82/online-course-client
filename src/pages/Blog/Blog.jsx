
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Container from "../../components/Container";
import { Helmet } from "react-helmet-async";
import useCourse from "../../hocks/useCourse";
import SearchInput from "./SearchInput";
import SortCourse from "./SortCourse";
import Categories from "./Categories";
import BlogCourse from "./BlogCourse";

const Blog = () => {
      const [course] = useCourse();
      const [searchTerm, setSearchTerm] = useState("");
      const [filteredCourses, setFilteredCourses] = useState([]);
      useEffect(() => {
            if (searchTerm) {
                  const filtered = course.filter((blog) =>
                        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
                  );
                  setFilteredCourses(filtered.reverse());
            } else {
                  setFilteredCourses([...course].reverse());
            }
      }, [searchTerm, course]);
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
                              {/* Left Side */}
                              <div className="lg:w-2/3">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                                          {filteredCourses.length > 0 ? (
                                                filteredCourses.slice(0, 6).map((blog) => <BlogCourse key={blog._id} blog={blog} />)
                                          ) : (
                                                <p className="text-gray-600">No blog posts found.</p>
                                          )}
                                    </div>
                              </div>

                              {/* Right Side */}
                              <div className="lg:w-1/3">
                                    <div>
                                          {/* Search Input */}
                                          <div>
                                                <h1 className="text-2xl tracking-wide font">Search</h1>
                                                <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                                          </div>

                                          {/* Latest Post */}
                                          <div className="mt-6">
                                                <h1 className="text-2xl tracking-wide font">Latest Post</h1>
                                                <SortCourse course={course} />
                                          </div>

                                          {/* Categories */}
                                          <div className="mt-6">
                                                <h1 className="text-2xl tracking-wide font">Categories</h1>
                                                <Categories />
                                          </div>

                                          {/* Sidebar Ad */}
                                          <div className="mt-10">
                                                <img src="https://i.ibb.co.com/YFvL4Qc4/sidebar-ad.png" alt="img" className='w-full' />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </Container>
      );
};

export default Blog;
