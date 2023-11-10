import { Button } from "@/components/ui/button";
import Image from "next/image";

const D5_Section_ShopNow = () => {
  return (
    <section className="relative flex flex-col">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 hidden md:grid md:grid-cols-2"
      >
        {/* Col */}
        <div></div>

        {/* Col */}
        <div className="bg-[url(/5/bg5-h5.webp)] bg-cover bg-center bg-no-repeat"></div>
      </div>

      {/* Content */}
      <div className="container z-10 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Col */}
        <div className="flex flex-col items-center gap-8 px-4 py-24 text-center max-md:order-last max-md:px-4 md:w-6/12">
          {/* Product */}
          <div className="flex w-3/5 flex-col items-center gap-2 text-center">
            <figure>
              <Image
                src="/5/image3-h5.png"
                alt="Image"
                width={896}
                height={435}
                className="h-auto w-full"
              />
            </figure>

            <span className="mt-8 text-destructive">In Stock</span>
            <h3 className="text-3xl font-bold text-foreground">
              Smartic Scale
            </h3>
            <span className="text-2xl font-semibold text-destructive">
              $123.99
            </span>
            <Button className="mt-4">Add to Cart</Button>
          </div>
        </div>

        {/* Col */}
        <div
          aria-hidden
          className="flex aspect-1 bg-[url(/5/bg5-h5.webp)] bg-cover bg-center bg-no-repeat md:hidden md:w-6/12"
        ></div>
      </div>
    </section>
  );
};

export default D5_Section_ShopNow;
