




import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/Container';
import useCourse from '../../hocks/useCourse';
import CourseCart from './CourseCart';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CourseFilter from './CourseFilter';

const Course = () => {

      const [course] = useCourse();

      const [selectedCategory, setSelectedCategory] = useState("");
      const [selectedPrice, setSelectedPrice] = useState(1000); 

      // Filtered Courses Logic
      const filteredCourses = course.filter(item => {
            const matchCategory = selectedCategory ? item.category === selectedCategory : true;
            const matchPrice = item.price <= selectedPrice;
            return matchCategory && matchPrice;
      });

      return (
            <div className='lg:mt-[135px] mt-[85px]'>
                  <Container className='border-t-2 border-[#23b792]'>
                        <Helmet>
                              <title>EduBlink | Course</title>
                        </Helmet>

                        {/* Header Section */}
                        <div className='mt-8'>
                              <div className='flex flex-col lg:justify-center lg:items-center lg:text-center'>
                                    <h1 className='lg:text-2xl text-xl font-medium text-gray-800 uppercase'>Well Come To Our Course</h1>
                                    <div className='flex mt-3 items-center gap-2 text-gray-600'>
                                          <Link to={"/"}>
                                                <h1 className="text-lg">Home</h1>
                                          </Link>
                                          <FaAngleRight />
                                          <h1 className="text-lg text-black">Our Course</h1>
                                    </div>
                              </div>
                        </div>

                        {/* Main Section */}
                        <div className='mt-8 flex flex-col lg:flex-row justify-between gap-6'>

                              {/* Filter Sidebar */}
                              <div className='lg:w-1/4 lg:border-r-2 border-gray-200'>
                                    <CourseFilter
                                          selectedCategory={selectedCategory}
                                          setSelectedCategory={setSelectedCategory}
                                          selectedPrice={selectedPrice}
                                          setSelectedPrice={setSelectedPrice}
                                          allCourses={course}
                                    />
                              </div>

                              {/* Course List */}
                              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-3/4'>
                                    {
                                          filteredCourses.length > 0 ? (
                                                filteredCourses.map((item) => (
                                                      <CourseCart course={item} key={item?._id} />
                                                ))
                                          ) : (
                                                <p className="text-center text-gray-500 col-span-full">No course found with selected filter.</p>
                                          )
                                    }
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default Course;
