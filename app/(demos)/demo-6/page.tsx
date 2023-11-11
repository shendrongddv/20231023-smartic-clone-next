import D6_Section_Categories from "./_components/d6-categories";
import D6_Section_Hero from "./_components/d6-hero";
import D6_Section_Intro from "./_components/d6-intro";
import D6_Section_Reviews from "./_components/d6-reviews";
import D6_Section_SellingPoints from "./_components/d6-selling-points";
import D6_Section_ShopNow from "./_components/d6-shop-now";
import D6_Section_Subscribe from "./_components/d6-subscribe";
import D6_Section_Gallery from "./_components/d6-gallery";

const Demo_0_Page = () => {
  return (
    <>
      {/* Hero */}
      <D6_Section_Hero />

      {/* Intro */}
      <D6_Section_Intro />

      {/* Categories */}
      <D6_Section_Categories />

      {/* Gallery */}
      <D6_Section_Gallery />

      {/* SellingPoints */}
      <D6_Section_SellingPoints />

      {/* Reviews */}
      <D6_Section_Reviews />

      {/* DhopNow */}
      <D6_Section_ShopNow />

      {/* Subscribe */}
      <D6_Section_Subscribe />
    </>
  );
};

export default Demo_0_Page;
