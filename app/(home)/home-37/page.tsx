import SectionBenefits from "./_components/benefits";
import SectionFeatures from "./_components/features";
import SectionHero from "./_components/hero";
import SectionIntroVideo from "./_components/intro-video";
import SectionSpecification from "./_components/specification";

const Home6 = () => {
  return (
    <>
      {/* Hero */}
      <SectionHero />

      {/* Intro: Video */}
      <SectionIntroVideo />

      {/* Specification */}
      <SectionSpecification />

      {/* Features */}
      <SectionFeatures />

      {/* Benefits */}
      <SectionBenefits />
    </>
  );
};

export default Home6;
