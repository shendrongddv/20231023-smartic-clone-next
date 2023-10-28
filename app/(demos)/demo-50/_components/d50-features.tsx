import Image from "next/image";
import { dataFeatures } from "../data";

const D50_Section_Features = () => {
  return (
    <section className="bg-[url(/50/h50-bg2.jpg)] bg-cover bg-center bg-no-repeat px-4 py-24">
      <div className="container">
        {/* List */}
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:ml-auto md:w-1/2 md:gap-8">
          {dataFeatures?.map((item) => (
            <li
              key={item.id}
              className="group flex w-full flex-col items-center gap-4 text-center"
            >
              <figure className="flex aspect-1 h-28 items-center justify-center rounded-full transition duration-500 group-hover:bg-[#88C040] md:h-32">
                <Image
                  src={`/50/${item.media}`}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="h-full w-auto transition duration-500 group-hover:scale-90"
                />
              </figure>

              <h3 className="font-kanit w-4/5 font-semibold text-black md:text-xl">
                {item.title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default D50_Section_Features;
