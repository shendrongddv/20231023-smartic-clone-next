import { CheckCircle } from "lucide-react";

const dataLists = [
  {
    id: 1,
    title: "Visual stunner that takes inspiration from architectur",
  },
];

const D5_Section_Feature3 = () => {
  return (
    <section className="relative flex flex-col">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 grid max-md:gap-12 md:grid-cols-2"
      >
        {/* Col */}
        <div className="bg-white max-md:order-last"></div>

        {/* Col */}
        <div className="bg-[url(/5/bg3-h5.jpg)] bg-cover bg-center bg-no-repeat max-md:order-first"></div>
      </div>

      {/* Content */}
      <div className="z-10 px-4">
        <div className="container grid gap-12 md:grid-cols-2 md:gap-24">
          {/* Col */}
          <div className="flex flex-col items-center gap-4 py-24 text-center max-md:order-last md:items-start md:text-start">
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
          </div>

          {/* Col */}
          <div className="aspect-1 max-md:order-first"></div>
        </div>
      </div>
    </section>
  );
};

export default D5_Section_Feature3;
