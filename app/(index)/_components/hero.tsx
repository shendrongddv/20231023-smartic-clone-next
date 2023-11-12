import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex bg-[url(/0/ldp2-bg.webp)] bg-cover bg-top bg-no-repeat px-4 py-24">
      {/* Overlay */}
      <span className="absolute inset-0 bg-black bg-opacity-50"></span>
      {/* Content */}
      <div className="container z-10">
        {/* Row */}
        <div className="mx-auto flex flex-col items-center gap-8 text-center md:w-4/5">
          <h1 className="font-bromny text-5xl text-white md:text-7xl">
            An Outstanding{" "}
            <span className="font-lora italic text-destructive">
              Product Landing Page
            </span>{" "}
            Theme
          </h1>

          <p className="text-lg text-white md:w-3/5">
            Smartic is a really creative & modern Product Landing Page
            WooCommerce Theme with a premier appeal built with powerful
            Elementor page builder.
          </p>

          <Button asChild variant="outline" className="mt-4 px-6">
            <Link href="#demos" aria-label="View All Demos">
              View All Demos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
