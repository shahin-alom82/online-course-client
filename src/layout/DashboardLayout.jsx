import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

import React from "react";

const DashboardLayout = () => {
      return (
            <div className="flex w-full">
                  {/* Side bar */}
                  <div className="border-r-2 border-gray-300 md:w-[18%] min-h-screen fixed px-4 py-4">
                        <Sidebar />
                  </div>
                  {/* Content Section */}
                  <div className="flex-1 pr-10 py-4 md:ml-[20%] ml-20">
                        <Outlet />
                  </div>
            </div>
      );
};

export default DashboardLayout;













