import { Button } from "@/components/ui/button";
import Image from "next/image";

const D3_Section_Hero = () => {
  return (
    <section className="relative isolate flex px-6 pt-24">
      <div className="container z-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="flex flex-col items-center gap-4  pb-16 text-center md:w-6/12 md:items-start md:text-start">
            <h1 className="font-bebasneue text-4xl font-bold text-white md:text-7xl">
              The World&apos;s Smartest and Most Innovative Bags
            </h1>

            <Button
              variant="destructive"
              size="lg"
              className="mt-4 font-semibold"
            >
              Shop Now
            </Button>
          </div>

          {/* Col */}
          <div className="md:w-5/12">
            <Image
              src="/3/revslider_h3-img1.png"
              alt="Image"
              width={656}
              height={444}
              className="mx-auto h-auto w-4/5 md:w-full"
            />
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="clip-path absolute inset-0 z-0 bg-[url(/3/revslider_h3-bg1.jpg)] bg-no-repeat">
        <div className="h-full w-full bg-black bg-opacity-60"></div>
      </div>
    </section>
  );
};

export default D3_Section_Hero;
