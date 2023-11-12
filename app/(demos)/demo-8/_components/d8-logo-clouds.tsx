import Image from "next/image";
import Marquee from "react-fast-marquee";
import { dataLogoClouds } from "../data";

const D8_Section_LogoClouds = () => {
  return (
    <section className="pb-24">
      <div className="mx-auto flex flex-col items-center gap-8">
        <div className="container flex items-center justify-center gap-4 px-4">
          <span aria-hidden className="h-0.5 w-full bg-slate-100"></span>
          <h2 className="shrink-0 text-center text-lg font-bold text-black md:text-2xl">
            As Featured in
          </h2>
          <span aria-hidden className="h-0.5 w-full bg-slate-100"></span>
        </div>

        <Marquee direction="left" speed={40}>
          {dataLogoClouds?.slice(0, 6)?.map((item) => (
            <figure key={item.id} className="h-8 px-4 md:h-10 md:px-8">
              <Image
                src={`https://img.logoipsum.com/2${item.id}.svg`}
                alt="Logo"
                width={40}
                height={40}
                className="h-full w-auto"
              />
            </figure>
          ))}
        </Marquee>

        <Marquee direction="right" speed={40}>
          {dataLogoClouds?.slice(6, 12)?.map((item) => (
            <figure key={item.id} className="h-8 px-4 md:h-10 md:px-8">
              <Image
                src={`https://img.logoipsum.com/2${item.id}.svg`}
                alt="Logo"
                width={40}
                height={40}
                className="h-full w-auto"
              />
            </figure>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default D8_Section_LogoClouds;
