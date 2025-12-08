import React from 'react'

export default function Verify() {
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

                    <div className="flex flex-col justify-center items-center  p-2 py-6 w-full">
                        <h2 className="font-medium text-[24px] py-3 text-center">
                            Reset My Password
                        </h2>
                        <p className="font-regular text-md text-center text-gray-400 py-2">
                            Verification Code has been sent to you Email Address <br /> To Verify your email address please go to your email <br /> and enter a 6 digits code into next screen.
                        </p>
                        <button
                            type="submit"
                            className="border border-[#752BA8] border-gradient-to-r w-full from-[#D1A2D8] to-[#8297F2] font-medium text-[#111111B2] p-4 rounded-[10px] mt-2 hover:opacity-90 transition"
                        >
                            Go to your Email
                        </button>
                        <button
                            type="submit"
                            className="bg-gradient-to-r w-full from-[#D1A2D8] to-[#8297F2] text-white p-4 rounded-[10px] mt-2 hover:opacity-90 transition"
                        >
                            Verify
                        </button>
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
    )
}
