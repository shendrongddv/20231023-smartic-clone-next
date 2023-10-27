import D3_Section_Details from "./_components/d3-details";
import D3_Section_Features from "./_components/d3-features";
import D3_Section_Guarantees from "./_components/d3-guarantees";
import D3_Section_Hero from "./_components/d3-hero";
import D3_Section_Intro from "./_components/d3-intro";
import D3_Section_JoinUs from "./_components/d3-join-us";
import D3_Section_Order from "./_components/d3-order";
import D3_Section_Reviews from "./_components/d3-reviews";

const Demo_3_Page = () => {
  return (
    <>
      {/* Hero */}
      <D3_Section_Hero />

      {/* Intro */}
      <D3_Section_Intro />

      {/* Features */}
      <D3_Section_Features />

      {/* Details */}
      <D3_Section_Details />

      {/* Guarantees */}
      <D3_Section_Guarantees />

      {/* Reviews */}
      <D3_Section_Reviews />

      {/* Order */}
      <D3_Section_Order />

      {/* Join Us */}
      <D3_Section_JoinUs />
    </>
  );
};

export default Demo_3_Page;
