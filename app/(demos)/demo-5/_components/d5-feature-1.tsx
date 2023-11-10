import { CheckCircle } from "lucide-react";

const dataLists = [
  {
    id: 1,
    title: "TRACK EXERCISE",
    desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora.",
  },
  {
    id: 2,
    title: "SET GOALS",
    desc: "Vincidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
];

const D5_Section_Feature1 = () => {
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
        <div className="bg-[url(/5/bg1-h5.jpg)] bg-cover bg-center bg-no-repeat max-md:order-first"></div>
      </div>

      {/* Content */}
      <div className="z-10 px-4">
        <div className="container grid gap-12 md:grid-cols-2 md:gap-24">
          {/* Col */}
          <div className="flex aspect-1 flex-col items-center gap-8 py-24 text-center max-md:order-last md:items-start md:text-start">
            <h2 className="text-3xl text-foreground md:text-5xl">
              Easily Track Your{" "}
              <span className="font-black">Weight & More</span>
            </h2>

            <ul className="grid gap-4">
              {dataLists?.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col items-center md:items-start"
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Col */}
          <div className="aspect-1 max-md:order-first"></div>
        </div>
      </div>
    </section>
  );
};

export default D5_Section_Feature1;
