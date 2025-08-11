// src/components/landing/Navbar.jsx
import React from "react";
import { CommonButton, Wrapper } from "../../common";
import { FiCheckSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <Wrapper className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2 text-primary font-bold text-xl">
          <FiCheckSquare className="text-2xl" />
          Taskify
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:text-primary">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-primary">
            How it Works
          </a>
          <a href="#testimonials" className="hover:text-primary">
            Testimonials
          </a>
        </div>
        <CommonButton onClick={() => navigate("/login")}>
          Get Started
        </CommonButton>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
