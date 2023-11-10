import { Button } from "@/components/ui/button";
import Link from "next/link";

const D5_Section_Hero = () => {
  return (
    <section className="d5-bg-1 px-4 py-24">
      <div className="container">
        <div className="flex flex-col items-start gap-8 md:w-1/2">
          <h1 className="font-bromny text-4xl font-bold text-white md:text-6xl">
            Smart Scale Dripping In Sheer Elegance
          </h1>

          <Button asChild variant="default" size="default">
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

// bg-[url(/5/revslider_h5-bg1.jpg)] bg-cover bg-center bg-no-repeat
