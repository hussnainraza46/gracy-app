import React, { useState, useRef, useEffect } from "react";

import SupportPopup from "./SupportPopup";
import FeedbackSubmitPopup from "./FeedbackSubmitPopup";
import ContactSupportPopup from "./ContactSupportPopup";


export default function FeedbackButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    const [showSupportForm, setShowSupportForm] = useState(false);  // NEW
    const [showContactSupportPopup, setShowContactSupportPopup] = useState(false);

    const [includeScreenshot, setIncludeScreenshot] = useState(false);
    const [showFeedbackSubmitPopup, setShowFeedbackSubmitPopup] = useState(false);


    const modalRef = useRef(null);

    // Close modal if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target)
            ) {
                setIsOpen(false);
                setShowFeedbackForm(false);
                setIncludeScreenshot(false);
            }
        };
        if (isOpen || showFeedbackForm) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, showFeedbackForm]);

    {
        showSupportForm && (
            <SupportPopup onClose={() => setShowSupportForm(false)} />
        )
    }

    return (


        <>
            {/* Clickable Div */}
            <div
                className="px-2 flex gap-2 items-center py-4 cursor-pointer hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(true)}
            >
                <img src="/icons/feedback-icon.png" alt="Feedback Icon" />
                <h1 className="font-normal text-md">Feedback</h1>
            </div>

            {/* FIRST POPUP (Feedback or Support?) */}
            {isOpen && !showFeedbackForm && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-[#0000002e]"></div>

                    <div
                        ref={modalRef}
                        className="relative bg-white rounded-[24px] shadow-lg w-[40%] z-10 "
                    >
                        <h2 className="text-2xl px-6 py-4 font-semibold ">
                            Feedback or Support?
                        </h2>
                        <hr className="text-gray-300" />
                        <p className="text-gray-500 text-lg px-6 py-4 ">
                            Likes, dislikes, and feature requests should be filled as feedback.
                            If you need any help or encountered an issue, submit a case to our support team.
                        </p>
                        <hr className="text-gray-300" />
                        <div className="flex justify-end gap-3 px-6 py-4 ">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-gray-100 text-gray-900 rounded-lg py-3 cursor-pointer px-6"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() => {
                                    setShowFeedbackForm(true);
                                }}
                                className="bg-gray-100 text-gray-900 rounded-lg py-3 cursor-pointer px-6"
                            >
                                I Have Feedback
                            </button>

                            <button
                                onClick={() => {
                                    setShowSupportForm(true);
                                    setIsOpen(false);
                                    setShowFeedbackForm(false);
                                }}
                                className="text-white rounded-lg py-2 px-6 bg-gradient-to-r from-[#8297F2] to-[#D1A2D8]"
                            >
                                I Need Support
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* SECOND POPUP (Feedback Form) */}
            {showFeedbackForm && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-[#0000002e]"></div>

                    <div
                        ref={modalRef}
                        className="relative bg-white rounded-[20px] shadow-lg w-[35%] z-10 "
                    >
                        <h2 className="text-2xl font-semibold px-6 py-4">Getting Started Help</h2>
                        <hr className="text-gray-300 mb-4" />
                        {/* Feedback Textarea */}
                        <div className="px-6">
                            <label className="font-medium  text-lg py-4 mt-4">Feedback</label>
                            <input
                                className="w-full border border-gray-400 text-gray-700 rounded-lg p-3 mt-2 mb-4"
                                rows="3"
                                value="Drop us a quick note with some feedback"
                            />
                        </div>


                        {/* Checkbox */}
                        <div className="class px-6 gap-2 mb-4">
                            <label className="font-medium text-lg text-gray-700" htmlFor="">Screenshot</label>
                            <div className="flex items-center  gap-2 ">
                                <input
                                    type="checkbox"
                                    checked={includeScreenshot}
                                    onChange={() => setIncludeScreenshot(!includeScreenshot)}
                                    className="w-5 h-5 bg-indigo-400"
                                />
                                <label className="text-gray-700 text-lg">
                                    Include a browser screenshot?
                                </label>
                            </div>
                        </div>


                        {/* Show textarea only when checkbox is checked */}
                        <div className="clas px-6 gap-2 mb-4">
                            <p className="text-gray-500 font-medium text-"></p>
                            {includeScreenshot && (
                                <textarea
                                    className="w-full border border-gray-400  rounded-lg p-3 mb-4"
                                    rows="5"
                                    placeholder="Additional notes about screenshot…"
                                />
                            )}
                        </div>


                        <div className="flex items-center px-6 gap-2 mb-4">
                            <p className="text-gray-600 font-medium text-lg">This feedback directly goes to Graci Product team. For technical
                                support,
                                <a className="text-indigo-400 font-medium text-lg" href="#"> Visit our support page</a>
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <hr className="text-gray-300" />
                        <div className="flex justify-end gap-3 px-6 py-4">
                            <button
                                onClick={() => {
                                    setShowFeedbackForm(false);
                                    setIsOpen(false);
                                    setIncludeScreenshot(false);
                                }}
                                className="bg-gray-100 text-gray-900 rounded-lg py-3 px-6"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() => {
                                    setShowFeedbackSubmitPopup(true);   // NEW POPUP OPEN
                                    setShowFeedbackForm(false);         // Feedback form close
                                    setIsOpen(false);                   // First popup close
                                    setShowSupportForm(false);          // Support popup close (safety)
                                }}
                                className="text-white rounded-lg py-3 px-6 bg-gradient-to-r from-[#8297F2] to-[#D1A2D8]"
                            >
                                Send Feedback
                            </button>

                        </div>
                    </div>
                </div>
            )}

            {showSupportForm && (
    <SupportPopup
        onClose={() => setShowSupportForm(false)}
        onContactSupport={() => {
            setShowSupportForm(false);      // close current popup
            setShowContactSupportPopup(true); // open new popup
        }}
    />
)}

            {showContactSupportPopup && (
                <ContactSupportPopup
                    onClose={() => setShowContactSupportPopup(false)}
                    onBack={() => {
                        setShowContactSupportPopup(false);
                        setShowSupportForm(true); // re-open previous SupportPopup
                    }}
                />
            )}


            {showFeedbackSubmitPopup && (
                <FeedbackSubmitPopup onClose={() => setShowFeedbackSubmitPopup(false)} />
            )}

        </>
    );
}
