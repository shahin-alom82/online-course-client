import React from 'react';
import useTeacher from '../hocks/useInstructors';
import Container from './Container';
import { IoShareSocialSharp } from "react-icons/io5";

const Instructors = () => {
      const [teacher] = useTeacher()
      return (
            <Container>
                  <div className='mt-20 items-center justify-center text-center mx-auto'>
                        <p className='text-gray-600'>INSTRUCTORS</p>
                        <h1 className='text-4xl mt-3'>Course Instructors</h1>
                  </div>
                  <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8  mt-10'>
                        {
                              teacher.map((item) => (
                                    <div key={item?._id} className='relative'>
                                          <img src={item?.image} alt="img" className='w-[400px] h-[350px] rounded-t-md' />
                                          <div className='text-center mt-4'>
                                                <h1 className='text-xl'>{item?.teachername}</h1>
                                                <h1 className='mt-1 text-gray-600'>{item?.category}</h1>
                                          </div>
                                          <span className='absolute border-2 rounded-full border-[#23b792] py-1 px-1 text-[#23b792] top-4 right-4 '><IoShareSocialSharp size={25} /></span>

                                    </div>
                              ))
                        }
                  </div>
            </Container>
      );
};

export default Instructors;