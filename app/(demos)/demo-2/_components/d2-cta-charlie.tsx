import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

const D2_CTA_Charlie = () => {
  return (
    <section className="pb-24 md:px-4">
      <div className="z-0 mx-auto flex max-w-[1280px] overflow-hidden bg-[#fae0f5] px-4 pt-24 md:rounded-[2rem] md:pt-12">
        <div className="container z-[1]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Col */}
            <div className="z-10 w-full md:w-6/12">
              <div className="flex flex-col items-center gap-4 text-center max-md:pb-12 md:items-start md:text-start">
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
            <div className="relative z-[2] flex w-full md:w-5/12">
              <figure className="z-10 mx-auto w-full">
                <Image
                  src="/2/h2_children-1.png"
                  alt="Image"
                  width={275}
                  height={395}
                  className="mx-auto h-auto w-4/5 md:w-3/5"
                />
              </figure>

              {/* Decor */}
              <Image
                src="/2/h2_decor-4.svg"
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

export default D2_CTA_Charlie;
