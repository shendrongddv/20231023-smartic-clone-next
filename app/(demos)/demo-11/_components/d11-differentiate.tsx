import Image from "next/image";
import { Data1 } from "../data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const D11_Section_Differentiate = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-4 text-center md:w-1/2">
          <h4 className="text-3xl font-bold text-destructive md:text-4xl">
            <span className="font-yellowtail d11-h2 font-normal text-black">
              What Makes Us
            </span>
            &nbsp;Different
          </h4>

          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Row */}
        <ul className="grid w-full gap-8 md:grid-cols-3">
          {Data1?.map((item) => (
            <li key={item.id} className="group relative isolate flex">
              {/* Decoration */}
              <figure
                aria-hidden
                className="absolute inset-0 z-0 grid place-content-center"
              >
                <Image
                  src="/11/h11-layer-4.webp"
                  alt="Decoration"
                  width={480}
                  height={480}
                  className="h-auto w-full scale-90 transition duration-500 group-hover:scale-105"
                />
              </figure>

              {/* Content */}
              <div className="z-10 mx-auto flex h-full w-4/5 flex-col items-center gap-4 rounded-3xl  bg-[#D7FCD1] px-4 py-6 text-center">
                {/* # */}
                <figure aria-hidden className="h-12 w-auto">
                  <Image
                    src={`/11/${item.icon}`}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="h-full w-auto transition duration-500 group-hover:rotate-12 group-hover:scale-125"
                  />
                </figure>

                {/* # */}
                <h3 className="text-xl font-semibold text-black">
                  {item.title}
                </h3>

                {/* # */}
                <p className="mb-4">{item.desc}</p>

                {/* # */}
                <Button
                  asChild
                  variant="secondary"
                  className="mt-auto bg-background px-6 hover:bg-destructive hover:text-background"
                >
                  <Link href={item.link.url} aria-label={item.link.label}>
                    {item.link.label}
                  </Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default D11_Section_Differentiate;
