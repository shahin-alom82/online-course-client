import React from 'react';
import Container from '../components/Container'
import '../components/banner.css'
import img from '../assets/girl.webp'
const Banner = () => {
      return (
            <div>
                  <Container className={"banner-bg-img"}>
                        <img src={img} alt="img" className='lg:h-[600px] pt-16 lg:ml-[600px]' />
                  </Container>
            </div>
      );
};

export default Banner;