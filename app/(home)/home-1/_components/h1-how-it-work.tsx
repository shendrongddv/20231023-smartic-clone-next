import Image from "next/image";
import { dataHowItWork } from "../data";

const H1_SectionHowItWork = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container space-y-16">
        {/* Row */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <span className="font-bold text-destructive">How Does It Work.</span>

          <h2 className="font-spectralsc text-4xl font-bold text-black md:text-5xl">
            4 Steps for Youthful Skin
          </h2>

          <p className="md:w-2/5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Row */}
        <ul className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-24">
          {dataHowItWork?.map((item) => (
            <li
              key={item.id}
              className="group flex flex-col items-center gap-2 text-center"
            >
              <div className="relative isolate mb-4 flex aspect-square w-3/5 items-center rounded-full bg-[#F3DDE0] transition duration-500 group-hover:bg-[#289C28] md:w-4/5">
                <div className="absolute -right-6 z-0 h-3/5 w-auto">
                  <Image
                    src={`/1/${item.shape}`}
                    alt={`Shape ${item.id}`}
                    width={250}
                    height={250}
                    className="h-auto w-full transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute left-0 z-10 w-11/12 overflow-hidden rounded-full">
                  <Image
                    src={`/1/${item.media}`}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="h-auto w-full"
                  />
                </div>

                <div className="absolute left-2 top-2 z-20 flex aspect-square h-14 items-center justify-center rounded-full bg-[#289C28] transition duration-500 group-hover:bg-[#F3DDE0]">
                  <span className="font-spectralsc text-xl font-bold leading-none text-white group-hover:text-[#289C28]">
                    {item.id}
                  </span>
                </div>
              </div>

              <h3 className="font-spectralsc text-2xl font-semibold text-black">
                {item.title}
              </h3>

              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default H1_SectionHowItWork;
