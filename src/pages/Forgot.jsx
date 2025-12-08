import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // only if using React Router

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // React Router navigation

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(""); // clear error while typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);

    if (!isValidEmail(email)) {
      setError("Email does not match, try again!");
      return;
    }

    setError(""); 
    // Navigate to enter-code page
    navigate("/forgotpassword"); // replace with your actual page route
  };

  const getBorderColor = () => {
    if (!touched) return "border-gray-300";
    return error ? "border-red-500" : "border-green-500";
  };

  return (
    <div
      className="w-full h-screen flex"
      style={{
        backgroundImage: "url('/bg-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-2/5 h-full flex items-start bg-white border-r border-gray-300 justify-center">
        <div className="w-full max-w-2xl h-full flex flex-col justify-between pt-[50px] m-0 p-10">
          {/* Logo */}
          <img
            src="/gracy-logo.png"
            alt="logo"
            className="w-[258px] h-[86px] mx-auto mb-6"
          />

          <div className="flex flex-col justify-center items-center gap-2 p-2 py-6">
            <h2 className="font-medium text-[24px] py-3 text-center">
              Forgot Your Password?
            </h2>
            <p className="font-regular text-md text-center text-gray-400 py-2">
              Enter Your Email for the Verification Process, We will <br /> send
              a 6 digit code to your Email.
            </p>

            <form
              action=""
              className="w-full flex flex-col gap-1"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                onBlur={() => setTouched(true)}
                className={`w-full p-4 border ${getBorderColor()} text-gray-500 mt-2 rounded-[10px] outline-none focus:ring-2 focus:ring-purple-500 transition`}
              />

              {/* Error message */}
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}

              <button
                type="submit"
                className="bg-gradient-to-r w-full from-[#D1A2D8] to-[#8297F2] text-white p-4 rounded-[10px] mt-4 hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="flex h-auto justify-start items-end gap-4 mt-6 font-medium text-gray-900 text-sm">
            <a href="#" className="underline hover:underline">
              Help Desk
            </a>
            <a href="#" className="underline hover:underline">
              Refer a friend
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
