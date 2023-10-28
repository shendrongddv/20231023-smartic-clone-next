import { Button } from "@/components/ui/button";
import D50_Section_Hero from "./_components/d50-hero";
import D50_Section_Problem from "./_components/d50-problem";
import D50_Section_Reason from "./_components/d50-reason";
import D50_Section_EcoProduct from "./_components/d50-eco-product";
import D50_Section_Features from "./_components/d50-features";
import D50_Section_HowToUse from "./_components/d50-how-to-use";
import D50_Section_ShopNow from "./_components/d50-shop-now";
import D50_Section_Gallery from "./_components/d50-gallery";
import D50_Section_Blog from "./_components/d50-blog";

const Demo_50_Page = () => {
  return (
    <>
      {/* Hero */}
      <D50_Section_Hero />

      {/* Problem */}
      <D50_Section_Problem />

      {/* Reason */}
      <D50_Section_Reason />

      {/* EcoProduct */}
      <D50_Section_EcoProduct />

      {/* Features */}
      <D50_Section_Features />

      {/* HowToUse */}
      <D50_Section_HowToUse />

      {/* ### */}

      {/* ShopNow */}
      <D50_Section_ShopNow />

      {/* Gallery */}
      <D50_Section_Gallery />

      {/* Blog */}
      <D50_Section_Blog />
    </>
  );
};

export default Demo_50_Page;
