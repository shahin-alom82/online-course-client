import React from 'react';
import Container from '../components/Container'
import '../components/banner.css'
import img from '../assets/girl.webp'
import { FaArrowRightLong } from 'react-icons/fa6';
const Banner = () => {
      return (
            <div>
                  <Container className={"banner-bg-img"}>
                        <img src={img} alt="img" className='lg:h-[600px] pt-16 lg:ml-[750px] relative' />
                        <div className='absolute ml-28 top-48'>
                              <div className='font-semibold text-gray-800  text-5xl uppercase  space-y-4' >
                                    <h1>Hero-Shape-1 Get<span className='text-[#ee4a62] font-bold'> 2500+</span></h1>
                                    <h1>Best Online Courses</h1>
                                    <h1>From EduBlink</h1>
                              </div>
                              <p className='text-xl text-gray-800 mt-6'>Excepteur sint occaecat cupidatat non proident sunt in culpa <br /> qui officia deserunt mollit.
                              </p>
                              <button className='flex items-center gap-2 bg-[#23b792] py-2 px-4 text-white mt-6'>Find Course <FaArrowRightLong /></button>
                        </div>
                  </Container>
            </div>
      );
};

export default Banner;