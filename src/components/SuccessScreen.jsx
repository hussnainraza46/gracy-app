import React, { useState } from "react";
import PasswordInput from "./PasswordInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [ticked, setTicked] = useState({});
  const [robotChecked, setRobotChecked] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    let tempErrors = {};
    let tempTicked = {};

    // Email validation
    if (!email.includes("@")) {
      tempErrors.email = "Invalid email address.";
      tempTicked.email = false;
    } else {
      tempTicked.email = true;
    }

    // Password validation
    if (password.trim().length < 6) {
      tempErrors.password = "Password must be at least 6 characters.";
      tempTicked.password = false;
    } else {
      tempTicked.password = true;
    }

    setErrors(tempErrors);
    setTicked(tempTicked);
  };

  return (
    <div
      className="w-full h-screen  flex"
      style={{
        backgroundImage: "url('/bg-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-2/5 h-full flex bg-white border-r border-gray-300">
        <div className="w-full max-w-2xl pt-[50px] p-10">

          {/* Logo */}
          <img
            src="/gracy-logo.png"
            alt="logo"
            className="w-[258px] h-[86px] mx-auto mb-6"
          />

          {/* Welcome */}
          <h1 className="text-2xl font-semibold text-center text-[2rem] mt-[120px] mb-10">
            Welcome Back 👋
          </h1>

          {/* Form */}
          <form onSubmit={handleLogin} className="flex flex-col gap-5 mb-4">

            {/* Email */}
            <div className="relative">
              <input
                type="text"
                placeholder="name@work-email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-4 border rounded-[10px] outline-none 
                ${errors.email ? "border-red-500" : "border-gray-300"}`}
              />
              {ticked.email && !errors.email && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
                ticked={ticked.password}
              />
            </div>

            <div className="text-right -mt-2">
              <a href="#" className="text-[#752BA8] text-[15px] hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              disabled={!robotChecked}
              className={`p-4 rounded-[10px] text-white mt-2 transition
              ${robotChecked
                  ? "bg-gradient-to-r from-[#D1A2D8] to-[#8297F2] hover:opacity-90"
                  : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              Log in
            </button>

            {/* I'm not a robot */}
            <div className="flex items-center py-5 px-2 bg-gray-200 rounded-md border border-gray-100 w-full gap-3 mt-3">
              <input
                type="checkbox"
                checked={robotChecked}
                onChange={() => setRobotChecked(!robotChecked)}
                className="w-5 h-5"
              />
              <span className="text-gray-700  text-[16px]">
                i’m not a robot
              </span>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-5">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Login */}
          <button className="flex w-full items-center justify-center gap-2 border border-gray-300 p-3 rounded-[10px] mb-3 hover:bg-gray-100">
            <img src="/Google.png" className="w-[28px] h-[28px]" />
            Sign in with Google
          </button>

          {/* Facebook Login */}
          <button className="flex w-full items-center justify-center gap-2 border border-gray-300 p-3 rounded-[10px] hover:bg-gray-100">
            <img src="/Facebook.png" className="w-[28px] h-[28px]" />
            Sign in with Facebook
          </button>

          {/* Signup */}
          <p className="text-center text-gray-700 mt-4">
            Don't you have an account?
            <a href="#" className="text-[#752BA8] hover:underline"> Sign up</a>
          </p>

          <div className="flex h-auto justify-start items-end gap-4 mt-6 text-gray-900 text-sm">
            <a href="#" className="hover:underline">Help Desk</a>
            <a href="#" className="hover:underline">Refer a friend</a>
          </div>
        </div>
      </div>
    </div>
  );
}
