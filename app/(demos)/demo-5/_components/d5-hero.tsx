import { Button } from "@/components/ui/button";
import Link from "next/link";

const D5_Section_Hero = () => {
  return (
    <section className="d5-bg-1 relative isolate flex px-4 py-36">
      {/* Overlay */}
      <span
        aria-hidden
        className="absolute inset-0 z-0 bg-black bg-opacity-50"
      ></span>

      {/* Content */}
      <div className="container z-10">
        <div className="flex flex-col items-start gap-8 md:w-1/2">
          <h1 className="font-bromny text-4xl font-bold text-white md:text-6xl">
            Smart Scale Dripping In Sheer Elegance
          </h1>

          <Button asChild className="bg-[#37C69A] hover:bg-[#37C69A]/80">
            <Link href="/" aria-label="Learn More">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default D5_Section_Hero;
