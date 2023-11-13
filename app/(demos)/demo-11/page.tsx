import { Button } from "@/components/ui/button";
import D11_Section_Differentiate from "./_components/d11-differentiate";
import D11_Section_Reviews from "./_components/d11-reviews";
import D11_Section_ShopNow from "./_components/d11-shop-now";
import D11_Section_Point1 from "./_components/d11-point-1";
import D11_Section_Point2 from "./_components/d11-point-2";
import D11_Section_Point3 from "./_components/d11-point-3";
import D11_Section_Test from "./_components/d11-point-test";

const Demo_11_Page = () => {
  return (
    <>
      {/* Hero */}

      {/* Differentiate */}
      <D11_Section_Differentiate />

      {/* Point1 */}
      <D11_Section_Point1 />

      {/* Point2 */}
      <D11_Section_Point2 />

      {/* Point3 */}
      <D11_Section_Point3 />

      {/* ShopNow */}
      <D11_Section_ShopNow />

      {/* Reviews */}
      <D11_Section_Reviews />
    </>
  );
};

export default Demo_11_Page;
