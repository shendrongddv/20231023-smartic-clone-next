import { Button } from "@/components/ui/button";
import Image from "next/image";

const D50_Section_Hero = () => {
  return (
    <section className="bg-[#618334] px-4 py-24">
      <div className="container">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="flex flex-col items-center gap-4 text-center md:w-5/12 md:items-start md:text-start">
            <h1 className="font-kanit text-4xl font-bold text-white md:text-7xl">
              Choose Good Dental Floss is&nbsp;
              <span className="text-[#FFE400]">The Key</span>
            </h1>
            <p className="text-white">
              Get 10% Off! Add 2 or more Smartic products to your cart and enjoy
              a discount. No code needed, just add to cart! It&apos;s that easy.
            </p>

            <Button
              variant="destructive"
              size="lg"
              className="mt-4 font-semibold"
            >
              Discover Now
            </Button>
          </div>

          {/* Col */}
          <div className="md:w-6/12">
            <Image
              src="/50/rev-home50-1.png"
              alt="Image"
              width={709}
              height={678}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default D50_Section_Hero;
