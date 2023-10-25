import Image from "next/image";
import { dataBenefits } from "../data";

const SectionBenefits = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container">
        <ul className="grid overflow-hidden md:rounded-3xl md:border">
          {dataBenefits?.map((item) => (
            <li
              key={item.id}
              className="group flex flex-col md:flex-row md:even:flex-row-reverse"
            >
              {/* Col */}
              <div className="overflow-hidden max-md:rounded-3xl md:w-1/2">
                <Image
                  src={`/37/${item.media}`}
                  alt={item.title}
                  width={720}
                  height={720}
                  className="h-auto w-full bg-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              {/* Col */}
              <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 text-center md:w-1/2 md:gap-6 md:p-16">
                <h3 className="text-2xl font-bold text-black md:text-5xl">
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

export default SectionBenefits;
