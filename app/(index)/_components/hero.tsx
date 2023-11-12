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
          <h1 className="font-bromny text-4xl text-white md:text-7xl">
            An Outstanding{" "}
            <span className="font-lora italic text-destructive">
              Product Landing Page
            </span>{" "}
            Theme
          </h1>

          <p className="text-lg text-white md:w-3/5">
            I am recreating the{" "}
            <Link
              href="/https://themeforest.net/item/smartic-product-landing-page-woocommerce-theme/29259690?s_rank=1"
              aria-label="Smartic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-destructive underline underline-offset-4"
            >
              Smartic
            </Link>{" "}
            website to learn frontend web development, using designs, images,
            and elements from the original site. The original site is on
            WordPress, but I am rebuilding it with Next.js and Tailwind CSS.
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
