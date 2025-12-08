import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // React Router navigation

export default function ForgotPassword() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [touched, setTouched] = useState(false); // triggers red border on incomplete input
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const val = e.target.value;
    if (/^\d?$/.test(val)) { // only allow single digit
      const newCode = [...code];
      newCode[index] = val;
      setCode(newCode);

      // focus next input
      if (val && index < 5) {
        const nextInput = document.getElementById(`digit-${index + 1}`);
        if (nextInput) nextInput.focus();
      }

      // backspace to previous input
      if (!val && index > 0) {
        const prevInput = document.getElementById(`digit-${index - 1}`);
        if (prevInput) prevInput.focus();
      }
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();
    setTouched(true);

    const codeString = code.join("");
    if (codeString.length < 6 || codeString.includes("")) {
      return; // show red borders for incomplete inputs
    }

    // All digits valid → navigate to Reset Password page
    navigate("/reset-password"); // replace with your actual route
  };

  // determine border color for each input
  const getBorderColor = (digit) => {
    if (touched && digit === "") return "border-red-500";
    if (/^\d$/.test(digit)) return "border-green-500";
    return "border-gray-300";
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

          <div className="flex flex-col justify-center items-center rounded-xl bg-[#F6F7FB] p-6 w-full">
            <h2 className="font-medium text-2xl py-3 text-center">
              Enter a 6-digit Code
            </h2>
            <p className="font-regular text-md text-center text-gray-400 py-2">
              Enter the 6-digit code that you received on your email.
            </p>

            <form
              className="flex flex-col items-center justify-center px-4 w-full gap-6"
              onSubmit={handleContinue}
            >
              <div className="flex justify-between w-[80%] gap-2">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    id={`digit-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    className={`w-14 h-16 text-center border rounded-md text-[24px] font-medium bg-white outline-none transition ${getBorderColor(
                      digit
                    )}`}
                  />
                ))}
              </div>

              {/* Resend link */}
              <p className="text-center text-gray-700 mt-2">
                Code not received?
                <a
                  href="#"
                  className="text-[#752BA8] uppercase font-medium hover:underline ml-1"
                >
                  RESEND
                </a>
              </p>

              {/* Continue button */}
              <Link to="/resetpassword" 
                type="submit"
                className="bg-gradient-to-r w-full text-center from-[#D1A2D8] to-[#8297F2] text-white p-4 rounded-[10px] mt-2 hover:opacity-90 transition"
              >
                Continue
              </Link>
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
