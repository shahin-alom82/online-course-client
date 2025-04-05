// import React from 'react';
// import Container from './Container';
// import { MdCall, MdEmail } from 'react-icons/md';
// import { FaArrowRightLong } from 'react-icons/fa6';

// const TopHeading = () => {
//       return (
//             <div className='bg-[#232323] text-gray-400 py-3'>
//                   <Container className={'flex items-center justify-between'}>
//                         <div className='flex items-center gap-10 font'>
//                               <h1 className='flex items-center gap-3 tracking-wide border-r pr-10'><MdCall size={20} className='text-[#23b792]' />
//                                     Call: 01682247291</h1>
//                               <h1 className='flex items-center gap-3 tracking-wide'><MdEmail size={22} className='text-[#23b792]' />
//                                     Email: shahinalom3511371@gmail.com</h1>
//                         </div>
//                         <div className='font'>
//                               <h1>Login/Register</h1>
//                         </div>
//                   </Container>
//             </div>
//       );
// };

// export default TopHeading;













import React from 'react';
import Container from './Container';
import { MdCall, MdEmail } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';


const TopHeading = () => {
      return (
            <div className="bg-[#232323] text-gray-400 text-sm py-4 hidden md:block">
                  <Container className="flex flex-col md:flex-row items-center justify-between gap-4">

                        {/* Contact Info */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 text-gray-400">
                              <div className="flex items-center gap-2 border-r border-gray-400 pr-8">
                                    <MdCall size={18} className="text-[#23b792]" />
                                    <span className="tracking-wide font">Call: +088 01682247291</span>
                              </div>
                              <div className="flex items-center gap-2">
                                    <MdEmail size={18} className="text-[#23b792]" />
                                    <span className="tracking-wide font">Email: shahinalom3511371@gmail.com</span>
                              </div>
                        </div>

                        {/* Action Section */}

                        <div>
                              <span className="hover:text-[#23b792] cursor-pointer duration-300 text-gray-400 font">Login / Register</span>
                        </div>

                  </Container>
            </div>
      );
};


export default TopHeading;
