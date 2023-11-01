import { Button } from "@/components/ui/button";
import { CheckCheck, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const H2_Section_Hero = () => {
  return (
    <section className="md:px-4 md:pt-24">
      <div className="z-0 mx-auto flex max-w-[1280px] overflow-hidden bg-[#A5CEF0] px-4 pt-24 md:rounded-[2rem] md:pt-12">
        <div className="container z-[1]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Col */}
            <div className="z-10 w-full md:w-5/12">
              <div className="flex flex-col gap-4 text-white max-md:pb-12">
                <h1 className="text-3xl font-black drop-shadow md:text-6xl">
                  Keep in Touch with Your Child Anytime
                </h1>

                <ul className="mt-4 grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-foreground" />
                    GPS Real Time Tracking & Child Locator
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-foreground" />
                    Phone under &quot;Parental Control&quot;
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-foreground" />
                    Fast & Reliable 4G LTE Technology
                  </li>
                </ul>

                <div className="mt-4 flex gap-2">
                  <Button asChild variant="default" size="default" className="">
                    <Link href="/" aria-label="More Details">
                      More Details
                    </Link>
                  </Button>

                  <Button asChild variant="secondary" size="default">
                    <Link href="/" aria-label="Shop Now">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Shop Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Col */}
            <div className="relative z-[2] flex w-full md:w-6/12">
              <figure className="z-10 mx-auto w-full">
                <Image
                  src="/2/revslider_h2-img1.png"
                  alt="Image"
                  width={275}
                  height={395}
                  className="mx-auto h-auto w-3/5"
                />
              </figure>

              {/* Decor */}
              <Image
                src="/2/h2_decor-1.svg"
                alt="Image"
                width={275}
                height={395}
                className="absolute -bottom-1/4 right-1/2 z-0 h-auto w-full translate-x-1/2 scale-[160%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default H2_Section_Hero;
