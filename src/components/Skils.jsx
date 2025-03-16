import React from 'react';
import Container from './Container';
import aboutimg1 from '../assets/about1.jpeg'
import aboutimg from '../assets/about2.webp'
import aboutimg3 from '../assets/about3.jpg'
import { GiCheckMark } from 'react-icons/gi';
import { LiaAwardSolid } from 'react-icons/lia';
import { FaPlus } from 'react-icons/fa6';
const Skils = () => {
      return (
            <div className='mt-20 lg:mx-52'>
                  <Container>
                        <div className='flex flex-col lg:flex-row justify-between gap-10 relative'>
                              <img src={aboutimg} alt="img" className='h-[450px] rounded-lg' />
                              <div>
                                    <p className='text-gray-800'>About Us</p>
                                    <div className='lg:text-5xl text-xl font-semibold mt-2 font text-gray-800 '>
                                          <h1>Learn & Grow Your Skills</h1>
                                          <h1 className='mt-4'>From <span className='text-[#ee4a62]'>Anywhere</span></h1>
                                    </div>
                                    <p className='mt-5 tracking-wide'>Enhance your knowledge and master new skills from the comfort of your home. Unlock endless learning opportunities and grow at your own pace!</p>
                                    <div className='mt-5 space-y-2'>
                                          <h1 className='flex items-center gap-4 tracking-wide'><GiCheckMark className='text-yellow-500' size={20} /> Expert Trainers</h1>
                                          <h1 className='flex items-center gap-4 tracking-wide'><GiCheckMark className='text-yellow-500' size={20} /> Online Remote Learning</h1>
                                          <h1 className='flex items-center gap-4 tracking-wide'><GiCheckMark className='text-yellow-500' size={20} /> Lifetime Access</h1>
                                    </div>
                              </div>
                              <div className='hidden lg:flex items-center gap-5 absolute bg-white ease-initial py-4 px-4 -bottom-8 left-64 shadow-xl shadow-[#cbece3] rounded-lg'>
                                    <span className='bg-[#e8f8f5] py-2 px-2 rounded-full'>
                                          <LiaAwardSolid size={40} className='text-[#23b792]' />
                                    </span>
                                    <div>
                                          <h1 className='text-[#23b792] text-xl'>29+</h1>
                                          <h1 className='tracking-wide text-gray-800'>Wonderful Awards</h1>
                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default Skils;