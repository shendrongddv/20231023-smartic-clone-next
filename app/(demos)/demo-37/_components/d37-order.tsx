import { Button } from "@/components/ui/button";
import Image from "next/image";

const D37_Section_Order = () => {
  return (
    <section className="bg-gradient-to-b from-transparent from-50% to-[#333239] to-50% px-4">
      <div className="container">
        <div className="flex flex-col gap-12 overflow-hidden rounded-3xl bg-white px-4 py-12 md:flex-row md:items-center md:justify-center md:gap-24 md:p-16">
          {/* Col */}
          <div className="md:w-3/12">
            <Image
              src="/37/h37_img6.png"
              alt="Image"
              width={407}
              height={407}
              className="mx-auto h-auto w-3/5 md:w-full"
            />
          </div>

          {/* Col */}
          <div className="flex flex-col gap-6 max-md:text-center md:w-6/12">
            <h2 className="text-2xl font-bold text-black md:text-5xl">
              Stay Cool and Comfortable Intelligently
            </h2>

            <p className="text-xl">
              And get <span className="font-bold text-black">10%</span> off your
              first order
            </p>

            <span className="border-t"></span>

            <div className="flex items-center gap-6">
              <span className="text-4xl font-bold text-blue-500 md:text-5xl">
                $59.99
              </span>
              <Button
                variant="destructive"
                size="lg"
                className="font-semibold max-md:ml-auto"
              >
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D37_Section_Order;
