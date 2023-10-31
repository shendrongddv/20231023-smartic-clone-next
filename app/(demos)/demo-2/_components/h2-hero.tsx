import { Button } from "@/components/ui/button";
import { CheckCheck, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const H2_Section_Hero = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container overflow-hidden rounded-3xl border bg-slate-100 px-4 pt-12">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-5/12">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-black text-foreground md:text-6xl">
                Keep in Touch with Your Child Anytime
              </h1>

              <ul className="mt-4 grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCheck className="h-4 w-4 text-destructive" />
                  GPS Real Time Tracking & Child Locator
                </li>
                <li className="flex items-center gap-2">
                  <CheckCheck className="h-4 w-4 text-destructive" />
                  Phone under &quot;Parental Control&quot;
                </li>
                <li className="flex items-center gap-2">
                  <CheckCheck className="h-4 w-4 text-destructive" />
                  Fast & Reliable 4G LTE Technology
                </li>
              </ul>

              <div className="mt-4 flex gap-4">
                <Button asChild variant="default" size="default" className="">
                  <Link href="/" aria-label="More Details">
                    More Details
                  </Link>
                </Button>

                <Button asChild variant="secondary" size="default" className="">
                  <Link href="/" aria-label="Shop Now">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Shop Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Col */}
          <div className="md:w-6/12">
            <figure>
              <Image
                priority
                src="/2/revslider_h2-img1.png"
                alt="Image"
                width={450}
                height={745}
                className="ml-auto h-auto w-3/5 md:mx-auto"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default H2_Section_Hero;
