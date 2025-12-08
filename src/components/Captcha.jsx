import React, { useState } from "react";

export default function Captcha({ onVerify }) {
  const [verified, setVerified] = useState(false);

  const handleVerify = () => {
    setVerified(true);
    onVerify(); // move to next step
  };

  return (
    <>
      {/* RIGHT SIDE - Login Form */}
      <div className="w-full md:w-2/5 h-full flex items-start  bg-white  border-gray-300">
        <div className="w-full max-w-2xl pt-[50px] m-0 p-10">
          {/* Logo */}
          <img src="/gracy-logo.png" alt="logo" className="w-[258px] h-[86px] mx-auto mb-6" />

          

          <div className="  items-start  bg-white  border-gray-300">
            
            <img
              src="/image-17.png"  // your single image here
              alt="Captcha"
              className="w-full h-full object-cover cursor-pointer border rounded"
              onClick={handleVerify}
            />
           
          </div>
           {/* Footer Links */}
          <div className="flex h-auto justify-start items-end gap-4 mt-6 text-gray-900 text-sm">
            <a href="#" className="hover:underline">Help Desk</a>
            <a href="#" className="hover:underline">Refer a friend</a>
          </div>
        </div>
      </div>
    </>
  );
}
