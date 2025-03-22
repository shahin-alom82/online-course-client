import React from 'react';
import Container from '../components/Container'
import '../components/banner.css'
import img from '../assets/girl.webp'
import { FaArrowRightLong, FaPlus } from 'react-icons/fa6';
import aboutimg from '../assets/about2.webp'

const Banner = () => {
      return (
            <div>
                  <Container className={"banner-bg-img relative"}>
                        <img src={img} alt="img" className='lg:h-[648px] pt-16 lg:ml-[730px] md:ml-80 relative' />
                        <div className='absolute  lg:ml-28 md:ml-10 top-48 hidden md:block'>
                              <div className='font-semibold text-gray-800  lg:text-5xl text-2xl uppercase space-y-4 banner' >
                                    <h1>Get<span className='text-[#ee4a62] font-semibold'> 2500+</span></h1>
                                    <h1>Best Online Courses</h1>
                                    <h1>From EduBlink</h1>
                              </div>
                              <p className='text-xl text-gray-800 mt-6'>Excepteur sint occaecat cupidatat non proident sunt in culpa <br /> qui officia deserunt mollit.
                              </p>
                              <button className='flex items-center gap-2 bg-[#23b792] py-2 px-4 text-white mt-6'>Find Course <FaArrowRightLong /></button>
                        </div>
                        <div className='bg-white py-4 animate-bounce  hidden md:block px-6 absolute top-[480px] right-80 rounded-md'>
                              <h1 className='text-xl'>Instrunctor</h1>
                              <div className="flex items-center gap-4 mt-2">

                                    <div className='flex rtl:space-x-revers  -space-x-2'>
                                          <img className="w-10 h-10 border-2 border-white rounded-full"
                                                src={aboutimg}
                                                alt="User 1" />

                                          <img className="w-10 h-10 border-2 border-white rounded-full"
                                                src={aboutimg}
                                                alt="User 2" />

                                          <img className="w-10 h-10 border-2 border-white rounded-full"
                                                src={aboutimg}
                                                alt="User 3" />
                                          <img className="w-10 h-10 border-2 border-white rounded-full"
                                                src={aboutimg}
                                                alt="User 3" />

                                          <h1 className="flex items-center bg-red-500 justify-center w-10 h-10 text-xs font-medium text-white border-2 px-2 border-white rounded-full">
                                                <FaPlus size={20} className='text-white' />
                                          </h1>
                                    </div>
                                    <div>
                                          <h1 className='font-medium'>200+</h1>
                                          <h1>Instactors</h1>
                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default Banner;