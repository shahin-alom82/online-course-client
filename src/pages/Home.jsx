import React from 'react';
import Banner from '../components/Banner';
import BottomBanner from '../components/BottomBanner';
import TopCategory from '../components/TopCategory';
import AboutUs from '../components/AboutUs';
import { Helmet } from 'react-helmet-async';
import Instructors from '../components/Instructors/Instructors';
import Testimonials from '../components/Testimonials';
import OurPartnerse from '../components/OurPartnerse';

const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title>EduBlink | Home</title>
                  </Helmet>
                  <Banner />
                  <BottomBanner />
                  <TopCategory />
                  <Instructors />
                  <AboutUs />
                  <Testimonials />
                  <OurPartnerse />
            </div>
      );
};

export default Home;