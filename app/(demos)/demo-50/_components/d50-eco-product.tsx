import { Button } from "@/components/ui/button";
import Image from "next/image";

const D50_Section_EcoProduct = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col gap-12">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="flex flex-col items-center gap-4 text-center md:w-5/12 md:items-start md:text-start">
            <figure className="mb-4">
              <Image
                src="/50/h50-img-eco.svg"
                alt="Image"
                width={50}
                height={50}
                className="mx-auto h-36 w-auto"
              />
            </figure>

            <h2 className="font-kanit text-3xl font-bold text-black md:text-5xl">
              Safe for the Earth & Your Teeth
            </h2>

            <p>
              Eco-friendly floss picks made from all natural materials. We
              don&apos;t believe in using chemicals we can&apos;t pronounce.
            </p>

            <p>
              That&apos;s where we come in! Every product has multiple hours of
              testing and quality control behind it. That way you get the safest
              product for both you, and the earth!
            </p>

            <Button
              variant="destructive"
              size="lg"
              className="mt-4 font-semibold"
            >
              Shop Now
            </Button>
          </div>

          {/* Col */}
          <div className="md:w-6/12">
            <figure>
              <Image
                src="/50/h50-img2.png"
                alt="Image"
                width={480}
                height={480}
                className="mx-auto h-auto w-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D50_Section_EcoProduct;
