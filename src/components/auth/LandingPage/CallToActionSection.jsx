import React from "react";

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-primary text-center text-white px-6">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Boost Your Productivity?
      </h2>
      <p className="mb-6">
        Sign up today and start managing your tasks with ease.
      </p>
      <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold shadow-custom hover:bg-light-grey transition">
        Get Started
      </button>
    </section>
  );
};

export default CallToActionSection;
