// src/components/landing/Testimonials.jsx
import React from "react";
import { Wrapper } from "../../common";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ali Khan",
    feedback: "Taskify changed the way I manage my work. Super easy to use!",
  },
  {
    name: "Sara Ahmed",
    feedback: "I love the clean design and how fast it works.",
  },
  {
    name: "Omar Iqbal",
    feedback: "Best task management app I’ve tried so far.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <Wrapper>
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-6">
              <FaQuoteLeft className="text-secondary text-2xl mb-4" />
              <p className="text-gray-700 mb-4">"{t.feedback}"</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Testimonials;
