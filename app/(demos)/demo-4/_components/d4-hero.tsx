import { Button } from "@/components/ui/button";
import Image from "next/image";

const D4_Section_Hero = () => {
  return (
    <section className="relative flex px-4 py-24">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 isolate z-0 flex flex-col items-stretch md:flex-row"
      >
        <div className="bg-[#FFCA2E] md:w-1/2">
          <div className=""></div>
        </div>
        <div className=" bg-[url(/4/h4-bg1.jpg)] bg-cover bg-center bg-no-repeat md:w-1/2">
          <div className="h-full w-full bg-black bg-opacity-50"></div>
        </div>
      </div>

      {/* Foreground */}
      <div className="container z-10 flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-4/12">
            <div className="font-teko flex flex-col items-center gap-4 text-center text-foreground md:items-start md:text-start">
              <h1 className="text-6xl md:text-7xl">
                The World&apos;s #1 Protein Power
              </h1>

              <span className="w-full border-b border-foreground text-xl">
                STARTING AT
              </span>

              <div className="flex items-center gap-4">
                <span className="text-6xl md:text-7xl">$45.99</span>
                <div className="flex flex-col text-start text-lg leading-none md:text-xl">
                  <span>100% WHEY PROTEIN</span>
                  <span>NATURALLY OCCURING BCCA</span>
                </div>
              </div>

              <Button className="mt-4 font-bromny font-semibold">
                Get It Now
              </Button>
            </div>
          </div>

          {/* Col */}
          <div className="md:w-3/12">
            <figure>
              <Image
                priority
                src="/4/revslider_h4-img1.png"
                alt="Image"
                width={435}
                height={470}
                className="mx-auto w-4/5 md:w-full"
              />
            </figure>
          </div>

          {/* Col */}
          <div className="md:w-4/12"></div>
        </div>
      </div>
    </section>
  );
};

export default D4_Section_Hero;
