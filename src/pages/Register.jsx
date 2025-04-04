

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import "../pages/login.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import axios from 'axios';


const Register = () => {
      const [showPassword, setShowPassword] = useState(false);
      const { createUser, updateUserProfile } = useContext(AuthContext)

      // Replace
      const from = location.state?.from?.pathName || "/"
      const navigate = useNavigate()

      const handleRegister = async e => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            const name = form.name.value;
            const image = form.image.files[0];
            const formData = new FormData();
            formData.append('image', image);


            try {
                  const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`, formData);
                  const imageUrl = data.data.display_url;
                  await createUser(email, password);
                  updateUserProfile(name, imageUrl);
                  form.reset();
                  navigate(from, { replace: true })
                  toast.success('Register Successfully!')
            } catch (error) {
                  toast.error('Register Error !')
            };
      };



      return (
            <div className="login-bg-img">
                  <Container className="login-container">
                        <h2 className="text-center text-3xl font-bold text-gray-800 font">Register Now</h2>
                        {/* <img src={gif} alt="img" className="h-16 mx-auto" /> */}
                        <form onSubmit={handleRegister} className="mt-6 space-y-2">

                              {/* Your Name */}
                              <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                          Your Name
                                    </label>
                                    <input
                                          id="name"
                                          name="text"
                                          type="name"
                                          required
                                          className="mt-2 block w-full rounded-lg border border-gray-300 py-2 px-4 outline-none placeholder:text-gray-600"
                                    />
                              </div>
                              {/* Fhoto Url */}
                              <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                          Photo URL
                                    </label>
                                    <input
                                          id="image"
                                          name="image"
                                          type="file"
                                          required
                                          className="mt-2 block w-full rounded-lg border border-gray-300 py-2 px-4 outline-none placeholder:text-gray-600"
                                    />
                              </div>
                              {/* Email Address */}
                              <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                          Email address
                                    </label>
                                    <input
                                          id="email"
                                          name="email"
                                          type="email"
                                          required
                                          className="mt-2 block w-full rounded-lg border border-gray-300 py-2 px-4 outline-none placeholder:text-gray-600"
                                    />
                              </div>

                              {/* Password */}
                              <div className="relative">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                          Password
                                    </label>
                                    <input
                                          id="password"
                                          name="password"
                                          type={showPassword ? "text" : "password"}
                                          required
                                          className="mt-2 block w-full rounded-lg border border-gray-300 py-2 px-4 outline-none placeholder:text-gray-600"
                                    />
                                    <button
                                          type="button"
                                          onClick={() => setShowPassword(!showPassword)}
                                          className="absolute top-[38px] right-4 text-gray-600 focus:outline-none"
                                    >
                                          {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                    </button>
                              </div>

                              <button type="submit" className="w-full mt-4 bg-[#23b792] text-white py-2 px-4 rounded-lg font-medium">Register</button>
                        </form>

                        <p className="mt-6 text-center text-sm text-gray-500 tracking-wide">
                              Already have an account ?
                              <Link to="/login" className="text-[#23b792]">
                                    Login now
                              </Link>
                        </p>
                  </Container>
            </div>
      );
};

export default Register;



















