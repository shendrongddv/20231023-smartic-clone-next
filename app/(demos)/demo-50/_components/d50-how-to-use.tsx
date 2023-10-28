import Image from "next/image";
import { dataSteps } from "../data";

const D50_Section_HowToUse = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-6 text-center">
          <figure aria-hidden>
            <Image
              src="/50/h50_subtitle-3.svg"
              alt="Image"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </figure>
          <h2 className="font-kanit text-3xl font-bold text-black md:w-3/5 md:text-5xl">
            How to Use Dental Floss
          </h2>
        </div>

        {/* Row */}
        <div className="flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <ul className="grid gap-8 md:w-5/12">
            {dataSteps?.map((item) => (
              <li key={item.id} className="flex items-center gap-4 md:gap-6">
                <figure className="aspect-1">
                  <Image
                    src={`/50/${item.media}`}
                    alt={item.title}
                    width={162}
                    height={162}
                    className="h-auto w-full"
                  />
                </figure>
                <div className="flex flex-col">
                  <h3 className="font-kanit text-lg font-semibold text-black md:text-2xl">
                    {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Col */}
          <div className="md:w-6/12">
            <figure>
              <Image
                src="/50/h50-image1.png"
                alt="Image"
                width={480}
                height={480}
                className="mx-auto h-auto w-4/5 md:w-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D50_Section_HowToUse;
