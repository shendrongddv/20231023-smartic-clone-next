import Image from "next/image";
import { dataProductValues } from "../data";

const D8_Section_Values = () => {
  return (
    <section className="bg-gradient-to-b from-slate-100 to-transparent px-4 pb-24">
      <ul className="container grid w-full gap-12 md:w-4/5">
        {dataProductValues?.map((item) => (
          <li
            key={item.id}
            className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:even:flex-row-reverse"
          >
            {/* Col */}
            <div className="md:w-5/12">
              <figure aria-hidden>
                <Image
                  src={`/8/${item.media}`}
                  alt={item.title}
                  width={480}
                  height={480}
                  className="mx-auto w-3/5 md:w-full"
                />
              </figure>
            </div>

            {/* Col */}
            <div className="md:w-6/12">
              <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-start">
                <h3 className="text-2xl font-bold text-black md:text-4xl">
                  {item.title}
                </h3>

                <p>{item.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default D8_Section_Values;
