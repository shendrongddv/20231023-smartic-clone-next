import { cn } from "@/lib/utils";
import { dataProductCategories } from "../data";
import Image from "next/image";

const D6_Section_Categories = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-4 text-center md:w-4/5">
          <h2 className="font-anton text-2xl text-black md:text-3xl">
            Coffee Product Range
          </h2>

          <span aria-hidden className="h-0.5 w-24 bg-destructive"></span>
        </div>

        {/* Row */}
        <ul className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          {dataProductCategories?.map((item) => (
            <li
              key={item.id}
              className="group flex items-center justify-between gap-4 max-md:even:flex-row-reverse md:flex-col"
            >
              <figure
                aria-hidden
                className="relative isolate flex aspect-1 w-6/12 md:w-full"
              >
                <Image
                  src={`/6/${item.media}`}
                  alt={item.title}
                  width={230}
                  height={310}
                  className="z-10 mx-auto h-full w-auto"
                />

                {/* Decor */}
                <Image
                  aria-hidden
                  src="/6/h6_shape-2.webp"
                  alt="Decoration"
                  width={320}
                  height={320}
                  className="absolute left-1/2 top-1/2 z-0 mx-auto h-full w-auto -translate-x-1/2 -translate-y-1/2 scale-90 transition duration-500 group-hover:scale-100"
                />
              </figure>

              <div className="flex w-6/12 flex-col items-center text-center md:w-full">
                <h3 className="font-anton text-lg font-normal text-black md:text-xl">
                  {item.title}
                </h3>

                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default D6_Section_Categories;
