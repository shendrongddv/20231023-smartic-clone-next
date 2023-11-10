import { CheckCircle } from "lucide-react";
import Image from "next/image";

const dataLists = [
  {
    id: 1,
    title: "Auto user identification",
    media: "dummy-icon-1.svg",
  },
  {
    id: 2,
    title: "Child & adult detection",
    media: "dummy-icon-2.svg",
  },
];

const D5_Section_Feature3 = () => {
  return (
    <section className="relative flex flex-col">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 hidden md:grid md:grid-cols-2"
      >
        {/* Col */}
        <div></div>

        {/* Col */}
        <div className="bg-[url(/5/bg3-h5.webp)] bg-cover bg-center bg-no-repeat"></div>
      </div>

      {/* Content */}
      <div className="container z-10 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Col */}
        <div className="flex flex-col items-center gap-4 px-4 py-24 text-center max-md:order-last max-md:px-4 md:w-5/12 md:items-start md:text-start">
          <h2 className="text-3xl text-foreground md:text-5xl">
            Up to <span className="font-black">8 Users</span>
          </h2>

          <p className="mt-2 text-foreground">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>

          <ul className="mt-4 flex w-max gap-4">
            {dataLists?.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-center gap-2 text-center"
              >
                <figure
                  aria-hidden
                  className="grid aspect-1 h-24 place-content-center rounded-lg bg-slate-100"
                >
                  <Image
                    src={`/dummy/${item.media}`}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                  />
                </figure>

                <h3 className="w-24 text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
              </li>
            ))}
          </ul>
        </div>

        {/* Col */}
        <div
          aria-hidden
          className="flex aspect-1 bg-[url(/5/bg3-h5.webp)] bg-cover bg-center bg-no-repeat md:hidden md:w-6/12"
        ></div>
      </div>
    </section>
  );
};

export default D5_Section_Feature3;
