import React from 'react';
import { Link } from 'react-router-dom';
import { GrSearchAdvanced } from "react-icons/gr";
import { LiaWpbeginner } from "react-icons/lia";
import { PiStudentDuotone } from "react-icons/pi";
const Categories = () => {

      const courseCategory = [
            {
                  category: "Intermediate",
                  path: '/intermediate',
                  icon: <PiStudentDuotone size={25} />
            },
            {
                  category: "Advanced",
                  path: '/advanced',
                  icon: <GrSearchAdvanced size={25} />
            },
            {
                  category: "Beginner",
                  path: '/beginner',
                  icon: <LiaWpbeginner size={25} />
            }
      ]

      return (
            <div className='mt-3'>
                  {
                        courseCategory.map((item) => (
                              <div key={item?._id}>
                                    <Link className='flex items-center justify-between space-y-4 text-gray-600 hover:text-[#23b792] duration-300' to={item?.path}>
                                          <h1 className='mt-2 tracking-wide text-lg'>{item?.category}</h1>
                                          <h1>{item?.icon}</h1>
                                    </Link>
                              </div>
                        ))
                  }
            </div>
      );
};

export default Categories;


