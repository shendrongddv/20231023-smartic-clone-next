import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const D8_Section_Hero = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container flex flex-col items-center gap-12 md:flex-row md:justify-between">
        {/* Col */}
        <div className="flex flex-col items-center gap-4 text-center md:w-5/12 md:items-start md:text-start">
          <span className="font-semibold text-destructive">
            Smart Thermometer
          </span>
          <h1 className="text-4xl font-bold text-black md:text-7xl">
            Help Prevent Spreading Your Illness
          </h1>
          <Button asChild variant="destructive" className="mt-4 md:px-6">
            <Link href="/" aria-label="Shop Now">
              Shop Now
            </Link>
          </Button>
        </div>

        {/* Col */}
        <div className="md:w-6/12">
          <figure>
            <Image
              aria-hidden
              src="/8/revslider_h8-img1.webp"
              alt="Image"
              width={480}
              height={480}
              className="h-auto w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default D8_Section_Hero;
