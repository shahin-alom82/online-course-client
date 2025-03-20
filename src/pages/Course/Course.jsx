import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/Container';
const Course = () => {
      return (
            <div >
                  <Container className='border-t-2 border-[#23b792]'>
                        <Helmet>
                              <title>EduBlink | Our Course</title>
                        </Helmet>
                        <div className='mt-8'>
                              <h1 className='text-2xl font-medium text-gray-800'>Well Come To Our Course</h1>
                        </div>
                  </Container>
            </div>
      );
};

export default Course;