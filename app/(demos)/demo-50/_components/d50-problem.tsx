import Image from "next/image";
import { dataProblems } from "../data";

const D50_Section_Problem = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-6 text-center">
          <figure aria-hidden>
            <Image
              src="/50/h50_teeth-1.svg"
              alt="Image"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </figure>
          <h2 className="font-kanit text-3xl font-bold text-black md:w-3/5 md:text-5xl">
            Do You Still Have Problem With Your Teeth?
          </h2>
        </div>

        {/* Row */}
        <ul className="grid gap-8 md:grid-cols-3">
          {dataProblems?.map((item) => (
            <li key={item.id} className="group flex flex-col max-md:gap-4">
              <figure className="h-auto w-full overflow-hidden">
                <Image
                  src={`/50/${item.media}`}
                  alt={item.title}
                  width={410}
                  height={480}
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </figure>

              <div className="flex flex-col items-center gap-2 text-center md:p-6">
                <h3 className="font-kanit text-2xl font-semibold text-black">
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

export default D50_Section_Problem;
