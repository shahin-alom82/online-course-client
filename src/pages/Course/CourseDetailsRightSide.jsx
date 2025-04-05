import toast from "react-hot-toast";
import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { FaRegClock, FaSackDollar } from 'react-icons/fa6';
import { MdOutlinePayment, MdOutlinePlayLesson } from 'react-icons/md';
import { PiStudentFill } from 'react-icons/pi';
import { LiaAwardSolid, LiaUserTieSolid } from "react-icons/lia";
import { GrLanguage } from "react-icons/gr";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Payments/CheckoutForm ";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk)


const CourseDetailsRightSide = ({ course }) => {
      const { user } = useContext(AuthContext);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const navigate = useNavigate()

      const handleEnroll = () => {
            if (!user) {
                  // return toast.success('Please Login Now!');
                  return navigate('/login')
            }
            setIsModalOpen(true);
      };

      const closeModal = () => {
            setIsModalOpen(false);
      };

      return (
            <div>
                  <h1 className='text-2xl'>Course Includes:</h1>

                  <div className="mt-2 text-lg text-gray-700 bg-white p-5 rounded-lg space-y-2">
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                              <h1 className="flex items-center gap-3">
                                    <FaSackDollar size={18} className="text-green-500" /> Price:
                              </h1>
                              <h1 className="text-gray-900">${course?.price}</h1>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 py-3">
                              <h1 className="flex items-center gap-2">
                                    <LiaUserTieSolid size={25} className="text-blue-500" /> Instructor:
                              </h1>
                              <h1 className="text-gray-900">{course?.instructorName}</h1>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 py-3">
                              <h1 className="flex items-center gap-3">
                                    <FaRegClock size={18} className="text-purple-500" /> Duration:
                              </h1>
                              <h1 className="text-gray-900">{course?.duration}</h1>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 py-3">
                              <h1 className="flex items-center gap-3">
                                    <MdOutlinePlayLesson size={22} className="text-orange-500" /> Lessons:
                              </h1>
                              <h1 className="text-gray-900">{course?.lessons}</h1>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 py-3">
                              <h1 className="flex items-center gap-2">
                                    <PiStudentFill size={25} className="text-teal-500" /> Students:
                              </h1>
                              <h1 className="text-gray-900">{course?.enrollmentCount}</h1>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 py-3">
                              <h1 className="flex items-center gap-3">
                                    <GrLanguage size={18} className="text-indigo-500" /> Language:
                              </h1>
                              <h1 className="text-gray-900">{course?.language}</h1>
                        </div>

                        <div className="flex justify-between items-center pt-3">
                              <h1 className="flex items-center gap-2">
                                    <LiaAwardSolid size={25} className="text-yellow-500" /> Certifications:
                              </h1>
                              <h1 className="text-gray-900">Yes</h1>
                        </div>

                        {/* Enroll Button */}
                        <button
                              onClick={handleEnroll}
                              className='bg-[#23b792] text-center justify-center py-3 w-full text-lg rounded-full tracking-wide text-white mt-4 font'
                        >
                              Enroll Now
                        </button>
                  </div>

                  {/* Sidebar Image */}
                  <div>
                        <img src="https://i.ibb.co.com/YFvL4Qc4/sidebar-ad.png" alt="img" className='w-full' />
                  </div>

                  {/* Modal Component */}
                  <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        className="bg-white py-10 px-10 rounded-lg shadow-md mt-24 relative w-[600px]"
                        overlayClassName="fixed inset-0 flex justify-center items-center bg-black/80"
                  >
                        <button
                              onClick={closeModal}
                              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl font-bold">
                              ✖
                        </button>

                        <h2 className="lg:text-2xl text-gray-600 font-medium flex items-center gap-2 mb-4">
                              <MdOutlinePayment size={35} /> <span>Enter Payment Details</span>
                        </h2>

                        <Elements stripe={stripePromise}>
                              <CheckoutForm />
                        </Elements>

                  </Modal>

            </div>
      );
};

export default CourseDetailsRightSide;
