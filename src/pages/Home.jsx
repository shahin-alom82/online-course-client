import React from 'react';
import Banner from '../components/Banner';
import BottomBanner from '../components/BottomBanner';
import TopCategory from '../components/TopCategory';
import Skils from '../components/Skils';
import { Helmet } from 'react-helmet-async';

const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title>EduBlink | Home</title>
                  </Helmet>
                  <Banner />
                  <BottomBanner />
                  <TopCategory />
                  <Skils />
            </div>
      );
};

export default Home;