import React from "react";

export default function FeedbackSubmitPopup({ onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-[#0000002e]" onClick={onClose}></div>

            <div className="relative bg-white  rounded-[20px] shadow-lg w-[40%] z-10 ">
                <h2 className="text-2xl font-semibold  px-4 py-4">Feedback </h2>
                <hr className="text-gray-300" />

                <div className="div flex justify-center">
                    <img src="/images/Feedback.png" alt="" />
                </div>
                <p className="text-gray-600 text-center text-[20px] text-[#111111CC] mb-6">
                    Thanks for feedback!
                </p>
                <hr className="text-gray-300" />
                <div className="flex justify-end py-4 px-4">
                    <button
                        onClick={onClose}
                        className="bg-gradient-to-r from-[#8297F2] to-[#D1A2D8] text-white rounded-lg px-6 py-3"
                    >
                        Close
                    </button>

                    
                </div>
            </div>
        </div>
    );
}
