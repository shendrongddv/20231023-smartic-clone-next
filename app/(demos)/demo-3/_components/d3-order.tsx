import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const D3_Section_Order = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-8">
        {/* Row */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-bebasneue text-4xl font-bold text-black md:text-6xl">
            Get Product Now
          </h2>
        </div>

        {/* Row */}
        <div className="md:w-4/5 md:p-12">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
            {/* Col */}
            <div className="md:w-5/12">
              <figure>
                <Image
                  src="/3/single_product_h3.jpg"
                  alt="Image"
                  width={520}
                  height={700}
                  className="mx-auto h-auto w-3/5 md:w-full"
                />
              </figure>
            </div>

            {/* Col */}
            <div className="flex flex-col items-center gap-4 text-center md:w-6/12 md:items-start md:text-start">
              {/* Info */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-black md:text-4xl">
                  Stmartic Backpack
                </h3>
                <span className="text-lg font-semibold text-destructive md:text-2xl">
                  $90,00 - $120,00
                </span>
                <span>In stock</span>
              </div>

              {/* Color */}

              {/* Size */}

              {/* Quantity */}

              <Button
                variant="destructive"
                size="lg"
                className="mt-4 font-semibold"
              >
                Add to Cart
                <ShoppingBag className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D3_Section_Order;
