import { CheckCircle } from "lucide-react";

const dataLists = [
  {
    id: 1,
    title: "Visual stunner that takes inspiration from architectur",
  },
  {
    id: 2,
    title: "Using strong tempered glass",
  },
  {
    id: 3,
    title: "The polished glass goes through 5 layers of silk printing",
  },
  {
    id: 4,
    title: "Its refined texture and gleaming surface",
  },
  {
    id: 5,
    title: "Perfect complement to any home",
  },
];

const D5_Section_Feature4 = () => {
  return (
    <section className="relative flex flex-col">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 hidden md:grid md:grid-cols-2"
      >
        {/* Col */}
        <div className="bg-[url(/5/bg4-h5.jpg)] bg-cover bg-center bg-no-repeat"></div>

        {/* Col */}
        <div></div>
      </div>

      {/* Content */}
      <div className="container z-10 flex flex-col md:flex-row-reverse md:items-center md:justify-between">
        {/* Col */}
        <div className="flex flex-col items-center gap-4 px-4 py-24 text-center max-md:order-last max-md:px-4 md:w-5/12 md:items-start md:text-start">
          <h2 className="text-3xl text-foreground md:text-5xl">
            Built with <span className="font-black">Inner Strength</span>
          </h2>

          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis
          </p>

          <ul className="grid w-full gap-2">
            {dataLists?.map((item) => (
              <li key={item.id} className="flex flex-row gap-2 text-start">
                <CheckCircle className="mt-1.5 h-4 w-4 shrink-0 text-destructive" />
                <p className="font-semibold">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Col */}
        <div
          aria-hidden
          className="flex aspect-1 bg-[url(/5/bg4-h5.jpg)] bg-cover bg-center bg-no-repeat md:hidden md:w-6/12"
        ></div>
      </div>
    </section>
  );
};

export default D5_Section_Feature4;
