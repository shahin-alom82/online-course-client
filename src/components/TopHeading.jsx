import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Container from './Container';
import { MdCall, MdEmail } from 'react-icons/md';

const TopHeading = () => {
      const [time, setTime] = useState(moment());

      useEffect(() => {
            const interval = setInterval(() => {
                  setTime(moment());
            }, 1000);

            return () => clearInterval(interval);
      }, []);

      return (
            <div className="bg-[#232323] text-gray-400 text-sm py-4 hidden md:block">
                  <Container className="flex flex-col md:flex-row items-center justify-between gap-4">

                        {/* Contact Info */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 text-gray-400">
                              <div className="flex items-center gap-2 border-r border-gray-400 pr-8">
                                    <MdCall size={18} className="text-[#23b792]" />
                                    <span className="tracking-wide ">Call: +088 01682247291</span>
                              </div>
                              <div className="flex items-center gap-2 border-r border-gray-400 pr-8">
                                    <MdEmail size={18} className="text-[#23b792]" />
                                    <span className="tracking-wide ">Email: shahinalom3511371@gmail.com</span>
                              </div>

                              {/* Live Date & Time */}
                              <span>{time.format('Do MMMM YYYY')}</span>
                              <span>{time.format('h:mm:ss A')}</span>
                        </div>

                        {/* Action Section */}
                        <div>
                              <span className="hover:text-[#23b792] cursor-pointer duration-300 text-gray-400">Login / Register</span>
                        </div>

                  </Container>
            </div>
      );
};

export default TopHeading;
