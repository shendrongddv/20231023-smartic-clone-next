import D4_Section_Gallery from "./_components/d4-gallery";
import D4_Section_Guarantee from "./_components/d4-guarantee";
import D4_Section_Hero from "./_components/d4-hero";
import D4_Section_HowItWork from "./_components/d4-how-it-work";
import D4_Section_Ingredient from "./_components/d4-ingredient";
import D4_Section_Intro from "./_components/d4-intro";
import D4_Section_Reviews from "./_components/d4-reviews";
import D4_Section_ShopNow from "./_components/d4-shop-now";

const Demo_4_Page = () => {
  return (
    <>
      {/* Hero */}
      <D4_Section_Hero />

      {/* Intro */}
      <D4_Section_Intro />

      {/* HowItWork */}
      <D4_Section_HowItWork />

      {/* Ingredients */}
      <D4_Section_Ingredient />

      {/* Reviews */}
      <D4_Section_Reviews />

      {/* ShopNow */}
      <D4_Section_ShopNow />

      {/* Guarantee */}
      <D4_Section_Guarantee />

      {/* Gallery */}
      <D4_Section_Gallery />
    </>
  );
};

export default Demo_4_Page;
