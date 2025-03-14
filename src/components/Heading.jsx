import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { LuLogIn } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
const Heading = () => {
      const nav = [
            { title: "Home", path: "/" },
            { title: "Course", path: "/course" },
            { title: "About", path: "/about" },
            { title: "Contact", path: "/contact" },
            { title: "Dashboard", path: "/bashboard" },
      ]
      return (
            <div>
                  <div className={"flex items-center justify-between  py-4 px-5 lg:max-w-screen-xl mx-auto sticky lg:fixed top-0 left-0 right-0 z-10 opacity-70"}>
                        {/* bg-gradient-to-r from-[#24cef0] to-[#60e2d8] */}
                        {/* Logo */}
                        <div>
                              <Link to={"/"}>
                                    <img src={logo} alt="logo" />
                              </Link>
                        </div>
                        {/* Nav item */}
                        <div className='lg:flex items-center gap-x-10 hidden md:block'>
                              {
                                    nav.map((item, index) => (
                                          <div key={index}>
                                                <Link className='text-[18px]' to={item?.path}>
                                                      {item?.title}
                                                </Link>
                                          </div>
                                    ))
                              }
                        </div>
                        {/* Login Button */}
                        <div className='hidden md:block'>
                              <button className='bg-[#23b792] py-2 px-4 flex items-center gap-1 text-[18px] text-white'>Login <LuLogIn />
                              </button>
                        </div>
                        {/* Mobile Menu */}
                        <div className='md:hidden block'>
                              <IoClose size={30} />
                        </div>
                  </div>
            </div>
      );
};

export default Heading;