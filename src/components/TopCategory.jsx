import React from 'react';
import Container from './Container';
import { GrAnnounce, GrBusinessService } from 'react-icons/gr';
import { SiAffinitydesigner } from 'react-icons/si';
import { MdDeveloperMode, MdOutlinePhotoLibrary } from 'react-icons/md';
import { GiHealthIncrease } from 'react-icons/gi';
import { BsDatabaseFillGear } from 'react-icons/bs';
import { PiHandshake } from 'react-icons/pi';
import { RiComputerLine, RiHealthBookLine } from 'react-icons/ri';



const TopCategory = () => {

      const cart = [
            { icon: <GrBusinessService size={40} />, title: "Business Management", style: ['bg-[#DDEB9D]'] },
            { icon: <SiAffinitydesigner size={40} />, title: "Arts & Design", style: ['bg-[#fee2e7]'] },
            { icon: <MdDeveloperMode size={40} />, title: "Personal Development", style: ['bg-[#DDEB9D]'] },
            { icon: <RiHealthBookLine size={40} />, title: "Health & Fitness", style: ['bg-[#fee2e7]'] },
            { icon: <BsDatabaseFillGear size={40} />, title: "Data Science", style: ['bg-[#DDEB9D]'] },
            { icon: <GrAnnounce size={40} />, title: "Marketing", style: ['bg-[#fee2e7]'] },
            { icon: <PiHandshake size={40} />, title: "Business & Finance", style: ['bg-[#DDEB9D]'] },
            { icon: <RiComputerLine size={40} />, title: "Computer Science", style: ['bg-[#fee2e7]'] },
            { icon: <MdOutlinePhotoLibrary size={40} />, title: "Video & Photography", style: ['bg-[#DDEB9D]'] }
      ]

      return (
            <div className='mt-20'>
                  <Container>
                        <div>
                              <div className='items-center justify-center text-center'>
                                    <h1 className='text-4xl font-semibold uppercase text-gray-800'>Top Categories</h1>
                                    <p className='mt-4 tracking-wide'>Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
                                    </p>
                              </div>
                        </div>
                        {/*Course Cart */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8'>

                              {
                                    cart.map((item, index) => (
                                          <div key={index} className={`${item?.style} flex items-center gap-6 py-5 px-6`}>
                                                <h1 className='text-[#23b792]'>{item?.icon}</h1>
                                                <h1 className='text-xl tracking-wide text-[#5d5d5d]'>{item?.title}</h1>
                                          </div>
                                    ))
                              }

                        </div>
                  </Container>
            </div>
      );
};

export default TopCategory;