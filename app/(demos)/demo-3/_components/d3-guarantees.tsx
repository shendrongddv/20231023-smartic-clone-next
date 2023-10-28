import Image from "next/image";
import { dataGuarantees } from "../data";

const D3_Section_Guarantees = () => {
  return (
    <section className="-mt-12 bg-[#7C9CCD] px-4 py-24">
      <div className="container py-12">
        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          {dataGuarantees?.map((item) => (
            <li
              key={item.id}
              className="group flex items-center gap-4 text-white md:flex-col"
            >
              <figure className="flex aspect-1 h-12 items-center justify-center rounded-full md:h-16">
                <Image
                  src={`/3/${item.media}`}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="h-full w-auto transition duration-500 group-hover:scale-90"
                />
              </figure>

              <div className="flex flex-col md:items-center md:text-center">
                <h3 className="font-bebasneue text-xl md:text-2xl">
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

export default D3_Section_Guarantees;
