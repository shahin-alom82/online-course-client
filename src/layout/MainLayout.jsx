import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Heading from '../components/Heading';
import Fotter from '../components/Fotter';
const MainLayout = () => {
      const location = useLocation()
      const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
      return (
            <div>
                  {noHeaderFooter || <Heading />}
                  <Outlet />
                  {noHeaderFooter || <Fotter />}
            </div>
      );
};

export default MainLayout;