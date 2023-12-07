import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const D12_Section_Hero = () => {
  return (
    <section className="bg-[url(/12/home-12-image-13.webp)] bg-cover bg-bottom bg-no-repeat pt-24">
      <div className="container space-y-24 px-6">
        {/* Row */}
        <div className="mx-auto flex flex-col items-center gap-4 text-center text-white md:w-1/3">
          <h1 className="font-redrose text-4xl font-bold md:text-6xl">
            Healthy Pet Happy Owner
          </h1>

          <p className="text-lg font-semibold">
            Holistic nutrition for cats & dogs
          </p>

          <Button asChild variant="destructive" className="mt-4 px-8">
            <Link href="/" aria-label="Our Philosophy">
              Our Philosophy
            </Link>
          </Button>
        </div>

        {/* Row */}
        <figure aria-hidden className="mx-auto w-full max-w-lg">
          <Image
            src="/12/home-12-image-12.webp"
            alt="Image"
            width={640}
            height={435}
            className="h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
};

export default D12_Section_Hero;
