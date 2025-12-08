// SignUpForm.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// Validation helpers
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone) => /^\d{10,15}$/.test(phone); // 10-15 digits
const isValidPassword = (password) => password.length >= 6;

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [emailTouched, setEmailTouched] = useState(false);

    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [phoneTouched, setPhoneTouched] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmError, setConfirmError] = useState("");
    const [confirmTouched, setConfirmTouched] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [submitted, setSubmitted] = useState(false); // track if form submitted

    // Simulate email taken check
    const isEmailTaken = (email) => email === "test@taken.com";

    const validateFields = () => {
        let valid = true;

        // Email
        if (email.trim() === "") {
            setEmailError("Email is required.");
            valid = false;
        } else if (!isValidEmail(email)) {
            setEmailError("Enter a valid email address.");
            valid = false;
        } else if (isEmailTaken(email)) {
            setEmailError("Email already taken.");
            valid = false;
        } else {
            setEmailError("");
        }

        // Phone
        if (phone.trim() === "") {
            setPhoneError("Phone is required.");
            valid = false;
        } else if (!isValidPhone(phone)) {
            setPhoneError("Enter a valid phone number.");
            valid = false;
        } else {
            setPhoneError("");
        }

        // Password
        if (password.trim() === "") {
            setPasswordError("Password is required.");
            valid = false;
        } else if (!isValidPassword(password)) {
            setPasswordError("Password must be at least 6 characters.");
            valid = false;
        } else {
            setPasswordError("");
        }

        // Confirm Password
        if (confirmPassword.trim() === "") {
            setConfirmError("Confirm your password.");
            valid = false;
        } else if (confirmPassword !== password) {
            setConfirmError("Passwords don't match. Try again.");
            valid = false;
        } else {
            setConfirmError("");
        }

        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailTouched(true);
        setPhoneTouched(true);
        setPasswordTouched(true);
        setConfirmTouched(true);

        const isValid = validateFields();
        setSubmitted(true);

        if (isValid) {
            console.log("Form submitted successfully:", { email, phone, password });
        }
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
                <div className="w-full max-w-2xl gap-4 flex flex-col pt-[50px] m-0 p-10">
                    {/* Logo */}
                    <img
                        src="/gracy-logo.png"
                        alt="logo"
                        className="w-[258px] h-[86px] mx-auto mb-6"
                    />
                    <h1 className="text-2xl font-semibold text-center text-[2rem] mt-[15px]">
                        Create an account ✒
                    </h1>
                    <p className="font-regular text-md text-gray-400 text-center">
                        A fresh journey starts today. Shape your own route.
                        <br />
                        Sign up to optimize your fleet and operations.
                    </p>

                    <form className="flex flex-col gap-6 mt-4" onSubmit={handleSubmit}>
                        {/* Email */}
                        <div className="relative flex flex-col">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (emailTouched) validateFields();
                                }}
                                onBlur={() => {
                                    setEmailTouched(true);
                                    validateFields();
                                }}
                                placeholder="name@work-email.com"
                                className={`w-full p-4 border rounded-lg outline-none transition ${emailError ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {!emailError && isValidEmail(email) && email.trim() !== "" && submitted && (
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </span>
                            )}
                            {emailError && (
                                <div className="text-red-500 text-sm mt-1">{emailError}</div>
                            )}
                        </div>

                        {/* Phone */}
                        <div className="relative flex flex-col">
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                    if (phoneTouched) validateFields();
                                }}
                                onBlur={() => {
                                    setPhoneTouched(true);
                                    validateFields();
                                }}
                                placeholder="Phone number"
                                className={`w-full p-4 border rounded-lg outline-none transition ${phoneError ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {!phoneError && isValidPhone(phone) && phone.trim() !== "" && submitted && (
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </span>
                            )}
                            {phoneError && (
                                <div className="text-red-500 text-sm mt-1">{phoneError}</div>
                            )}
                        </div>

                        {/* Password */}
                        <div className="relative flex flex-col">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (passwordTouched) validateFields();
                                    if (confirmTouched) validateFields();
                                }}
                                onBlur={() => {
                                    setPasswordTouched(true);
                                    validateFields();
                                }}
                                placeholder="Password"
                                className={`w-full p-4 border rounded-lg outline-none transition ${passwordError ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {!passwordError &&
                                isValidPassword(password) &&
                                password.trim() !== "" &&
                                submitted ? null : (
                                <span
                                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </span>
                            )}
                            {!passwordError &&
                                isValidPassword(password) &&
                                password.trim() !== "" &&
                                submitted && (
                                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                    </span>
                                )}
                            {passwordError && (
                                <div className="text-red-500 text-sm mt-1">{passwordError}</div>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div className="relative flex flex-col">
                            <input
                                type={showConfirm ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    if (confirmTouched) validateFields();
                                }}
                                onBlur={() => {
                                    setConfirmTouched(true);
                                    validateFields();
                                }}
                                placeholder="Confirm Password"
                                className={`w-full p-4 border rounded-lg outline-none transition ${confirmError ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {!confirmError &&
                                confirmPassword === password &&
                                confirmPassword.trim() !== "" &&
                                submitted ? null : (
                                <span
                                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                    onClick={() => setShowConfirm((prev) => !prev)}
                                >
                                    <FontAwesomeIcon icon={showConfirm ? faEyeSlash : faEye} />
                                </span>
                            )}
                            {!confirmError &&
                                confirmPassword === password &&
                                confirmPassword.trim() !== "" &&
                                submitted && (
                                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                    </span>
                                )}
                            {confirmError && (
                                <div className="text-red-500 text-sm mt-1">{confirmError}</div>
                            )}
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#D1A2D8] to-[#8297F2] text-white p-4 rounded-[10px] mt-2 hover:opacity-90 transition"
                        >
                            Sign Up
                        </button>
                    </form>
                    {/* Divider */}
                    <div className="flex items-center my-2">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2 text-gray-400">or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Social Login */}
                    <button className="flex w-full items-center justify-center gap-2 border border-gray-300 p-3 rounded-[10px]  hover:bg-gray-100">
                        <img src="/Google.png" className="w-[28px] h-[28px]" /> Sign in with Google
                    </button>
                    <button className="flex w-full  items-center justify-center gap-2 border border-gray-300 p-3 rounded-[10px] hover:bg-gray-100">
                        <img src="/Facebook.png" className="w-[28px] h-[28px]" /> Sign in with Facebook
                    </button>
                    {/* Signup */}
                    <p className="text-center text-gray-700 mt-2">
                        Don't you have an account? <Link to="/" className="text-purple-600 hover:underline ml-1">
                            Sign in
                        </Link>
                    </p>

                    {/* Footer Links */}
                    <div className="flex h-auto justify-start items-end gap-4 mt-6 text-gray-900 text-sm">
                        <a href="#" className="hover:underline">Help Desk</a>
                        <a href="#" className="hover:underline">Refer a friend</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
