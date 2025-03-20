
import { Link, NavLink } from "react-router-dom";
import useRole from "../../../hocks/useRole";
import AdminMenu from "./Menu/AdminMenu";
import UserMenu from "./Menu/UserMenu";
import React from 'react';
import logo from '../../../assets/logo.png'
import { ImProfile } from "react-icons/im";

const Sidebar = () => {
      const [role] = useRole()
      return (
            <div>
                  {/* Top Menu*/}
                  <div>
                        <div className='lg:flex items-center justify-between hidden md:block'>
                              <Link to={"/"}>
                                    <img src={logo} alt="img" className='h-10' />
                              </Link>
                              <span className='text-[#23b792] text-lg tracking-wide'>
                                    <NavLink to={"/dashboard/profile"}>Profile</NavLink>
                              </span>
                        </div>
                        <Link to={"/dashboard/profile"}>
                              <div className='md:hidden flex items-center justify-between mt-2 border border-gray-600 rounded-full py-1 px-1'>
                                    <ImProfile />
                              </div>
                        </Link>

                        <div className='border-b-2 border-[#23b792] mt-6 hidden md:block'></div>
                  </div>

                  {/* Nav Menu*/}
                  <nav>
                        {
                              role === 'admin' && <AdminMenu />
                        }
                        {
                              role === 'user' && <UserMenu />
                        }
                  </nav>
            </div>
      );
};

export default Sidebar;
