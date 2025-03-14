import React from 'react';
import { Outlet } from 'react-router-dom';
import Heading from '../components/Heading';
const MainLayout = () => {
      return (
            <div>
                  <Heading />
                  <Outlet />
            </div>
      );
};

export default MainLayout;