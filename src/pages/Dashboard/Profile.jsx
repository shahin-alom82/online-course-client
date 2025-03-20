import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FaUserTie } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

import useRole from '../../hocks/useRole';
import DashboardTitle from '../../components/Dashboard/Sidebar/DashboardTitle';

const Profile = () => {
      const { user } = useContext(AuthContext)
      const [role, isPending] = useRole()


      // Loading
      if (isPending) {
            return (
                  <div className="text-center mt-80">
                        <p className='text-3xl text-[#23b792] tracking-wide'>Loading...</p>
                  </div>
            );
      }

      return (
            <div>
                  <DashboardTitle role={role} action={"Profile"} />
                  <div className="mt-10 text-center py-8 px-6 lg:w-[480px] border border-[#23b792] rounded-xl shadow-lg bg-white">

                        <img
                              src={user?.photoURL}
                              alt="User"
                              className="rounded-full lg:w-56 lg:h-56 border-4 border-[#23b792] mx-auto shadow-md"
                        />
                        <div className="mt-5 text-[18px] text-gray-800 flex flex-col items-center text-center">
                              <h1 className="font-medium text-gray-700 text-lg flex items-center gap-2">
                                    <FaUserTie /> {user?.displayName}
                              </h1>
                              <h1 className="mt-2 text-gray-600 flex items-center gap-2">
                                    <TfiEmail />{user?.email}
                              </h1>
                        </div>

                  </div>
            </div>

      );
};

export default Profile;