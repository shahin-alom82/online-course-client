


import React from 'react';
import Container from './Container';
import { FaArrowRight } from 'react-icons/fa6';

const HeaderTitle = ({ role, action }) => {
      return (
            <div>
                  <div className="bg-blue-300 ">
                        <Container className="flex items-center gap-6  text-black font-semibold bg-blue-300 rounded-md">
                              <h1 className="uppercase">{role}</h1>
                              <FaArrowRight />
                              <span>{action}</span>
                              <FaArrowRight />
                              {/* <h1 className="cursor-pointer">
                                    Logout
                              </h1> */}
                        </Container>
                  </div>
            </div>
      );
};

export default HeaderTitle;