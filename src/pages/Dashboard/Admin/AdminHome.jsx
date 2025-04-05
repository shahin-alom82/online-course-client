import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaSackDollar } from 'react-icons/fa6';
import useAxiosSecure from '../../../hocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { GiTeamIdea } from "react-icons/gi";
import { SiConcourse } from 'react-icons/si';

const AdminHome = () => {

      const { user } = useContext(AuthContext)
      const axiosSecure = useAxiosSecure();

      const { data: state } = useQuery({
            queryKey: ["admin-states"],
            queryFn: async () => {
                  const res = await axiosSecure.get("/admin-states");
                  return res.data;
            },
      });

      const stats = [
            {
                  title: "Total Payment",
                  value: `$${state?.revenue || 0}`,
                  icon: <FaSackDollar size={30} />,
                  gradient: "from-yellow-400 to-yellow-600",
            },
            {
                  title: "Total User",
                  value: state?.users || 1500,
                  icon: <GiTeamIdea size={30} />,
                  gradient: "from-red-400 to-red-600",
            },
            {
                  title: "Total Course",
                  value: state?.courseItems || 103,
                  icon: <SiConcourse size={30} />,
                  gradient: "from-green-400 to-green-600",
            },
            {
                  title: "Orders Course",
                  value: state?.orders || 500,
                  icon: <SiConcourse size={30} />,
                  gradient: "from-blue-400 to-blue-600",
            },
      ];
      return (
            <div>
                  <h1 className="text-[#23b792] tracking-wide lg:text-2xl flex items-center gap-2 font-medium">
                        <span>Hi, Welcome</span>
                        {user?.displayName ? user?.displayName : "Back"}

                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                        {stats.map((state, index) => (
                              <div key={index} className='shadow-xl shadow-white'>
                                    <span className='bg-[#23b792] rounded-t-lg  px-4 py-3 flex items-center mx-auto justify-center text-white'>{state.icon}</span>
                                    <div className='border-l border-r border-b border-gray-300  px-8 '>
                                          <div className='bg-gray-200 items-center justify-center text-center py-4 mb-8'>
                                                <p className='tracking-wide font-medium text-xl text-gray-700'>{state.title}</p>
                                                <p className='tracking-wide mt-1 font'>{state.value}</p>
                                          </div>
                                    </div>
                              </div>
                        ))}

                  </div>

            </div>
      );
};

export default AdminHome;