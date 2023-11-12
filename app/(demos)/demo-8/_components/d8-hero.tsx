import { Button } from "@/components/ui/button";
import Link from "next/link";

const D8_Section_Hero = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col gap-12 md:flex-row md:justify-between">
        {/* Col */}
        <div className="flex flex-col items-center gap-4 text-center md:w-6/12 md:items-start md:text-start">
          <span className="font-semibold text-destructive">
            Smart Thermometer
          </span>
          <h1 className="text-3xl font-bold text-black md:text-6xl">
            Help Prevent Spreading Your Illness
          </h1>
          <Button asChild variant="destructive" className="mt-4 md:px-6">
            <Link href="/" aria-label="Shop Now">
              Shop Now
            </Link>
          </Button>
        </div>

        {/* Col */}
        <div className="md:w-5/12"></div>
      </div>
    </section>
  );
};

export default D8_Section_Hero;
