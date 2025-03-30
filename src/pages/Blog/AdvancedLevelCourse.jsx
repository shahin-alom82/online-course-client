import React, { useState, useEffect } from 'react';
import Container from '../../components/Container';
import useCourse from '../../hocks/useCourse';
import BlogCourse from './BlogCourse';
import SearchInput from './SearchInput';
import SortCourse from './SortCourse';
import Categories from './Categories';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
const AdvancedLevelCourse = () => {
      const [course] = useCourse();
      const [intermediateCourses, setIntermediateCourses] = useState([]);
      useEffect(() => {
            const filterIntermediateCourses = () => {
                  const filteredCourses = course.filter(item => item.level === "Advanced");
                  setIntermediateCourses(filteredCourses);
            };
            filterIntermediateCourses();
      }, [course]);
      return (
            <div>
                  <Container className={'border-t-2 border-[#23b792] mt-[82px]'}>
                        <div className="px-4 py-5">
                              {/* Header Section */}
                              <div className='mt-6'>
                                    <div className='flex mt-3 items-center gap-2 text-gray-600'>
                                          <Link to={"/blog"}>
                                                <h1 className="text-lg">Blog</h1>
                                          </Link>
                                          <FaAngleRight />
                                          <h1 className="text-lg tracking-wide text-gray-800">Advanced level courses</h1>
                                    </div>
                              </div>
                              {/* Blog List */}
                              <div className="flex flex-col lg:flex-row gap-8 mt-8">
                                    {/* Left Side */}
                                    <div className="lg:w-2/3">
                                          {/* h-[100vh] overflow-y-auto py-4 px-4 */}
                                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                                                {intermediateCourses.length > 0 ? (
                                                      intermediateCourses.map((blog) => <BlogCourse blog={blog} />)
                                                ) : (
                                                      <p>No intermediate level courses found.</p>
                                                )}
                                          </div>
                                    </div>

                                    {/* Right Side */}
                                    <div className="lg:w-1/3 mt-4">
                                          {/* h-screen sticky top-20 */}
                                          <div>
                                                <div>
                                                      <h1 className="text-2xl tracking-wide font">Search</h1>
                                                      <SearchInput />
                                                </div>
                                                <div className="mt-6">
                                                      <h1 className="text-2xl tracking-wide font">Latest Post</h1>
                                                      <SortCourse course={course} />
                                                </div>
                                                <div className="mt-6">
                                                      <h1 className="text-2xl tracking-wide font">Categories</h1>
                                                      <Categories />
                                                </div>
                                                <div className="mt-10">
                                                      <img src="https://i.ibb.co.com/YFvL4Qc4/sidebar-ad.png" alt="img" className='w-full' />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default AdvancedLevelCourse;