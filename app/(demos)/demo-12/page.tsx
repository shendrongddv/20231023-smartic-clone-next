import D12_Section_AddesValue from "./_components/d12-added-value";
import D12_Section_Hero from "./_components/d12-hero";
import D12_Section_Ingredients from "./_components/d12-ingredients";
import D12_Section_Introduction from "./_components/d12-introduction";
import D12_Section_Reviews from "./_components/d12-reviews";
import D12_Section_Shop from "./_components/d12-shop";
import D12_Section_WhatWeDo from "./_components/d12-what-we-do";

const Demo_12_Page = () => {
  return (
    <>
      {/* Hero */}
      <D12_Section_Hero />

      {/* Introduction */}
      <D12_Section_Introduction />

      {/* WhatWeDo */}
      <D12_Section_WhatWeDo />

      {/* AddedValue */}
      <D12_Section_AddesValue />

      {/* Ingredients */}
      <D12_Section_Ingredients />

      {/* Reviews */}
      <D12_Section_Reviews />

      {/* Shop */}
      <D12_Section_Shop />

      {/* # */}
    </>
  );
};

export default Demo_12_Page;
