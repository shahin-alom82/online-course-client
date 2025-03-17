
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import "../pages/login.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
      const [showPassword, setShowPassword] = useState(false);

      const handleLogin = async e => {
            e.preventDefault()
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log('login', email, password)
      }



      return (
            <div className="login-bg-img">
                  <Container className="login-container">
                        <h2 className="text-center text-3xl font-bold text-gray-800 font">Login Now</h2>

                        <form onSubmit={handleLogin} className="mt-6 space-y-5">

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

                              <button type="submit" className="w-full mt-4 bg-[#23b792] text-white py-2 px-4 rounded-lg font-medium">Login</button>
                        </form>

                        <p className="mt-6 text-center text-sm text-gray-500 tracking-wide">
                              Don't have an account ?
                              <Link to="/register" className="text-[#23b792]">
                                    Register now
                              </Link>
                              {/* Already had an account? */}
                        </p>
                  </Container>
            </div>
      );
};

export default Login;
