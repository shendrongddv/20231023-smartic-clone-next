// Section
import SectionHero from "./_components/hero";
import SectionIntro from "./_components/intro";
import SectionIntro2 from "./_components/intro-2";
import SectionIntro3 from "./_components/intro-3";
import SectionBenefits from "./_components/benefits";
import SectionChangeYourLife from "./_components/change-your-life";
import SectionTestimonials from "./_components/testimonials";
import SectionProducts from "./_components/products";

// CTA
import CallToAction1 from "./_components/cta-1";

const Demo_7_Page = () => {
  return (
    <>
      {/* Hero */}
      <SectionHero />

      {/* Intro 1: #1 Selling weight loss supplement brand */}
      <SectionIntro />

      {/* Intro 2: Burn fat fast and stay healthy */}
      <SectionIntro2 />

      {/* Intro 3: Get nutrition support */}
      <SectionIntro3 />

      {/* Benefit */}
      <SectionBenefits />

      {/* Change Your Life */}
      <SectionChangeYourLife />

      {/* Testimonials */}
      <SectionTestimonials />

      {/* Best sellers */}
      <SectionProducts />

      {/* CTA */}
      <CallToAction1 />
    </>
  );
};

export default Demo_7_Page;
