



import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import useRole from "../hocks/useRole";

const Heading = () => {
      const { user, logOut } = useContext(AuthContext);
      const [role] = useRole();

      // Nav
      const nav = [
            { title: "Home", path: "/" },
            { title: "Course", path: "/course" },
            { title: "Blog", path: "/blog" },
            { title: "Contact", path: "/contact" },
      ];

      // User & Role Condition
      if (user) {
            if (role === "admin") {
                  nav.push({ title: "Dashboard", path: "/dashboard/adminhome" });
            } else {
                  nav.push({ title: "Dashboard", path: "/dashboard/userhome" });
            }
      }

      // Log Out
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
                  <div className="flex items-center justify-between py-4 lg:max-w-screen-xl mx-auto lg:px-0 px-4">
                        {/* Logo */}
                        <div>
                              <Link to={"/"}>
                                    <img src={logo} alt="logo" className="h-12" />
                              </Link>
                        </div>

                        {/* Nav item */}
                        <div className="md:flex items-center gap-x-10 hidden md:block">
                              {nav.map((item, index) => (
                                    <div key={index}>
                                          <NavLink
                                                className={({ isActive }) =>
                                                      isActive
                                                            ? "text-[#23b792] text-[18px] font-medium"
                                                            : "text-gray-800 text-[18px] font-medium"
                                                }
                                                to={item?.path}
                                          >
                                                {item?.title}
                                          </NavLink>
                                    </div>
                              ))}
                        </div>

                        {/* Login Button */}
                        {user ? (
                              <div onClick={() => handleLogout()} className="hidden md:block">
                                    <button className="bg-[#23b792] py-1.5 cursor-pointer hover:bg-red-500 duration-300 px-3 flex items-center gap-1 text-[18px] text-white">
                                          Logout <LuLogOut />
                                    </button>
                                    {/* <span className=""><img src={user?.photoURL} alt="img" className="h-12 w-12 border-2 border-[#23b792] rounded-full" /></span> */}
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

                        {/* Mobile Menu */}
                        <div className="md:hidden block">
                              <IoClose size={30} />
                        </div>
                  </div>
            </div>
      );
};

export default Heading;
