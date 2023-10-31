import { Button } from "@/components/ui/button";
import { CheckCheck, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const H2_Section_Hero = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container relative flex overflow-hidden rounded-3xl border bg-[#A5CEF0] px-4 pt-24 md:pt-12">
        <div className="z-10 flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-5/12">
            <div className="flex flex-col gap-4 text-white">
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
          <div className="relative isolate flex md:w-6/12">
            <figure className="z-10">
              <Image
                priority
                src="/2/revslider_h2-img1.png"
                alt="Image"
                width={450}
                height={745}
                className="ml-auto h-auto w-3/5 md:mx-auto"
              />
            </figure>

            {/* Decor */}
            <figure
              aria-hidden
              className="absolute -right-1/4 bottom-0 z-0 translate-y-1/4"
            >
              <Image
                priority
                src="/2/h2_decor-1.svg"
                alt="Image"
                width={450}
                height={745}
                className="h-auto w-full"
              />
            </figure>
          </div>
        </div>

        {/* Decor */}
        <figure aria-hidden className="absolute left-0 top-0 z-0">
          <Image
            priority
            src="/2/h2_decor-2.svg"
            alt="Image"
            width={160}
            height={160}
            className="aspect-1 h-40 -translate-x-2/4 -translate-y-2/4"
          />
        </figure>
      </div>
    </section>
  );
};

export default H2_Section_Hero;
