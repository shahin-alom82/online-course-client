import React from 'react';
import Container from '../components/Container'
import img1 from '../assets/testimonial-01.png'
import img2 from '../assets/testimonial-02.png'
import img3 from '../assets/testimonial-03.png'
// import img4 from '../assets/testimonial-04.jpg'
import { FaArrowRightLong } from 'react-icons/fa6';
import '../components/testimonials.css'
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import { PiQuotesLight } from 'react-icons/pi';
import { RiDoubleQuotesR } from 'react-icons/ri';

const Testimonials = () => {

      const testimonials = [
            {
                  img: img1,
                  description: 'Read what our students have to say about their learning.',
                  rating: 4,
                  name: 'Tom Hurley',
                  title: 'UI/UX Designer'
            },
            {
                  img: img2,
                  description: 'Read what our students have to say about their learning.',
                  rating: 4,
                  name: 'Bob Limones',
                  title: 'Web Developer'
            },
            {
                  img: img3,
                  description: 'Read what our students have to say about their learning.',
                  rating: 4,
                  name: 'Robert Lane',
                  title: 'Apps Developer'
            },
            // {
            //       img: img4,
            //       description: 'Read what our students have to say about their learning experience Their reviews reflect the impact of our courses on their growth and success.',
            //       rating: 4,
            //       name: 'David Owens',
            //       title: 'Data Science'
            // }
      ]

      return (
            <div className='mt-26'>
                  <Container className={'flex flex-col lg:flex-row justify-between gap-16'}>
                        <div className='lg:w-1/3'>
                              <p className='text-gray-600'>TESTIMONIALS</p>
                              <div className='text-gray-800 lg:text-4xl text-2xl font mt-4 font-semibold'>
                                    <h1 className=''>What Our <span className='text-[#ee4a62]'>Students</span> </h1>
                                    <h1 className='mt-2'>Have To Say</h1>
                              </div>
                              <p className='text-gray-700 mt-5'>Our students share their inspiring journeys of growth and success. Discover how our courses have helped them <br /> build skills and confidence!</p>
                              <button className='flex items-center gap-2 bg-[#23b792] py-2 px-4 text-white mt-6'>View ALL<FaArrowRightLong /></button>
                        </div>
                        <div className='lg:w-2/3 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-6'>
                              {
                                    testimonials.map((item, index) => (
                                          <div key={index} className='bg-gray-100 rounded-t-md testimonials-bg-img relative'>
                                                <img src={item?.img} alt="img" className='rounded-full h-20 w-20 mt-14 ml-6' />
                                                <div className='px-4 py-4 mt-4'>
                                                      <p className='text-gray-600'>{item?.description}</p>
                                                      <h1 className="flex items-center mt-4">
                                                            {Array(Math.floor(item?.rating)).fill(<IoIosStar className="text-yellow-500" />)}
                                                            {item?.rating % 1 !== 0 && (
                                                                  <IoIosStarHalf className="text-yellow-500" size={30} />
                                                            )}
                                                      </h1>
                                                      <h1 className='text-xl mt-2 font-medium'>{item?.name}</h1>
                                                      <p className='text-gray-600 mt-2 mb-2 text-sm'>{item?.title}</p>
                                                </div>
                                                <span className='border-2 bg-[#23b792] text-white border-white absolute py-1 px-1 top-28 left-20 rounded-full' ><RiDoubleQuotesR /></span>
                                          </div>
                                    ))
                              }
                        </div>
                  </Container>
            </div>
      );
};

export default Testimonials;

