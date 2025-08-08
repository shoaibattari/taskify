// src/components/landing/Navbar.jsx
import React from "react";
import { Wrapper } from "../../common";
import { FiCheckSquare } from "react-icons/fi";

const Navbar = () => {
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
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition">
          Get Started
        </button>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
