import Image from "next/image";
import { dataHowItsWork } from "../data";
import { D4_Card_HowItWork } from "./d4-how-it-work-card";

const D4_Section_HowItWork = () => {
  return (
    <section className="relative flex overflow-hidden bg-[url(/4/image6_h4.jpg)] bg-cover bg-center bg-no-repeat px-4 pt-24">
      <div className="container z-10 flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-3/5">
          <h1 className="font-teko text-4xl uppercase text-white md:text-5xl">
            <span className="bg-gradient-to-b from-transparent from-50% to-[#FFCA2E] to-50%">
              How Does It Work
            </span>
          </h1>
        </div>

        {/* Row */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
          {/* Col */}
          <div className="md:w-3/12">
            <ul className="grid grid-cols-2 md:grid-cols-1">
              {dataHowItsWork?.slice(0, 4)?.map((item) => (
                <li key={item.id}>
                  <D4_Card_HowItWork title={item.title} media={item.media} />
                </li>
              ))}
            </ul>
          </div>

          {/* Col */}
          <div className="md:order-last md:w-3/12">
            <ul className="grid grid-cols-2 md:grid-cols-1">
              {dataHowItsWork?.slice(4, 8)?.map((item) => (
                <li key={item.id}>
                  <D4_Card_HowItWork title={item.title} media={item.media} />
                </li>
              ))}
            </ul>
          </div>

          {/* Col */}
          <div className="flex w-full max-md:pt-8 md:order-2 md:w-4/12">
            <figure className="z-10 w-full">
              <Image
                src="/4/image3-h4.png"
                alt="Image"
                width={437}
                height={635}
                className="mx-auto h-auto w-4/5 md:w-full"
              />
            </figure>
          </div>
        </div>
      </div>

      <span
        aria-hidden
        className="absolute inset-0 z-0 bg-black bg-opacity-80"
      ></span>

      <span
        aria-hidden
        className="absolute inset-0 z-[1] flex flex-col items-center justify-end"
      >
        <figure className="scale-150">
          <Image
            src="/4/image4-h4.png"
            alt="Image"
            width={437}
            height={635}
            className="h-auto w-full"
          />
        </figure>
      </span>
    </section>
  );
};

export default D4_Section_HowItWork;
