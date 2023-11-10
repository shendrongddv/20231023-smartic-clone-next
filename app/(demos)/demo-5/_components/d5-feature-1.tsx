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
        className="absolute inset-0 z-0 hidden md:grid md:grid-cols-2"
      >
        {/* Col */}
        <div></div>

        {/* Col */}
        <div className="bg-[url(/5/bg1-h5.jpg)] bg-cover bg-center bg-no-repeat"></div>
      </div>

      {/* Content */}
      <div className="container z-10 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Col */}
        <div className="flex flex-col items-center gap-8 px-4 py-24 text-center max-md:order-last max-md:px-4 md:w-5/12 md:items-start md:text-start">
          <h2 className="text-3xl text-foreground md:text-5xl">
            Easily Track Your <span className="font-black">Weight & More</span>
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
        <div
          aria-hidden
          className="flex aspect-1 bg-[url(/5/bg1-h5.jpg)] bg-cover bg-center bg-no-repeat md:hidden md:w-6/12"
        ></div>
      </div>
    </section>
  );
};

export default D5_Section_Feature1;
