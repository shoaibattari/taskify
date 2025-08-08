// src/components/landing/Footer.jsx

import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { Wrapper } from "../../common";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <Wrapper className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Taskify. All rights reserved.</p>
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-secondary">
            <FiFacebook />
          </a>
          <a href="#" className="hover:text-secondary">
            <FiTwitter />
          </a>
          <a href="#" className="hover:text-secondary">
            <FiLinkedin />
          </a>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
