import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuStyle = ({ location, title, icon: Icon }) => {

      return (
            <div>
                  <div className='mt-6'>
                        <NavLink
                              to={location}
                              className={({ isActive }) => `flex items-center gap-2 text-lg ${isActive ? "text-indigo-600" : ""}`}>
                              <Icon className="border py-1 text-2xl rounded-full" />
                              <span className='text-[17px] hidden md:block'>{title}</span>
                        </NavLink>
                  </div>
            </div>
      );
};

export default MenuStyle;