import H2_Section_Guarantees from "./_components/h2-guarantees";
import H2_Section_Hero from "./_components/h2-hero";
import H2_Section_Products from "./_components/h2-products";
import H2_Section_Reviews from "./_components/h2-reviews";
import D2_Section_WhatWeDo from "./_components/d2-what-we-do";
import { D2_Section_SellingPoints } from "./_components/d2-selling-points";
import D2_CTA_Charlie from "./_components/d2-cta-charlie";
import D2_Section_Features from "./_components/d2-features";
import D2_Section_Download from "./_components/d2-download";

const Demo_2_Page = () => {
  return (
    <>
      {/* Hero */}
      <H2_Section_Hero />

      {/* What We Do */}
      <D2_Section_WhatWeDo />

      {/* Features */}
      <D2_Section_Features />

      {/* SellingPoints */}
      <D2_Section_SellingPoints />

      {/* Download */}
      <D2_Section_Download />

      {/* Reviews */}
      <H2_Section_Reviews />

      {/* Guarantees */}
      <H2_Section_Guarantees />

      {/* Products */}
      <H2_Section_Products />

      {/* CTA Charlie */}
      <D2_CTA_Charlie />
    </>
  );
};

export default Demo_2_Page;
