import { Button } from "@/components/ui/button";
import Image from "next/image";

const D50_CTA_Charlie = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col md:flex-row">
          {/* Col */}
          <div className="group/left relative isolate md:w-1/2">
            <figure className="aspect-h-3 aspect-w-4 z-0 h-full w-full overflow-hidden">
              <Image
                src="/50/h50-img-banner1.jpg"
                alt="Image"
                width={960}
                height={700}
                className="h-full w-full object-cover transition duration-500 group-hover/left:scale-110"
              />
            </figure>

            <div className="absolute inset-0 z-10 flex flex-col items-start justify-end p-4 md:p-12">
              <h3 className="font-kanit w-1/2 text-2xl font-bold text-black md:text-4xl">
                Soft on Gums & Teeth
              </h3>
              <Button
                variant="default"
                size="default"
                className="mt-4 font-semibold"
              >
                Discover Now
              </Button>
            </div>
          </div>

          {/* Col */}
          <div className="group/right relative isolate md:w-1/2">
            <figure className="aspect-h-3 aspect-w-4 z-0 h-full w-full overflow-hidden">
              <Image
                src="/50/h50-img-banner2.jpg"
                alt="Image"
                width={960}
                height={700}
                className="h-full w-full object-cover transition duration-500 group-hover/right:scale-110"
              />
            </figure>

            <div className="absolute inset-0 z-10 flex flex-col items-start justify-end p-4 md:p-12">
              <h3 className="font-kanit w-1/2 text-2xl font-bold text-white drop-shadow md:text-4xl">
                Zero Waste Flossing
              </h3>
              <Button
                variant="default"
                size="default"
                className="mt-4 border border-white bg-transparent font-semibold"
              >
                Discover Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D50_CTA_Charlie;
