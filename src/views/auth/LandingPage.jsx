import {
  FeaturesSection,
  Footer,
  HeroSection,
  HowItWorks,
  Navbar,
  Taskify,
  Testimonials,
  CallToAction,
} from "../../components";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Taskify />
      <FeaturesSection />
      <HowItWorks />
      <CallToAction />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
