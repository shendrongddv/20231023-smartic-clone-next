import Image from "next/image";
import { dataGuarantees } from "../data";

const D6_Section_SellingPoints = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <ul className="grid w-full gap-12 sm:grid-cols-2 md:grid-cols-3">
          {dataGuarantees?.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center gap-2 text-center"
            >
              <figure className="h-16 w-auto">
                <Image
                  src={`/dummy/${item.icon}`}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="h-full w-auto"
                />
              </figure>

              <h3 className="mt-4 font-anton text-xl font-bold text-black md:text-2xl">
                {item.title}
              </h3>
              <span className="text-sm font-semibold text-destructive">
                {item.subtutle}
              </span>
              <p className="md:w-10/12">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default D6_Section_SellingPoints;
