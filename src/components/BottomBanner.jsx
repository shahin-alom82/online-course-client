import React from "react";
import Container from "./Container";
import course from "../assets/course.png";
import member from "../assets/membership.png";
import certificate from "../assets/certificate.png";
import instructor from "../assets/instructor.png";

const BottomBanner = () => {
      return (
            <div>
                  <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 gap-6 text-white bg-[#20b794] py-6">
                        {/* Course Section */}
                        <div className="flex items-center gap-4">
                              <span className="bg-white/10 py-4 px-4 lg:ml-6 rounded-full"> <img src={course} alt="Course" className="h-14 filter brightness-0 invert" /></span>
                              <div>
                                    <p className="text-2xl">3020+</p>
                                    <p className="text-xl opacity-80">Online Courses
                                    </p>
                              </div>
                        </div>
                        {/* Course Section */}
                        <div className="flex items-center gap-4">
                              <span className="bg-white/10 py-4 px-4 rounded-full"> <img src={instructor} alt="Course" className="h-14 filter brightness-0 invert" /></span>
                              <div>
                                    <p className="text-2xl">Top</p>
                                    <p className="text-xl opacity-80">Instructors</p>
                              </div>
                        </div>
                        {/* Course Section */}
                        <div className="flex items-center gap-4">
                              <span className="bg-white/10 py-4 px-4  rounded-full"> <img src={certificate} alt="Course" className="h-14 filter brightness-0 invert" /></span>
                              <div>
                                    <p className="text-2xl">Online</p>
                                    <p className="text-xl opacity-80">Certifications
                                    </p>
                              </div>
                        </div>
                        {/* Course Section */}
                        <div className="flex items-center gap-4">
                              <span className="bg-white/10 py-4 px-4  rounded-full"> <img src={member} alt="Course" className="h-14 filter brightness-0 invert" /></span>
                              <div>
                                    <p className="text-2xl">6,000</p>
                                    <p className="text-xl opacity-80">Membership</p>
                              </div>
                        </div>


                  </Container>
            </div>
      );
};

export default BottomBanner;
