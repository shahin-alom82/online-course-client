import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { LuLogIn } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
const Heading = () => {
      const nav = [
            { title: "Home", path: "/" },
            { title: "Course", path: "/course" },
            // { title: "About", path: "/about" },
            { title: "Contact", path: "/contact" },
            { title: "Dashboard", path: "/bashboard" },
      ]
      return (
            <div>
                  <div className={"flex items-center justify-between  py-4 lg:max-w-screen-xl mx-auto "}>
                        {/* sticky lg:fixed top-0 left-0 right-0 z-10 opacity-70 px-5 */}
                        {/*  bg-gradient-to-r from-[#1cccf5] to-[#77e9d0] px-5 */}
                        {/* Logo */}
                        <div>
                              <Link to={"/"}>
                                    <img src={logo} alt="logo" />
                              </Link>
                        </div>
                        {/* Nav item */}
                        <div className='md:flex  items-center gap-x-10 hidden md:block'>
                              {
                                    nav.map((item, index) => (
                                          <div key={index}>
                                                <NavLink className={({ isActive }) => isActive ? "text-red-600 text-[18px] font-medium " : "text-gray-800 text-[18px] font-medium"} to={item?.path}>
                                                      {item?.title}
                                                </NavLink>
                                          </div>
                                    ))
                              }
                        </div>
                        {/* Login Button */}
                        <NavLink to={"/login"}>
                              <div className='hidden md:block'>
                                    <button className='bg-[#23b792] py-1.5 px-3 flex items-center gap-1 text-[18px] text-white'>Login <LuLogIn />
                                    </button>
                              </div>
                        </NavLink>
                        {/* Mobile Menu */}
                        <div className='md:hidden block'>
                              <IoClose size={30} />
                        </div>
                  </div>
            </div>
      );
};

export default Heading;