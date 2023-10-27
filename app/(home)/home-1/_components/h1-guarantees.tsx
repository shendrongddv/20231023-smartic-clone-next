import Image from "next/image";
import { dataGuarantees } from "../data";

const H1_Section_Guarantees = () => {
  return (
    <ul className="grid gap-12 bg-[#289C28] px-6 py-12 text-white md:grid-cols-3 md:p-12">
      {dataGuarantees?.map((item) => (
        <li
          key={item.id}
          className="flex flex-col items-center gap-3 text-center"
        >
          <figure className="h-14 w-auto">
            <Image
              src={`/1/${item.media}`}
              alt={item.title}
              width={56}
              height={56}
              className="mb-4 h-full w-auto"
            />
          </figure>

          <h3 className="font-spectralsc text-xl">{item.title}</h3>

          <p>{item.desc}</p>
        </li>
      ))}
    </ul>
  );
};

export default H1_Section_Guarantees;
