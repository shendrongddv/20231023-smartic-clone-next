import H2_CTA_Beta from "./_components/h2-cta-beta";
import H2_Section_Features from "./_components/h2-features";
import H2_Section_Guarantees from "./_components/h2-guarantees";
import H2_Section_Hero from "./_components/h2-hero";
import H2_Section_Products from "./_components/h2-products";
import H2_Section_Reviews from "./_components/h2-reviews";
import D2_Section_WhatWeDo from "./_components/d2-what-we-do";
import D2_Section_SellingPoints from "./_components/d2-selling-points";
import D2_CTA_Alpha from "./_components/d2-cta-alpha";

const Demo_2_Page = () => {
  return (
    <>
      {/* Hero */}
      <H2_Section_Hero />

      {/* What We Do */}
      <D2_Section_WhatWeDo />

      {/* Features */}
      <H2_Section_Features />

      {/* SellingPoints */}
      <D2_Section_SellingPoints />

      {/* Group */}
      <div className="flex flex-col px-4">
        {/* Gallery */}

        {/* CTA Alpha */}
        <D2_CTA_Alpha />
      </div>

      {/* Reviews */}
      <H2_Section_Reviews />

      {/* Guarantees */}
      <H2_Section_Guarantees />

      {/* Products */}
      <H2_Section_Products />

      {/* CTA Beta */}
      <H2_CTA_Beta />
    </>
  );
};

export default Demo_2_Page;