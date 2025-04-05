import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaBasketShopping, FaSackDollar } from 'react-icons/fa6';
import useAxiosSecure from '../../../hocks/useAxiosSecure';

const UserHome = () => {
      
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
                  title: "Revenue",
                  value: `$${state?.revenue || 0}`,
                  icon: <FaSackDollar size={30} />,
                  gradient: "from-yellow-400 to-yellow-600",
            },
            {
                  title: "Customers",
                  value: state?.users || 1500,
                  icon: <GiTeamIdea size={30} />,
                  gradient: "from-red-400 to-red-600",
            },
            {
                  title: "Products",
                  value: state?.menuItems || 103,
                  icon: <FaBasketShopping size={30} />,
                  gradient: "from-green-400 to-green-600",
            },
            {
                  title: "Orders",
                  value: state?.orders || 500,
                  icon: <BsFillCartCheckFill size={30} />,
                  gradient: "from-blue-400 to-blue-600",
            },
      ];
      return (
            <div>
                  <h1 className="text-[#23b792] tracking-wide lg:text-2xl flex items-center gap-2 font-medium">
                        <span>Hi, Welcome</span>
                        {user?.displayName ? user?.displayName : "Back"}
                  </h1>
            </div>
      );
};

export default UserHome;