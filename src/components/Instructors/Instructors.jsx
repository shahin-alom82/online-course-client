import React from 'react';
import useTeacher from '../../hocks/useInstructors';
import Container from '../Container';
import { IoShareSocialSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Instructors = () => {

      const [teacher] = useTeacher()

      return (
            <Container>
                  <div className='mt-20 items-center justify-center text-center mx-auto'>
                        <p className='text-gray-600'>INSTRUCTORS</p>
                        <h1 className='text-4xl font-semibold uppercase text-gray-800 mt-4'>Course Instructors</h1>
                  </div>
                  <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8  mt-10'>
                        {
                              teacher.slice(0, 4).map((item) => (
                                    <Link to={`/teacherdetails/${item._id}`}>
                                          <div key={item?._id} className="relative group overflow-hidden rounded-t-md">
                                                {/* Image */}
                                                <img
                                                      src={item?.image}
                                                      alt="img"
                                                      className="w-[400px] h-[350px] rounded-t-md transition-opacity duration-300 group-hover:opacity-75"
                                                />
                                                {/* Hover BG Overlay */}
                                                <div className="absolute inset-0 bg-[#23b792] w-[400px] h-[350px] opacity-0 cursor-pointer group-hover:opacity-50 transition-opacity duration-600 "></div>

                                                {/* Text */}
                                                <div className="text-center mt-4 relative z-10">
                                                      <h1 className="text-xl">{item?.teachername}</h1>
                                                      <h1 className="mt-1 text-gray-600">{item?.category}</h1>
                                                </div>

                                                {/* Icon */}
                                                <span className="absolute border-2 rounded-full border-[#23b792] py-1 px-1 text-[#23b792] top-4 right-4">
                                                      <IoShareSocialSharp size={25} />
                                                </span>
                                          </div>
                                    </Link>

                              ))
                        }
                  </div>
            </Container>
      );
};

export default Instructors;