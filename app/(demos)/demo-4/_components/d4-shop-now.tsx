import { dataProducts } from "../data";
import { D4_Card_Product } from "./d4-product-card";

const D4_Section_ShopNow = () => {
  const product_1 = dataProducts[0];
  const product_2 = dataProducts[1];

  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col gap-8 md:w-4/5 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="flex-1">
            <D4_Card_Product
              title={product_1.title}
              priceOriginal={product_1.priceOriginal}
              media={product_1.media}
            />
          </div>

          {/* Col */}
          <div className="flex-1">
            <D4_Card_Product
              title={product_2.title}
              priceOriginal={product_2.priceOriginal}
              media={product_2.media}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default D4_Section_ShopNow;
