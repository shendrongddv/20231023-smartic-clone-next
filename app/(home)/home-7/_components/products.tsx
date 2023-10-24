import { dataProducts } from "../data";
import ProductCard from "./product-card";

const SectionProducts = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-16">
        {/* Row */}
        <div className="flex flex-col gap-6 text-center md:w-6/12">
          <span className="font-semibold text-destructive">Buy Now.</span>
          <h2 className="font-fahkwang text-3xl leading-none md:text-4xl">
            Best sellers
          </h2>
        </div>

        {/* Row */}
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {dataProducts?.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              price={item.price}
              media={item.media}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionProducts;
