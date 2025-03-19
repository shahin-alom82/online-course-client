import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/Container';
import img from '../../assets/coursebanner.png'
const Course = () => {
      return (
            <div >
                  <Container className='border-t-2 border-[#23b792]'>
                        <Helmet>
                              <title>EduBlink | Our Course</title>
                        </Helmet>
                        <div className='mt-8'>
                              <h1 className='text-2xl tracking-wide font-medium text-gray-800'>Well Come To Our Course</h1>
                        </div>
                  </Container>
            </div>
      );
};

export default Course;