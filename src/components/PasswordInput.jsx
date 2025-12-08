import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function PasswordInput({ value, onChange, error, ticked }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder="Password"
        className={`w-full p-4 border rounded-[10px] outline-none pr-10 focus:ring-2 focus:ring-purple-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {/* Circle Check Icon */}
      {ticked && !error ? (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
      ) : (
        // Eye Icon only if circleCheck is not displayed
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
          onClick={() => setShowPassword(!showPassword)}
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} size="lg" />
        </div>
      )}

      {/* Error Message */}
      {error && (
        <span className=" right-0 top-1/2 transform translate-x-full -translate-y-1/2 text-red-500 text-sm ml-2">
          {error}
        </span>
      )}
    </div>
  );
}
