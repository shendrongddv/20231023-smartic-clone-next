import Image from "next/image";
import { dataFeatures } from "../data";

const D37_Section_Features = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container">
        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {dataFeatures?.map((item) => (
            <li
              key={item.id}
              className="flex gap-6 md:flex-col md:items-center md:p-6 md:text-center"
            >
              <figure className="shrink-0 pt-1">
                <Image
                  src={`/37/${item.media}`}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="h-12 w-auto"
                />
              </figure>
              <div>
                <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default D37_Section_Features;
