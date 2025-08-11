import {
  FeaturesSection,
  Footer,
  HeroSection,
  HowItWorks,
  Navbar,
  Taskify,
  Testimonials,
} from "../../components";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Taskify />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
