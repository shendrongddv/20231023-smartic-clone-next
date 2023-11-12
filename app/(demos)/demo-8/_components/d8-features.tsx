import Image from "next/image";
import { dataProductFeatures } from "../data";

const D8_Section_Features = () => {
  return (
    <section className="bg-gradient-to-b from-transparent to-slate-100 px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="mx-auto flex flex-col items-center gap-2 text-center md:w-3/5">
          <span className="font-semibold text-destructive">Features.</span>

          <h2 className="text-3xl font-bold text-black md:text-5xl">
            The Coolest Technology
          </h2>
        </div>

        {/* Row */}
        <ul className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-4">
          {dataProductFeatures?.map((item) => (
            <li
              key={item.id}
              className="group flex flex-col items-center gap-2 rounded-2xl bg-background p-4 text-center transition duration-500 hover:shadow-lg md:p-6"
            >
              {/* # */}
              <figure className="grid aspect-1 h-16 place-content-center overflow-hidden rounded-full bg-slate-100 transition duration-500 group-hover:bg-background md:h-20">
                <Image
                  src={`/dummy/${item.icon}`}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-auto scale-50 transition duration-500 group-hover:scale-75"
                />
              </figure>

              {/* # */}
              <h3 className="mt-4 text-lg font-bold text-black">
                {item.title}
              </h3>

              {/* # */}
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default D8_Section_Features;
