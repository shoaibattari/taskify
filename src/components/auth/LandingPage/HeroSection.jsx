// src/components/landing/HeroSection.jsx
import { useNavigate } from "react-router-dom";
import { CommonButton, Wrapper } from "../../common";
import { FaTasks } from "react-icons/fa";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
      <Wrapper className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Organize Your Tasks <br /> with{" "}
            <span className="text-secondary">Ease</span>
          </h1>
          <p className="text-lg mb-6">
            Taskify helps you stay on top of your to-dos with a simple and
            intuitive interface.
          </p>
          <CommonButton onClick={() => navigate("/login")} variant="secondary">
            Get Started
          </CommonButton>
        </div>
        <div className="flex justify-center">
          <FaTasks className="text-[200px] opacity-80" />
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
