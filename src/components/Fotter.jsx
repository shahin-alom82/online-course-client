import React from 'react';
import Container from '../components/Container'
import logo from '../assets/logo.png'
import { FaArrowRightLong, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
const Fotter = () => {
      return (
            <div>
                  <Container className={"bg-[#efefef] py-10 mt-10"}>
                        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center mt-10 gap-6 lg:px-16 text-gray-800"}>
                              <div>
                                    <img src={logo} alt="logo" />
                                    <div className='mt-4'>
                                          <p className='tracking-wide'>EduBlink is a modern, feature-rich online learning platform designed for interactive and engaging education.</p>
                                          <div className='mt-2'>
                                                <p>Address : Assim, Fulbaria, Mymensingh</p>
                                                <p className='mt-1'>Mobile : 01682247291</p>
                                          </div>
                                    </div>
                              </div>
                              <div className='lg:ml-14'>
                                    <h1 className='text-xl font-medium text-black'>Online Platform</h1>
                                    <div className='mt-6 space-y-1'>
                                          <p>About</p>
                                          <p>Course</p>
                                          <p>Instructor</p>
                                          <p>Instructor Details</p>
                                          <p>Purchase Guide</p>
                                    </div>
                              </div>
                              <div className='lg:ml-6'>
                                    <h1 className='text-xl font-medium text-black'>Links</h1>
                                    <div className='mt-6 space-y-1'>
                                          <p>Contact Us</p>
                                          <p>Gallery</p>
                                          <p>News & Articles</p>
                                          <p>Coming Soon</p>
                                          <p>Sign In/Registration</p>
                                    </div>
                              </div>
                              <div>
                                    <h1 className='text-xl font-medium text-black'>Contacts</h1>
                                    <div className='mt-6'>
                                          <h1>Enter your email address to register to our newsletter subscription</h1>
                                          <div>
                                                <div className='flex items-center mt-4'>
                                                      <input required type="text" className='outline-none border-l border-t border-b border-gray-300 py-2 px-4 placeholder:text-gray-800 lg:w-44 hidden md:block' />
                                                      <button className='bg-[#23b792] flex items-center gap-2 py-[9px] px-4 text-white'>Subscribe <FaArrowRightLong />
                                                      </button>
                                                </div>
                                                <div className='flex items-center gap-6 mt-4'>
                                                      <FaFacebookSquare size={25} className='cursor-pointer text-blue-500' />
                                                      <FaInstagramSquare size={25} className='cursor-pointer text-pink-500' />
                                                      <FaYoutube size={25} className='cursor-pointer text-red-500' />
                                                      <FaTwitter size={25} className='cursor-pointer text-blue-400' />

                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <p className='lg:text-center lg:mt-20 mt-10 text-gray-900 tracking-wide text-sm'>Copyright 2025 <span className='text-[#23b792]'>EduBlink</span> | Developed By <span className='text-[#23b792]'>Shahin.</span> All Rights Reserved</p>
                  </Container>
            </div>
      );
};

export default Fotter;
