import React from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Heading from '../components/Heading';
import Fotter from '../components/Fotter';
import useRole from '../hocks/useRole';
import { ImSpinner2 } from 'react-icons/im';
const MainLayout = () => {
      const [, isPending] = useRole()
      const location = useLocation()
      const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')

      // Loading
      // if (isPending) {
      //       return (
      //             <ImSpinner2 className="animate-spin mx-auto text-[#23b792] mt-80" size={60} />
      //       )
      // }

      return (
            <div>
                  {noHeaderFooter || <Heading />}
                  <Outlet />
                  <ScrollRestoration />
                  {noHeaderFooter || <Fotter />}
            </div>
      );
};

export default MainLayout;