import Image from "next/image";
import { dataProducts } from "../data";
import { CardProductAlpha } from "@/components/card/product";

const D50_Section_ShopNow = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-6 text-center">
          <figure aria-hidden>
            <Image
              src="/50/h50_subtitle-4.svg"
              alt="Image"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </figure>
          <h2 className="font-kanit text-3xl font-bold text-black md:w-1/2 md:text-5xl">
            Some of Our Favorite Products
          </h2>
        </div>

        {/* List */}
        <ul className="grid gap-8 md:grid-cols-3">
          {dataProducts?.map((item) => (
            <li key={item.id}>
              <CardProductAlpha
                title={item.title}
                priceOriginal={item.priceOriginal}
                priceSale={item.priceSale}
                inStock={item.inStock}
                url={item.url}
                media={item.media}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default D50_Section_ShopNow;
