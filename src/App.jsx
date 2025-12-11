import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import Signup from "./pages/SignUp";

import Forgot from "./pages/Forgot";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Verify from "./pages/Verify";
import Layout from "./components/Layouts";
import Dispatch from "./pages/Dashboard/Dispatch";
import Safety from "./pages/Dashboard/Safety";





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


        {/* Dashboard Layout with Nested Routes */}
        <Route path="/dashboard" element={<Layout />}>
         
          <Route path="dispatch" element={<Dispatch />} /> {/* /dashboard/dispatch */}
          <Route path="safety" element={<Safety />} /> {/* /dashboard/safety */}
          {/* Add more dashboard pages here */}
        </Route>




      </Routes>
    </BrowserRouter>
  );
}

export default App;
