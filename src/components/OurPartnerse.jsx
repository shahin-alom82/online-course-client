import React from 'react';
import Container from './Container';
import img1 from '../assets/brand-01.png'
import img2 from '../assets/brand-02.png'
import img3 from '../assets/brand-03.png'
import img4 from '../assets/brand-04.png'
import img5 from '../assets/brand-05.png'
import img6 from '../assets/brand-06.png'
import img7 from '../assets/brand-07.png'
import img8 from '../assets/brand-08.png'
import { FaArrowRightLong } from 'react-icons/fa6';
const OurPartnerse = () => {

      const cart = [
            { img: img1 },
            { img: img2 },
            { img: img3 },
            { img: img4 },
            { img: img5 },
            { img: img6 },
            { img: img7 },
            { img: img8 }
      ]

      return (
            <div className='mt-20'>
                  <Container className={'flex flex-col lg:flex-row gap-10 justify-between'}>
                        <div className='lg:w-2/5'>
                              <p className='text-gray-600'>OUR PARTNERS</p>
                              <div className='text-4xl text-gray-800 mt-4 font-semibold tracking-wide font'>
                                    <h1>Learn with <span className='text-[#ee4a62]'>Our</span></h1>
                                    <h1 className='mt-2'>Partners</h1>
                              </div>
                              <p className='mt-6 text-gray-600 space-y-3'>Collaborate with top industry experts and renowned educational <br /> platforms.
                                    Gain practical knowledge through curated courses <br /> and real-world projects.
                                    Empower your learning journey with <br /> trusted global partners.</p>

                              <button className='flex items-center gap-2 bg-[#23b792] py-2 px-4 text-white mt-6'>OUR PARTNERS <FaArrowRightLong /></button>

                        </div>
                        <div className='lg:w-3/5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4'>
                              {
                                    cart.map((item, index) => (
                                          <div key={index}>
                                                <img className='border border-gray-200 w-full' src={item?.img} alt="" />
                                          </div>
                                    ))
                              }
                        </div>
                  </Container>
            </div>
      );
};

export default OurPartnerse;