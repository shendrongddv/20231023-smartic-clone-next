import Image from "next/image";
import { dataWhatItDo } from "../data";

const D5_Section_WhatItDo = () => {
  return (
    <section className="bg-slate-100 px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-4/5">
          <h2 className="text-3xl text-foreground md:text-5xl">
            Measurements <span className="font-black">Made Easy</span>
          </h2>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur., adipisci velit, sed quia non numquam eius. modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem.
          </p>
        </div>

        {/* Row */}
        <ul className="flex w-full flex-wrap justify-center gap-y-6 md:items-center md:justify-between">
          {dataWhatItDo?.map((item) => (
            <li
              key={item.id}
              className="group flex w-1/4 flex-col items-center gap-2 text-center md:w-1/12"
            >
              <figure className="grid aspect-1 h-14 place-content-center overflow-hidden rounded-full border border-destructive transition duration-300 group-hover:border-transparent md:h-20">
                <Image
                  src={`/dummy/${item.image}`}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="h-6 w-auto transition duration-500 group-hover:scale-150 md:h-8"
                />
              </figure>

              <h3 className="text-sm font-semibold text-foreground md:text-base">
                {item.title}
              </h3>
            </li>
          ))}
        </ul>

        {/* Row */}
        <figure aria-hidden className="mt-12 md:w-4/5">
          <Image
            src="/5/image3-h5.png"
            alt="Image"
            width={896}
            height={435}
            className="h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
};

export default D5_Section_WhatItDo;
