import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [touched, setTouched] = useState(false);
  const navigate = useNavigate();

  const passwordsMatch = password && confirm && password === confirm;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);

    if (!passwordsMatch) return; // show red borders if mismatch

    // Navigate to next screen (verify or dashboard)
    navigate("/verify"); // change to your next route
  };

  const getBorderClass = (fieldValue) => {
    if (!touched) return "border-gray-300";
    if (fieldValue && passwordsMatch) return "border-green-500";
    if (!fieldValue || !passwordsMatch) return "border-red-500";
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

          <div className="flex flex-col justify-center items-center gap-4 p-2 py-6 w-full">
            <h2 className="font-medium text-[24px] py-3 text-center">
              Reset My Password
            </h2>
            <p className="font-regular text-md text-center text-gray-400 py-2">
              Set a new password so you can login and access all features.
            </p>

            <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* Password */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setTouched(true)}
                  className={`w-full p-4 border rounded-[10px] outline-none transition ${getBorderClass(password)}`}
                />
                {passwordsMatch && password && (
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                )}
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Confirm Password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  onBlur={() => setTouched(true)}
                  className={`w-full p-4 border rounded-[10px] outline-none transition ${getBorderClass(confirm)}`}
                />
                {passwordsMatch && confirm && (
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                )}
              </div>

              {/* Error message */}
              {!passwordsMatch && touched && (
                <p className="text-red-500 text-sm">Password Does Not Match!</p>
              )}

              <button
                type="submit"
                className="bg-gradient-to-r w-full from-[#D1A2D8] to-[#8297F2] text-white p-4 rounded-[10px] mt-2 hover:opacity-90 transition"
              >
                Reset Password
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
