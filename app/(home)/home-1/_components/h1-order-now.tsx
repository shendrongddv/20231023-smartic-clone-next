import { dataProducts } from "../data";
import H1_ProductCard from "./h1-product-card";

const H1_Section_OrderNow = () => {
  return (
    <div className="space-y-16 px-6 py-24">
      {/* Row */}
      <div className="flex w-full flex-col items-center gap-4 text-center">
        <span className="font-bold text-destructive">Ingredients.</span>

        <h2 className="font-spectralsc text-4xl font-bold text-black md:text-5xl">
          The Special Formula
        </h2>
      </div>

      {/* Row */}
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-12">
        {dataProducts?.map((item) => (
          <H1_ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            media={item.media}
          />
        ))}
      </ul>
    </div>
  );
};

export default H1_Section_OrderNow;
