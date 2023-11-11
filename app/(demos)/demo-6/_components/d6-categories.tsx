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
        <ul className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          {dataProductCategories?.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              <figure
                className={cn(
                  "grid aspect-1 w-full place-content-center bg-contain bg-center bg-no-repeat",
                  item.bg !== null ? "bg-[url(/6/H6_shape-1.webp)]" : "",
                )}
              >
                <Image
                  src={`/6/${item.media}`}
                  alt={item.title}
                  width={230}
                  height={310}
                  className="mx-auto h-auto w-full"
                />
              </figure>

              <h3 className="mt-4 font-anton text-lg font-bold text-black md:text-xl">
                {item.title}
              </h3>

              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default D6_Section_Categories;
