import React from 'react';
import MenuStyle from './MenuStyle';
import { TfiHome } from 'react-icons/tfi';
import { MdOutlinePayment } from 'react-icons/md';
import { BsUniversalAccessCircle } from 'react-icons/bs';

const UserMenu = () => {
      return (
            <div>
                  <MenuStyle icon={TfiHome} title={'User Home'} location={'/dashboard/userhome'} />
                  <MenuStyle icon={MdOutlinePayment} title={'Payments History'} location={'/dashboard/paymentshistory'} />
                  <MenuStyle icon={BsUniversalAccessCircle} title={'Course Access'} location={'/dashboard/courseaccess'} />
            </div>
      );
};

export default UserMenu;