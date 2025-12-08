import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import Signup from "./pages/SignUp";

import Forgot from "./pages/Forgot";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Verify from "./pages/Verify";
import Dashboard from "./pages/DashboardPages/Dashboard";
import Dispatch from "./pages/DashboardPages/Dispatch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/verify" element={<Verify />} />


        {/* Dashboard Pages Routes */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/dispatch" element={<Dispatch />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
