import { Card_Product_Beta } from "@/components/card/product-beta";
import { dataProductList } from "../data";

const H2_Section_Products = () => {
  return (
    <section className="px-4 py-24">
      <div className="container space-y-12">
        {/* Row */}
        <div className="mx-auto flex flex-col items-center gap-2 text-center md:w-2/5">
          <span className="font-semibold text-destructive">Our Products</span>

          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Which Version is Right for You
          </h2>
        </div>

        {/* List */}
        <ul className="grid w-full gap-8 md:grid-cols-3">
          {dataProductList?.map((item) => (
            <li key={item.id}>
              <Card_Product_Beta
                title={item.title}
                desc={item.desc}
                priceOriginal={item.price.original}
                mediaImage={item.media.image}
                linkLabel={item.link.label}
                linkUrl={item.link.url}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default H2_Section_Products;
