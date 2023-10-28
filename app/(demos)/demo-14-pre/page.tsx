import { Button } from "@/components/ui/button";
import D14_Section_Hero from "./_components/d14-hero";
import D14_Section_AboutUs from "./_components/d14-about-us";
import D14_Section_Collection from "./_components/d14-collection";
import D14_Section_WhyUs from "./_components/d14-why-us";
import D14_Section_WhyUs_Beta from "./_components/d14-why-us-beta";
import D14_Section_Reviews from "./_components/d14-reviews";
import D14_Section_OrderNow from "./_components/d14-order-now";

const Demo_14_Page = () => {
  return (
    <>
      {/* Hero */}
      <D14_Section_Hero />

      {/* AboutUs */}
      <D14_Section_AboutUs />

      {/* Collection */}
      <D14_Section_Collection />

      {/* WhyUs */}
      <D14_Section_WhyUs />

      {/* WhyUsBeta */}
      <D14_Section_WhyUs_Beta />

      {/* Reviews */}
      <D14_Section_Reviews />

      {/* OrderNow */}
      <D14_Section_OrderNow />
    </>
  );
};

export default Demo_14_Page;
