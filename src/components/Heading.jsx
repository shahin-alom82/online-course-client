import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { IoClose, IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import useRole from "../hocks/useRole";
import TopHeading from "./TopHeading";
import { MdLogout } from "react-icons/md";
import { FaRegUser, FaUser } from "react-icons/fa6";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

const Heading = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const { user, logOut } = useContext(AuthContext);
      const [role] = useRole();

      // Nav items
      const nav = [
            { title: "Home", path: "/" },
            { title: "Course", path: "/course" },
            { title: "Blog", path: "/blog" },
            { title: "Contact", path: "/contact" },
      ];

      // Add Dashboard link based on user role
      if (user) {
            if (role === "admin") {
                  nav.push({ title: "Dashboard", path: "/dashboard/adminhome" });
            } else {
                  nav.push({ title: "Dashboard", path: "/dashboard/userhome" });
            }
      }

      // Log out functionality
      const handleLogout = async () => {
            try {
                  await logOut();
                  toast.success("Logout Successfully!");
            } catch (error) {
                  toast.error("Logout Error!");
            }
      };

      return (
            <div className="fixed top-0 left-0 right-0 z-50 bg-white">
                  <TopHeading />

                  <div className="flex items-center justify-between py-4 lg:max-w-screen-xl mx-auto lg:px-0 px-4">
                        {/* Logo */}
                        <div>
                              <Link to={"/"}>
                                    <img src={logo} alt="logo" className="h-[50px]" />
                              </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="lg:flex items-center gap-x-10 hidden md:block">
                              {nav.map((item, index) => (
                                    <div key={index} className="relative group">
                                          <NavLink
                                                to={item?.path}
                                                className={({ isActive }) =>
                                                      (isActive
                                                            ? "text-[#23b792]"
                                                            : "text-gray-800") +
                                                      " text-[18px] font-medium relative"
                                                }
                                          >
                                                {item?.title}
                                                {/* underline */}
                                                <span
                                                      className={`absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[#23b792] transition-all duration-300 group-hover:w-full`}
                                                ></span>
                                          </NavLink>
                                    </div>
                              ))}

                        </div>

                        {/* Login / Logout Button */}
                        {user ? (
                              <div onClick={() => handleLogout()} className="hidden md:block">
                                    <button className="bg-[#23b792] py-1.5 cursor-pointer hover:bg-red-500 duration-300 px-3 flex items-center gap-1 text-[18px] text-white">
                                          Logout <LuLogOut />
                                    </button>
                              </div>
                        ) : (
                              <NavLink to={"/login"}>
                                    <div className="hidden md:block">
                                          <button className="bg-[#23b792] py-1.5 px-3 flex items-center gap-1 text-[18px] text-white">
                                                Login <LuLogIn />
                                          </button>
                                    </div>
                              </NavLink>
                        )}

                        {/* Mobile Menu Icon */}
                        <div className="md:hidden block">
                              {isMenuOpen ? (
                                    <button onClick={() => setIsMenuOpen(false)}>
                                          <IoClose size={30} />
                                    </button>
                              ) : (
                                    <button onClick={() => setIsMenuOpen(true)}>
                                          <IoMenuSharp size={30} />
                                    </button>
                              )}
                        </div>

                  </div>

                  {/* Mobile Menu */}
                  {isMenuOpen && (
                        <div className="flex flex-col py-4 md:hidden block  bg-black/90 text-white  items-start gap-5 px-5 border-t-2 border-[#23b792] ">
                              {nav.map((item, index) => (
                                    <div className="">
                                          <Link
                                                key={index}
                                                to={item.path}
                                                className="text-lg tracking-wide"
                                                onClick={() => setIsMenuOpen(false)}
                                          >
                                                {item.title}
                                          </Link>
                                    </div>
                              ))}
                              <hr className="border-gray-500 w-full my-3" />
                              {user ? (
                                    <button
                                          onClick={handleLogout}
                                          className="flex items-center gap-2 text-lg hover:text-rose-500"
                                    >
                                          Logout <MdLogout size={20} className="text-red-500" />
                                    </button>
                              ) : (
                                    <Link to={"/login"} className="flex items-center gap-2 text-lg">
                                          <FaRegUserCircle size={20} />
                                          Login / Register
                                    </Link>
                              )}
                        </div>
                  )}
            </div>
      );
};

export default Heading;
