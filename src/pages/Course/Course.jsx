import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/Container';
import useCourse from '../../hocks/useCourse';
import CourseCart from './CourseCart';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Course = () => {

      const [course] = useCourse()

      return (
            <div className='mt-[82px]'>
                  <Container className='border-t-2 border-[#23b792]'>
                        <Helmet>
                              <title>EduBlink | Course </title>
                        </Helmet>
                        {/* Header Section */}
                        <div className='mt-8'>
                              <div className='flex flex-col lg:justify-center lg:items-center lg:text-center'>
                                    <h1 className='text-2xl font-medium text-gray-800 uppercase'>Well Come To Our Course</h1>
                                    <div className='flex mt-3 items-center gap-2 text-gray-600'>
                                          <Link to={"/"}>
                                                <h1 className="text-lg">Home</h1>
                                          </Link>
                                          <FaAngleRight />
                                          <h1 className="text-lg text-black">Our Course</h1>
                                    </div>
                              </div>
                        </div>
                        <div className='mt-8'>
                              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 '>
                                    {
                                          course.map((item) => <CourseCart course={item} key={item?._id} />)
                                    }
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default Course;