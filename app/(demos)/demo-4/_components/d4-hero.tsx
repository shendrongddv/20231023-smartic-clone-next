const D4_Section_Hero = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-3/5">
          <span>Subtitle</span>
          <h1>Hero</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            tempora illo nostrum?
          </p>
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

export default D4_Section_Hero;
