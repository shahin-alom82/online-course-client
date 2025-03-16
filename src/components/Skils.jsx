import React from 'react';
import Container from './Container';
import aboutimg1 from '../assets/about1.jpeg'
import aboutimg2 from '../assets/about2.webp'
import aboutimg3 from '../assets/about3.jpg'
const Skils = () => {
      return (
            <div className='mt-20'>
                  <Container>
                        <div>
                              <img src={aboutimg1} alt="" />
                              <div>
                                    <p>About Us</p>
                                    <h1>Learn & Grow Your Skills <br /> From <span>Anywhere</span></h1>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default Skils;