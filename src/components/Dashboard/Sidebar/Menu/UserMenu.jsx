import React from 'react';
import MenuStyle from './MenuStyle';
import { FaHome } from 'react-icons/fa';

const UserMenu = () => {
      return (
            <div>
                  <MenuStyle icon={FaHome} title={'User Home'} location={'/dashboard/userhome'} />
            </div>
      );
};

export default UserMenu;