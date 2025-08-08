import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPageScreen, LoginScreen, SignupScreen } from "../../views";

const AuthLayout = () => {
  return (
    <div>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<LandingPageScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthLayout;
