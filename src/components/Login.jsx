import React, { useState } from "react";
import PasswordInput from "./PasswordInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faCheck, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function Login({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // Store errors
  const [ticked, setTicked] = useState({}); // track valid fields


  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();

    let tempErrors = {};
    let tempTicked = {};

    // Email validation
    if (!email.includes("@")) {
      tempErrors.email = "Your Email is Incorrect! Try Again.";
      tempTicked.email = false;
    } else {
      tempTicked.email = true;
    }

    
    // Password validation
    if (password.length < 6) {
      tempErrors.password = "Your Password is Incorrect! Try Again.";
      tempTicked.password = false;
    } else {
      tempTicked.password = true;
    }

    setErrors(tempErrors);
    setTicked(tempTicked);

    if (Object.keys(tempErrors).length === 0) {
      if (onSuccess) onSuccess();
      // API call or redirect

      navigate("/");   // 🔥 Dashboard page open ho jayega
    }
  };

  return (
    <div
      className="w-full h-screen flex"
      style={{ backgroundImage: "url('/bg-image.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* LEFT SIDE - Fixed Background */}


      {/* RIGHT SIDE - Login Form */}
      <div className="w-full md:w-2/5 h-full flex items-start  bg-white border-r border-gray-300 justify-center">
        <div className="w-full max-w-2xl pt-[50px] m-0 p-10">
          {/* Logo */}
          <img src="/gracy-logo.png" alt="logo" className="w-[258px] h-[86px] mx-auto mb-6" />

          {/* Welcome Text */}
          <h1 className="text-2xl font-semibold text-center text-[2rem] mt-[120px] mb-10">
            Welcome Back 👋
          </h1>

          {/* Form */}
          <form onSubmit={handleLogin} className="flex flex-col gap-5 mb-4">
            {/* Email Field */}
            <div className="relative">
              <input
                type="text"
                placeholder="name@work-email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-4 border rounded-[10px] outline-none focus:ring-2 focus:ring-purple-500 ${errors.email ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {/* Tick Icon */}
              {ticked.email && !errors.email && (
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
              )}
              {errors.email && (
                <span className=" right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-sm">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Password Field */}
            {/* Password Field */}
            <div className="relative">
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
                ticked={ticked.password}
              />
            </div>

            <div className="text-right">
              <Link to="/forgot" className="text-purple-600 hover:underline ml-1">
              Forgot Password?
            </Link>
            </div>

            <button className="bg-gradient-to-r from-[#D1A2D8] to-[#8297F2] text-white p-4 rounded-[10px] mt-2 hover:opacity-90 transition">
              Log in
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-5">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login */}
          <button className="flex w-full items-center justify-center gap-2 border border-gray-300 p-3 rounded-[10px] mb-2 hover:bg-gray-100">
            <img src="/Google.png" className="w-[28px] h-[28px]" /> Sign in with Google
          </button>
          <button className="flex w-full mt-4 items-center justify-center gap-2 border border-gray-300 p-3 rounded-[10px] hover:bg-gray-100">
            <img src="/Facebook.png" className="w-[28px] h-[28px]" /> Sign in with Facebook
          </button>

          {/* Signup */}
          <p className="text-center text-gray-700 mt-4">
            Don't you have an account? <Link to="/signup" className="text-purple-600 hover:underline ml-1">
              Sign up
            </Link>
          </p>

          {/* Footer Links */}
          <div className="flex h-auto justify-start items-end gap-4 mt-6 text-gray-900 text-sm">
            <a href="#" className="hover:underline">Help Desk</a>
            <a href="#" className="hover:underline">Refer a friend</a>
          </div>
          <Link to="/dashboard" >Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
