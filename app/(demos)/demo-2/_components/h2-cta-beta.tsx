import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const H2_CTA_Beta = () => {
  return (
    <section className="px-4">
      <div className="container overflow-hidden rounded-3xl border bg-[#FAE0F5] px-4 pt-12">
        <div className="relative isolate flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="z-10 md:w-5/12">
            <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-start">
              <h2 className="text-3xl font-bold text-foreground md:text-5xl">
                Sign Up for Update & Promotions
              </h2>

              <Link
                href="/"
                aria-label="Shop Now"
                className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <PlayCircle className="h-8 w-8 text-destructive" />
                Watch Video
              </Link>
            </div>
          </div>

          {/* Col */}
          <div className="z-10 md:w-6/12">
            <figure className="z-10 mx-auto">
              <Image
                src="/2/h2_children-1.png"
                alt="Image"
                width={275}
                height={395}
                className="mx-auto h-auto w-3/5"
              />
            </figure>
          </div>

          {/* Decor */}
          <figure aria-hidden className="absolute -bottom-1/3 -right-1/2 z-0">
            <Image
              priority
              src="/2/h2_decor-4.svg"
              alt="Image"
              width={450}
              height={745}
              className="h-auto w-3/5 scale-150"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default H2_CTA_Beta;
