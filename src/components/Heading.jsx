import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import logo from '../assets/logo.png'
const Heading = () => {
      const nav = [
            { title: "Home", path: "/" },
            { title: "Course", path: "/course" },
            { title: "About", path: "/about" },
            { title: "Contact", path: "/contact" },
            { title: "Dashboard", path: "/bashboard" },
      ]
      return (
            <div>
                  <Container >
                        <div className={"flex items-center justify-between"}>
                              <img src={logo} alt="logoimg" />
                              <div className='flex items-center'>
                                    {
                                          nav.map((item, index) => (
                                                <div key={index}>
                                                      <Link to={item?.path}>
                                                            {item?.title}
                                                      </Link>
                                                </div>
                                          ))
                                    }
                              </div>
                              <div>
                                    <button>Login</button>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default Heading;