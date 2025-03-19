
import { Link, NavLink } from "react-router-dom";
import useRole from "../../../hocks/useRole";
import AdminMenu from "./Menu/AdminMenu";
import UserMenu from "./Menu/UserMenu";
import React from 'react';
import logo from '../../../assets/logo.png'

const Sidebar = () => {
      const [role] = useRole()
      return (
            <div>
                  {/* Top Menu*/}
                  <div>
                        <div className='lg:flex items-center justify-between hidden md:block'>
                              <Link to={"/"}>
                                    <img src={logo} alt="img" className='h-8' />
                              </Link>
                              <span className='text-[#23b792]'><NavLink to={"/dashboard/profile"}>Profile</NavLink></span>
                        </div>
                        <div className=' border-b-2 border-[#23b792] mt-2 hidden md:block'></div>
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
