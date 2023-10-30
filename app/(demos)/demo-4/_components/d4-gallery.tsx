const D4_Section_Gallery = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-3/5">
          <h1 className="font-teko text-4xl uppercase text-foreground md:text-5xl">
            <span className="bg-gradient-to-b from-transparent from-50% to-[#FFCA2E] to-50%">
              The #1 Brand of All-natural Sports Supplements in the World
            </span>
          </h1>
        </div>

        {/* Row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-6/12">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              sapiente soluta magnam vel laboriosam, debitis ea.
            </p>
          </div>

          {/* Col */}
          <div className="md:w-6/12">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              sapiente soluta magnam vel laboriosam, debitis ea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D4_Section_Gallery;
