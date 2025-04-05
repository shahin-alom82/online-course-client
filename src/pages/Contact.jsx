import React, { useState } from 'react';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaArrowRightLong } from 'react-icons/fa6';
import { Helmet } from 'react-helmet-async';
import { FaFacebookSquare, FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import { GrLocation } from 'react-icons/gr';
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {

      const [formData, setFormData] = useState({
            name: "",
            email: "",
            subject: "",
            message: "",
      });

      const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            setFormData({
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
            });
            toast.success('Contact Successfully!')
      };

      return (
            <div className='mt-[82px]'>
                  <Helmet>
                        <title>EduBlink | Contact Us</title>
                  </Helmet>
                  <Container className='border-t-2 border-[#23b792] gap-10'>
                        <div className='max-w-screen-lg mx-auto'>
                              <div className='mt-10'>
                                    <div className='flex flex-col  lg:justify-center lg:items-center lg:text-center'>
                                          <h1 className="text-2xl uppercase">Contact Us</h1>
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
                                    <div className='space-y-4 text-gray-800'>
                                          <div className='text-3xl font font-semibold space-y-1'>
                                                <h1>We're Always Eager to</h1>
                                                <h1 className='mt-3 '>Hear <span className='text-[#ee4a62]'>From You!</span></h1>
                                          </div>
                                          <div className='mt-6'>
                                                <h1 className='text-[22px]'>Address:</h1>
                                                <p className='mt-2 text-gray-600 flex items-center gap-2'><GrLocation />
                                                      Bashdi, Assim, Fulbaria, Mymensingh</p>
                                          </div>
                                          <div className='mt-3'>
                                                <h1 className='text-[22px]'>Email:</h1>
                                                <p className='mt-2 text-gray-600 flex items-center gap-2'><AiOutlineMail />
                                                      shahinalom3511371@gmail.com</p>
                                          </div>
                                          <div className='mt-3'>
                                                <h1 className='text-[22px]'>Phone:</h1>
                                                <p className='mt-2 text-gray-600 flex items-center gap-2'><FiPhoneCall />
                                                      +088 01682247291</p>
                                          </div>
                                          <div>
                                                <div className='flex items-center gap-6 mt-4'>
                                                      <Link to={'https://www.facebook.com/mdshahinalom.mdshahinalom.92'}>
                                                            <FaFacebookSquare size={25} className='cursor-pointer text-blue-500' />
                                                      </Link>
                                                      <Link to={'https://github.com/shahin-alom82'}>
                                                            <FaGithub size={25} className='cursor-pointer text-black' />
                                                      </Link>
                                                      <FaYoutube size={25} className='cursor-pointer text-red-500' />
                                                      <FaTwitter size={25} className='cursor-pointer text-blue-400' />
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mt-16 lg:mt-0'>
                                          <div className='text-gray-800'>
                                                <h1 className='text-3xl font font-semibold'>Get In <span className=''>Touch</span></h1>
                                                <p className='mt-3 text-gray-600'>Fill out this form for booking a consultant advising session.</p>
                                          </div>
                                          <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-4'>
                                                <input
                                                      type="text"
                                                      name="name"
                                                      value={formData.name}
                                                      onChange={handleChange}
                                                      required
                                                      placeholder='Your Name *'
                                                      className='outline-none border-b border-gray-400 py-3 text-gray-500 placeholder:text-gray-500 focus:border-[#23b792] focus:outline-none'
                                                />
                                                <input
                                                      type="email"
                                                      name="email"
                                                      value={formData.email}
                                                      onChange={handleChange}
                                                      required
                                                      placeholder='Enter Your Email *'
                                                      className='outline-none border-b border-gray-400 py-3 text-gray-500 placeholder:text-gray-500 focus:border-[#23b792] focus:outline-none'
                                                />
                                                <input
                                                      type="text"
                                                      name="subject"
                                                      value={formData.subject}
                                                      onChange={handleChange}
                                                      required
                                                      placeholder='Subject *'
                                                      className='outline-none border-b border-gray-400 py-3 text-gray-500 placeholder:text-gray-500 focus:border-[#23b792] focus:outline-none'
                                                />
                                                <input
                                                      type="text"
                                                      name="message"
                                                      value={formData.message}
                                                      onChange={handleChange}
                                                      required
                                                      placeholder='Your Message *'
                                                      className='outline-none border-b border-gray-400 py-3 text-gray-500 placeholder:text-gray-500 focus:border-[#23b792] focus:outline-none'
                                                />
                                                <button
                                                      type="submit"
                                                      className='flex gap-2 text-center justify-center py-2 rounded-full items-center text-white bg-[#23b792]'>
                                                      Submit <FaArrowRightLong />
                                                </button>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default Contact;
