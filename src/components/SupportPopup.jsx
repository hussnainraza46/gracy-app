import React, { useRef, useEffect } from "react";

export default function SupportPopup({ onClose, onContactSupport  }) {
    const modalRef = useRef(null);

    // close if click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-[#0000002e]"></div>

            <div
                ref={modalRef}
                className="relative bg-white rounded-[20px] shadow-lg w-[50%] z-10 "
            >
                <div className="flex">
                    <div className="div w-[70%] ">
                        <h2 className="text-2xl px-4 py-[15px] font-semibold ">Getting Started Help</h2>
                        <hr className="text-gray-300" />
                        <h2 className="text-xl px-4 py-[15px] font-semibold ">Welcome to Graci</h2>
                        <div className="div px-4 ">
                            <p className="text-gray-600 text-md ">Welcome to Graci! we;re exited to help you get started and hit the ground running.
                                As a Graci customer, you have access to a
                                number of recourses that can help you make the most of your investment:</p>
                            <ul className="list-disc px-4 flex flex-col gap-3 py-[5px]">
                                <a className="flex gap-2" href="#"><li className="list-disc text-[#8297F2]">Graci Academy:</li> online video courses and tutorials across Graci products </a>

                                <a className="flex gap-2" href="#"><li className="list-disc text-[#8297F2]">Live New User Training:</li>Interactive learning experience
                                </a>
                                <a className="flex gap-2" href="#"><li className="list-disc text-[#8297F2]">Quick Tip Video Library:</li>Helpful Visual guides for common workflows</a>
                                <a className="flex gap-2" href="#"><li className="list-disc text-[#8297F2]">Live Product Training:</li>Expert-led sessions with Q&A</a>
                                <a className="flex gap-2" href="#"><li className="list-disc text-[#8297F2]">Customer Tips:</li>Learn best practices from peers</a>
                                <a className="flex gap-2" href="#"><li className="list-disc text-[#8297F2]">Technical Support:</li>24/7 in-house support teamVideo Resources</a>
                            </ul>
                            <h1 className="text-md text-black font-medium ">Video Resources</h1>
                            <h2 className="text-md text-gray-600 mb-2">Welcome to Graci</h2>
                        </div>
                        <hr className="text-gray-300 "/>
                    </div>
                    
                    <div className="w-[30%] border-l border-b border-gray-100 justify-center  px-2  flex flex-col gap-2 border-gray-300">
                        <h2 className="text-lg font-medium">Suggested Articles</h2>
                        <h3 className="text-lg underline font-medium text-[#D1A2D8]">Welcome to Graci!</h3>
                        <a className="underline" href="">Step 1: Set up your organization on the Graci Cloud</a>
                        <a className="underline" href="">Step 2: Configure your Graci Dashboard for the First Time</a>
                        <a className="underline" href="">Step 3: Download Graci</a>
                        <a className="underline" href="">Step 4: Activate Graci Hardware and Accessories</a>
                    </div>
                </div>

                <div className="flex justify-end py-4 px-6 gap-3">
                    <button
                        onClick={onContactSupport}
                        className="bg-gray-100 text-gray-900 rounded-lg py-3 px-6"
                    >
                       Contact Support
                    </button>

                    <button className="text-white rounded-lg py-3 px-6 bg-gradient-to-r from-[#8297F2] to-[#D1A2D8]">
                        ViSit Help Center
                    </button>
                </div>
            </div>
        </div>
    );
}
