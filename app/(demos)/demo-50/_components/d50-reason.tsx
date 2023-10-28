import Image from "next/image";
import { dataReason } from "../data";

const D50_Section_Reason = () => {
  return (
    <section className="bg-[url(/50/h50-bg3.jpg)] bg-cover bg-center bg-no-repeat px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-6 text-center md:w-4/5">
          <figure aria-hidden>
            <Image
              src="/50/h50_teeth-2.svg"
              alt="Image"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </figure>
          <h2 className="font-kanit text-3xl font-bold text-black md:w-3/5 md:text-5xl">
            Reasons to Love It
          </h2>
        </div>

        {/* Row */}
        <ul className="flex flex-wrap justify-center gap-8 md:grid md:w-4/5 md:grid-cols-3">
          {dataReason?.map((item) => (
            <li
              key={item.id}
              className="group flex w-5/12 flex-col items-center gap-4 text-center md:w-full"
            >
              <figure className="flex aspect-1 w-4/5 items-center justify-center rounded-full bg-white md:w-3/5">
                <Image
                  src={`/50/${item.media}`}
                  alt={item.title}
                  width={410}
                  height={480}
                  className="h-16 w-auto transition duration-500 group-hover:scale-110"
                />
              </figure>

              <h3 className="font-kanit text-xl font-semibold text-black md:w-4/5 md:text-2xl">
                {item.title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default D50_Section_Reason;
