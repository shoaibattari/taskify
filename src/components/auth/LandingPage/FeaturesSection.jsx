// src/components/landing/FeaturesSection.jsx
import React from "react";
import { Wrapper } from "../../common";
import { FiEdit3, FiTrash2, FiUpload } from "react-icons/fi";

const features = [
  {
    icon: <FiEdit3 className="text-primary text-3xl" />,
    title: "Create & Edit Tasks",
    desc: "Easily add and modify your tasks to stay on track.",
  },
  {
    icon: <FiTrash2 className="text-primary text-3xl" />,
    title: "Delete with Ease",
    desc: "Remove tasks that are no longer needed.",
  },
  {
    icon: <FiUpload className="text-primary text-3xl" />,
    title: "Upload Images",
    desc: "Attach images to your tasks for better context.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <Wrapper>
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default FeaturesSection;
