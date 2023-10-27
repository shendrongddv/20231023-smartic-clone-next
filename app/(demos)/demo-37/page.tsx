import D37_Section_Features from "./_components/d37-features";
import D37_Section_Hero from "./_components/d37-hero";
import D37_Section_Order from "./_components/d37-order";
import D37_Section_Quote from "./_components/d37-quote";
import D37_Section_Specs from "./_components/d37-specs";
import D37_Section_Values from "./_components/d37-values";
import D37_Section_Video from "./_components/d37-video";

const Demo_37_Page = () => {
  return (
    <>
      {/* Hero */}
      <D37_Section_Hero />

      {/* Video */}
      <D37_Section_Video />

      {/* Specs */}
      <D37_Section_Specs />

      {/* Features */}
      <D37_Section_Features />

      {/* Values */}
      <D37_Section_Values />

      {/* Quote */}
      <D37_Section_Quote />

      {/* Order */}
      <D37_Section_Order />
    </>
  );
};

export default Demo_37_Page;
