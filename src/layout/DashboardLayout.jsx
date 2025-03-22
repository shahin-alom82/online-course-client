import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

import React from "react";
import useRole from "../hocks/useRole";
import { ImSpinner2 } from "react-icons/im";

const DashboardLayout = () => {

      const [, isPending] = useRole()

      // Loading
      // if (isPending) {
      //       return (
      //             <ImSpinner2 className="animate-spin mx-auto text-[#23b792] mt-80" size={60} />
      //       );
      // }

      return (
            <div className="flex w-ful">
                  {/* Side bar */}
                  <div className=" md:w-[18%] min-h-screen fixed px-4 py-4 bg-[#c9d0d5]">
                        <Sidebar />
                  </div>
                  {/* Content Section */}
                  <div className="flex-1 min-h-screen">
                        <div className="md:ml-[20%] ml-20 py-5 pr-7">
                              <Outlet />
                        </div>
                  </div>
            </div>
      );
};

export default DashboardLayout;











