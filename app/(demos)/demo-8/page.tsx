import D8_Section_Features from "./_components/d8-features";
import D8_Section_Hero from "./_components/d8-hero";
import D8_Section_Intro from "./_components/d8-intro";
import D8_Section_LogoClouds from "./_components/d8-logo-clouds";
import D8_Section_Reviews from "./_components/d8-reviews";
import D8_Section_Values from "./_components/d8-values";

const Demo_8_Page = () => {
  return (
    <>
      {/* Hero */}
      <D8_Section_Hero />

      {/* Intro */}
      <D8_Section_Intro />

      {/* Features */}
      <D8_Section_Features />

      {/* Value */}
      <D8_Section_Values />

      {/* Reviews */}
      <D8_Section_Reviews />

      {/* LogoClouds */}
      <D8_Section_LogoClouds />

      {/* CTA */}
    </>
  );
};

export default Demo_8_Page;
