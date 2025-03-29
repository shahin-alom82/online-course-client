import React from 'react';
import Banner from '../components/Banner';
import BottomBanner from '../components/BottomBanner';
import TopCategory from '../components/TopCategory';
import AboutUs from '../components/AboutUs';
import { Helmet } from 'react-helmet-async';
import Instructors from '../components/Instructors';

const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title>EduBlink | Home</title>
                  </Helmet>
                  <Banner />
                  <BottomBanner />
                  <TopCategory />
                  <AboutUs />
                  <Instructors />
            </div>
      );
};

export default Home;