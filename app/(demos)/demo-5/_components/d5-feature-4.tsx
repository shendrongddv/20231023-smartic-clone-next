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
        className="absolute inset-0 z-0 grid max-md:gap-24 md:grid-cols-2"
      >
        {/* Col */}
        <div className="bg-[url(/5/bg4-h5.jpg)] bg-cover bg-left-bottom bg-no-repeat"></div>

        {/* Col */}
        <div className="bg-white"></div>
      </div>

      {/* Content */}
      <div className="z-10 px-4">
        <div className="container grid gap-12 md:grid-cols-2 md:gap-24">
          {/* Col */}
          <div className="aspect-1"></div>

          {/* Col */}
          <div className="flex aspect-1 flex-col items-center gap-6 py-24 text-center md:items-start md:text-start">
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
                <li
                  key={item.id}
                  className="flex flex-row gap-2 text-start md:items-center"
                >
                  <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-destructive" />
                  <p className="font-semibold">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D5_Section_Feature4;
