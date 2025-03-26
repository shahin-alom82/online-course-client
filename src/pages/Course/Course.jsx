import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/Container';
import useCourse from '../../hocks/useCourse';
import CourseCart from './CourseCart';
const Course = () => {

      const [course] = useCourse()
      return (
            <div>
                  <Container className='border-t-2 border-[#23b792]'>
                        <Helmet>
                              <title>EduBlink | Course </title>
                        </Helmet>
                        <div className='mt-8'>
                              <h1 className='text-2xl font-medium text-gray-800 uppercase'>Well Come To Our Course</h1>
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