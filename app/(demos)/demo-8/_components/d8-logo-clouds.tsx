import Image from "next/image";
import Marquee from "react-fast-marquee";
import { dataLogoClouds } from "../data";

const D8_Section_LogoClouds = () => {
  return (
    <section className="pb-24 md:px-4">
      <div className="container flex flex-col items-center gap-8">
        <Marquee direction="left">
          {dataLogoClouds?.slice(0, 6)?.map((item) => (
            <figure key={item.id} className="px-6 py-4 md:px-12">
              <Image
                src={`https://img.logoipsum.com/2${item.id}.svg`}
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-auto md:h-10"
              />
            </figure>
          ))}
        </Marquee>

        <Marquee direction="right" className="-mt-4">
          {dataLogoClouds?.slice(6, 12)?.map((item) => (
            <figure key={item.id} className="px-6 py-4 md:px-12">
              <Image
                src={`https://img.logoipsum.com/2${item.id}.svg`}
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-auto md:h-10"
              />
            </figure>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default D8_Section_LogoClouds;
