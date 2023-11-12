import Image from "next/image";
import Link from "next/link";
import { MoveUpLeft, MoveUpRight } from "lucide-react";
import { dataPortfolios } from "../data";

const Portfolio = () => {
  const sortDataPortfolios = dataPortfolios.sort(
    (a, b) => b.ceatedAt - a.ceatedAt,
  );

  return (
    <section id="demos" className="px-4 py-24">
      <div className="container space-y-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="flex bg-[url(/0/ldp_mask.webp)] bg-clip-text font-inter text-8xl font-black text-transparent md:text-9xl">
            50
            <span className="text-6xl md:text-7xl">+</span>
          </span>
          <h2 className="mt-2 font-bromny text-3xl text-black md:text-5xl">
            <span className="font-lora italic text-destructive">Unique</span>{" "}
            Prebuilt Demos
          </h2>
          <p>and more demos comingsoon</p>
        </div>

        {/* Row */}
        <ul className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-8">
          {sortDataPortfolios?.map((item) => (
            <li
              key={item.id}
              className="group grid gap-1 rounded-xl border bg-background p-1 shadow-lg md:gap-2 md:p-2"
            >
              {/* Col */}
              <figure className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg border">
                <Image
                  src={`/thumbnail/${item.media}`}
                  alt={item.title}
                  width={560}
                  height={400}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </figure>

              {/* Col */}
              <div className="flex items-center justify-between gap-2">
                <Link
                  href={item.url.original}
                  aria-label="Link to Original Version"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-1 flex aspect-1 h-7 items-center justify-center rounded-lg border border-white bg-slate-100 text-foreground shadow hover:bg-rose-500 hover:text-white"
                >
                  <MoveUpLeft className="h-3 w-3" />
                </Link>

                <div className="flex items-center justify-center text-clip">
                  <p className="text-xs font-semibold md:text-sm">
                    {item.title}
                  </p>
                </div>

                <Link
                  href={item.url.clone}
                  aria-label="Link to Clone Version"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-1 flex aspect-1 h-7 items-center justify-center rounded-lg border border-white bg-slate-100 text-foreground shadow hover:bg-indigo-600 hover:text-white"
                >
                  <MoveUpRight className="h-3 w-3" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
