import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Container from "../Container";
import { Helmet } from "react-helmet-async";
import { FaAngleRight, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { MdOutlineDateRange, MdOutlineMarkEmailUnread } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const InstructorsDetails = () => {
      const instructors = useLoaderData();

      return (
            <div>
                  <Helmet>
                        <title>EduBlink | Details</title>
                  </Helmet>
                  <Container className="border-t-2 border-[#23b792] lg:mt-[135px] mt-[85px]">
                        {/* Breadcrumb */}
                        <div className="mt-8 hidden md:block">
                              <div className="flex mt-3 items-center gap-2 text-gray-600">
                                    <Link to={"/"}>
                                          <h1 className="text-lg">Home</h1>
                                    </Link>
                                    <FaAngleRight />
                                    <h1 className="text-black tracking-wide text-xl">{instructors?.category}</h1>
                              </div>
                        </div>

                        {/* Instructor Details */}
                        <div className="mt-[108px] flex flex-col lg:flex-row items-center lg:items-start gap-10">
                              {/* Instructor Image & Social Links */}
                              <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 flex flex-col items-center">
                                    <img
                                          src={instructors?.image}
                                          alt="Instructor"
                                          className="rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-[300px] lg:h-[300px] object-center shadow-md"
                                    />
                                    {/* Social Icons */}
                                    <div className="flex gap-4 sm:gap-6 mt-6">
                                          <FaGithub size={22} className="cursor-pointer text-blue-950 hover:scale-110 transition" />
                                          <FaFacebookSquare size={22} className="cursor-pointer text-blue-500 hover:scale-110 transition" />
                                          <FaInstagramSquare size={22} className="cursor-pointer text-pink-500 hover:scale-110 transition" />
                                          <FaYoutube size={22} className="cursor-pointer text-red-500 hover:scale-110 transition" />
                                          <FaTwitter size={22} className="cursor-pointer text-blue-400 hover:scale-110 transition" />
                                    </div>
                              </div>

                              {/* Instructor Details */}
                              <div className="w-full lg:w-2/3 text-center lg:text-start px-4">
                                    <p className="text-[#23b792] uppercase text-sm">Instructor</p>
                                    <h1 className="text-2xl sm:text-3xl font-medium mt-2">{instructors?.teachername}</h1>
                                    <p className="text-gray-600 mt-2">{instructors?.category}</p>
                                    <h1 className="mt-6 text-xl font-medium">About Me</h1>
                                    <p className="mt-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                                          {instructors?.description || "No description available."}
                                    </p>
                                    <div className="mt-6 text-gray-700">
                                          <h1 className="text-xl font-medium text-black text-start">Contact Me</h1>
                                          <div className="mt-3 space-y-2">
                                                <span className="flex items-center gap-2"><GrLocation size={20} />North Helenavile, FV77 8WS</span>
                                                <span className="flex items-center gap-2"><MdOutlineDateRange size={20} /> {instructors?.date}</span>
                                                <span className="flex items-center gap-2"><MdOutlineMarkEmailUnread size={20} />
                                                      {instructors?.email}</span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default InstructorsDetails;
