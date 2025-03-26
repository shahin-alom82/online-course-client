import React from 'react';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaArrowRightLong } from 'react-icons/fa6';

const Contact = () => {
      return (
            <div>
                  <Container className='border-t-2 border-[#23b792] gap-10'>
                        <div className='max-w-screen-lg mx-auto'>
                              <div className='mt-10'>
                                    <div className='flex flex-col lg:justify-center lg:items-center lg:text-center'>
                                          <h1 className="text-4xl font">Contact Us</h1>
                                          <div className='flex mt-3 items-center gap-2 text-gray-600'>
                                                <Link to={"/"}>
                                                      <h1 className="text-lg">Home</h1>
                                                </Link>
                                                <FaAngleRight />
                                                <h1 className="text-lg text-black">Contact Us</h1>
                                          </div>
                                    </div>
                              </div>
                              <div className='flex flex-col lg:flex-row justify-between mt-10'>
                                    <div className='space-y-6 text-gray-800'>
                                          <div className='text-3xl font-medium space-y-1'>
                                                <h1>We're Always Eager to</h1>
                                                <h1 className='mt-3'>Hear From You!</h1>
                                          </div>
                                          <div className='mt-4'>
                                                <h1 className='text-[22px]'>Address</h1>
                                                <p className='mt-2'>Assim, Bashdi, Fulbaria, Mymensingh</p>
                                          </div>
                                          <div className='mt-3'>
                                                <h1 className='text-[22px]'>Email</h1>
                                                <p className='mt-2'>shahinalom3511371@gmail.com</p>
                                          </div>
                                          <div className='mt-3'>
                                                <h1 className='text-[22px]'>Phone</h1>
                                                <p className='mt-2'>(+088) 01682247291</p>
                                          </div>
                                    </div>

                                    <div className='mt-16 lg:mt-0'>
                                          <div className='text-gray-800'>
                                                <h1 className='text-3xl'>Get In Touch</h1>
                                                <p className='mt-2'>Fill out this form for booking a consultant advising session.</p>
                                          </div>
                                          <form className='flex flex-col gap-4 mt-4'>
                                                <input type="text" required placeholder='Your Name *' className='outline-none border-b border-gray-400 py-3 text-gray-500 placeholder:text-gray-500' />
                                                <input type="email" required placeholder='Enter Your Email *' className='outline-none border-b border-gray-400 py-3 text-gray-500 placeholder:text-gray-500' />
                                                <input type="text" required placeholder='Subject *' className='outline-none border-b border-gray-400 py-3 text-gray-500 placeholder:text-gray-500' />
                                                <input type="text" required placeholder='Your Message *' className='outline-none border-b border-gray-400 py-3 text-gray-500 placeholder:text-gray-500' />
                                          </form>
                                          <div className='flex gap-2 text-center justify-center py-2 mt-3 rounded-full items-center text-white bg-[#23b792]'>
                                                <input type="submit" />
                                                <FaArrowRightLong />
                                          </div>
                                    </div>

                              </div>
                        </div>

                  </Container>
            </div>
      );
};

export default Contact;