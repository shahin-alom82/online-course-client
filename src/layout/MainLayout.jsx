import React from 'react';
import { Outlet } from 'react-router-dom';
import Heading from '../components/Heading';
import Fotter from '../components/Fotter';
const MainLayout = () => {
      return (
            <div>
                  <Heading />
                  <Outlet />
                  <Fotter />
            </div>
      );
};

export default MainLayout;