import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaArrowRightLong } from "react-icons/fa6";
import { LuLogOut } from 'react-icons/lu';

const DashboardTitle = ({ role, action }) => {

      const { logOut } = useContext(AuthContext);
      const navigate = useNavigate();

      // Log Out
      const handleLogout = async () => {
            try {
                  await logOut()
                  toast.success('Logout Successfully!')
                  navigate('/')
            } catch (error) {
                  toast.error('Logout Error!')
            }
      }


      return (

            <div>
                  <div>
                        <div className="flex uppercase items-center lg:text-[16px] text-xs lg:gap-6 gap-3 mt-1 text-black font-medium rounded-md">
                              <h1 className="tracking-wide">{role}</h1>
                              <FaArrowRightLong />
                              <span>{action}</span>
                              <FaArrowRightLong />
                              <h1 onClick={() => handleLogout()} className="cursor-pointer text-red-600 flex items-center gap-1">
                                    Logout <LuLogOut />
                              </h1>
                        </div>
                  </div>
            </div>
      );


};

export default DashboardTitle;