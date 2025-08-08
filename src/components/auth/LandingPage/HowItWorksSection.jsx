// src/components/landing/HowItWorks.jsx
import React from "react";
import { Wrapper } from "../../common";
import { FiUserPlus, FiList, FiCheckCircle } from "react-icons/fi";

const steps = [
  {
    icon: <FiUserPlus className="text-secondary text-3xl" />,
    title: "Sign Up",
    desc: "Create your free account in minutes.",
  },
  {
    icon: <FiList className="text-secondary text-3xl" />,
    title: "Add Tasks",
    desc: "Quickly add your daily tasks and deadlines.",
  },
  {
    icon: <FiCheckCircle className="text-secondary text-3xl" />,
    title: "Stay Organized",
    desc: "Track your progress and complete tasks.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <Wrapper>
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center p-6">
              <div className="mb-4 flex justify-center">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default HowItWorks;
