import Image from "next/image";
import { dataGuarantees } from "../data";

const D6_Section_SellingPoints = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <ul className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          {dataGuarantees?.map((item) => (
            <li
              key={item.id}
              className="group flex flex-col gap-2 md:items-center md:text-center"
            >
              {/* # */}
              <div className="flex items-center gap-4 md:flex-col">
                <figure className="flex h-14 w-14 items-center justify-center rounded-lg border transition duration-500 group-hover:bg-slate-100 md:h-16 md:w-16">
                  <Image
                    src={`/dummy/${item.icon}`}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="h-3/5 w-auto scale-110 transition duration-500 group-hover:scale-90"
                  />
                </figure>

                <div className="flex flex-col md:items-center md:text-center">
                  <h3 className="font-anton text-lg font-normal text-black md:text-xl">
                    {item.title}
                  </h3>
                  <span className="text-sm font-semibold text-destructive">
                    {item.subtutle}
                  </span>
                </div>
              </div>

              {/* # */}
              <p className="md:w-11/12">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default D6_Section_SellingPoints;
