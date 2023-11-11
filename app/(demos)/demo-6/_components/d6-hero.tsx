import { Button } from "@/components/ui/button";
import Image from "next/image";

const D6_Section_Hero = () => {
  return (
    <section className="relative flex flex-col bg-[url(/6/revslider_h6-bg1.webp)] bg-cover bg-center bg-no-repeat px-4 py-24">
      <span
        aria-hidden
        className="absolute inset-0 bg-black bg-opacity-50"
      ></span>
      <div className="container z-10 flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-8 text-center md:w-3/5">
          <figure className="h-36 w-auto">
            <Image
              src="/6/revslider_h6-img1.webp"
              alt="Image"
              width={132}
              height={150}
              className="h-full w-auto"
            />
          </figure>

          <h2 className="font-anton text-3xl text-white md:text-5xl">
            Cofee from the Best Roasters Delivered Directly to Your Door
          </h2>

          <div className="flex gap-4">
            <Button variant="destructive" className="font-semibol dmd:px-6">
              Try It Now
            </Button>
            <Button variant="secondary" className="font-semibol dmd:px-6">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D6_Section_Hero;
