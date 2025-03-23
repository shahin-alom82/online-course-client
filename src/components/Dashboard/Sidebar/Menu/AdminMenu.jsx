import React from 'react';
import MenuStyle from './MenuStyle';
import { TfiHome } from "react-icons/tfi";
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { SiConcourse } from 'react-icons/si';
import { LuUsers } from 'react-icons/lu';
import { MdOutlineManageSearch } from "react-icons/md";


const AdminMenu = () => {
      return (
            <div>
                  <MenuStyle icon={TfiHome} title={'Admin Home'} location={'/dashboard/adminhome'} />
                  <MenuStyle icon={LiaChalkboardTeacherSolid} title={'Add Teacher'} location={'/dashboard/addteacher'} />
                  <MenuStyle icon={SiConcourse} title={'Add Course'} location={'/dashboard/addcourse'} />
                  <MenuStyle icon={MdOutlineManageSearch} title={'Manage Course'} location={'/dashboard/managecourse'} />
                  <MenuStyle icon={LuUsers} title={'All Users'} location={'/dashboard/allusers'} />
            </div>
      );
};

export default AdminMenu;