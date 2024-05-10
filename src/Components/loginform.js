import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import loginImage from "../assets/logo_kopi.png";


export default function LoginForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

 

  return (
    <div className="bg-main min-h-screen flex items-center justify-center">
      <div className="bg-main rounded-lg shadow-2xl p-8 w-full md:w-96">
        <img src={loginImage} alt="Login" className="mb-6 mx-auto max-w-20" />
        <h2 className="text-center mb-8 text-md text-gray-600">
          Masuk Ke akun utama anda 
        </h2>

        
          {/* Username Input */}
          <div className="relative mb-4">
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <FaUser className="text-gray-600" />
            </div>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              required
              placeholder="Username"
              className="w-full py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:border-gray-400"
            />
          </div>

          {/* Password Input */}
          <div className="relative  mb-6">
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <FaLock className="text-gray-600" />
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:border-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white font-bold bg-gray-700 rounded-full hover:bg-gray-800 focus:outline-none focus:shadow-outline-gray"
          >
            Login
          </button>
        
      </div>
    </div>
  );
}
