import {
  FeaturesSection,
  Footer,
  HeroSection,
  HowItWorks,
  Navbar,
  Testimonials,
} from "../../components";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
