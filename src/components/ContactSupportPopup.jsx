import React, { useRef, useEffect } from "react";

export default function ContactSupportPopup({ onClose, onBack }) {
    const modalRef = useRef(null);

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
            <div ref={modalRef} className="relative bg-white rounded-[20px] shadow-lg w-[37%] z-10">
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
                    <div className="div flex gap-3">
                        <button onClick={onBack} className="text-gray-700 font-bold cursor-pointer text-xl">
                            <img src="/icons/back-btn.png" alt="" />
                        </button>
                        <h2 className="text-2xl font-semibold">Contact Support</h2>
                    </div>

                    <button onClick={onClose} className="text-gray-700 font-bold cursor-pointer text-xl transation">✕</button>
                </div>
                <hr className="text-gray-300" />
                <div className="px-6 py-4">
                    <h3 className="text-[17px] text-[#111111CC] font-semibold mb-2">What can we help you with?</h3>
                    <p className="text-[17px] text-[#111111CC] mb-4">
                        You can use options on the left to search for a help topic or contact support for assistance.
                    </p>
                    <div className="div flex justify-center mt-4">
                        <button className="text-[#8297F2] flex-items-center text-center cursor-pointer rounded-lg py-3 px-12 border border-[#D1A2D8]  mb-4">
                            Open Support Form
                        </button>
                    </div>
                </div>
                <hr className="text-gray-300" />
                <div className="flex py-4 px-4 justify-end gap-3">
                    <button className="flex items-center text-[#D1A2D8] cursor-pointer border border-[#8297F2] gap-2 bg-gray-100 p-3 rounded-lg px-4 ">
                        <img src="/icons/call-outline.png" alt="phone" className="w-5 h-5" />
                        Call us
                    </button>
                    <button className="flex items-center border border-[#8297F2] gap-2 cursor-pointer text-[#D1A2D8] bg-gray-100 p-3 rounded-lg px-4 ">
                        <img src="/icons/mail-icon.png" alt="ticket" className="w-5 h-5" />
                        Submit Support Ticket
                    </button>
                    <button className="flex items-center gap-2 cursor-pointer bg-gradient-to-r from-[#8297F2] to-[#D1A2D8] text-white p-3 px-4 rounded-lg">
                        
                        Visit Help Center
                    </button>
                </div>
            </div>
        </div>
    );
}
