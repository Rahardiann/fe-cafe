import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import loginImage from "../assets/logo_kopi.png";
import axios from "axios";

export default function LoginForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let data = {
      username: user.username,
      password: user.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/user/login",
        data
      );

      if (response.data.data.length === 0) {
      } else {
        sessionStorage.setItem("nama_user", response.data.data.nama_user);
        sessionStorage.setItem("token", response.data.data.token);
        sessionStorage.setItem("logged", response.data.data.logged);
        sessionStorage.setItem("role", response.data.data.role);
        sessionStorage.setItem("id_user", response.data.data.id_user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-main min-h-screen flex items-center justify-center">
      <div className="bg-main rounded-lg shadow-2xl p-8 w-full md:w-96">
        <img src={loginImage} alt="Login" className="mb-6 mx-auto max-w-20" />
        <h2 className="text-center mb-8 text-xl font-semibold">
          Sign In to Your Account
        </h2>

        <form onSubmit={handleLogin}>
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
        </form>
      </div>
    </div>
  );
}
