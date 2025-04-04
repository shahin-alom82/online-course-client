import React, { useContext } from 'react';
import DashboardTitle from '../../../components/Dashboard/Sidebar/DashboardTitle';
import useAxiosSecure from '../../../hocks/useAxiosSecure';
import { AuthContext } from '../../../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';


const PaymentHistory = () => {
      const axiosSecure = useAxiosSecure();
      const { user } = useContext(AuthContext);
      const { data: payments = [], isLoading, isError } = useQuery({
            queryKey: ["payments", user?.email],
            queryFn: async () => {
                  const res = await axiosSecure.get(`/payments`);
                  return res.data;
            },
      });

      if (isLoading) return <p>Loading payment history...</p>;
      if (isError) return <p>Error loading payment history</p>;
      return (
            <div>
                  <DashboardTitle role={"User"} action={"Payment History"} />
                  <div className="mt-6 w-full">
                        {/* Table Header (Only visible in large screens) */}
                        <div className="hidden lg:grid grid-cols-5 gap-6 bg-[#23b792] text-white text-lg font-medium py-4 px-6 rounded-t-xl uppercase">
                              <p>Email</p>
                              <p>Price</p>
                              <p>Payment ID</p>
                              <p className="lg:ml-16">Date</p>
                              <p className="lg:ml-8">Status</p>
                        </div>

                        {/* Payment List */}
                        <div className="overflow-y-auto max-h-80 border border-gray-200 rounded-b-xl">
                              {payments.map((item) => (
                                    <div key={item?._id} className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center py-4 px-6 border-b last:border-none">
                                          {/* User Email */}
                                          <p className="text-gray-800 font-medium text-[15px] lg:text-lg break-all">
                                                {item?.email}
                                          </p>
                                          <p className="text-gray-800 font-medium text-[15px] lg:text-lg break-all ml-2">$ {item?.price}</p>

                                          {/* Payment ID */}
                                          <p className="text-gray-600 text-sm lg:text-base break-all lg:w-80">
                                                {item?.transactionsId}
                                          </p>

                                          {/* Payment Date */}
                                          <p className="text-gray-600 text-sm lg:text-base lg:ml-16">
                                                {item?.date.slice(0, 10)}
                                          </p>

                                          {/* Payment Status */}
                                          <p className={`text-sm lg:text-base font-medium text-gray-600 lg:ml-8 `}>
                                                {item?.status}
                                          </p>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default PaymentHistory;